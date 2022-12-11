import * as React from 'react'
import { useCalendar, useCalendarGrid, useButton, useLocale, useDateFormatter } from 'react-aria'
import { useCalendarState } from 'react-stately'
import {
  createCalendar,
  getWeeksInMonth,
  startOfWeek,
  today,
  getLocalTimeZone,
} from '@internationalized/date'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import CalendarDay from './calendar-day'
import { makeCalendarAvailabilities } from '~/utils'

// ----------------------------
// Calendar
// ----------------------------
export default function Calendar({ vacancyToday = false }) {
  const localTimezone = getLocalTimeZone()
  const [selectedDate, setSelectedDate] = React.useState(today(localTimezone))
  const bookingAvailabilities = makeCalendarAvailabilities(16, { includeToday: vacancyToday })
  const { locale } = useLocale()

  const props = {
    minValue: today(localTimezone),
    maxValue: today(localTimezone).add({ months: 6 }),
    value: selectedDate,
    onChange: (date) => setSelectedDate(date),
    bookingAvailabilities,
  }

  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = React.useRef()
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(props, state)

  return (
    <div {...calendarProps} ref={ref} className="calendar">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex gap-2">
          <CalendarButton {...prevButtonProps} />
          <CalendarButton {...nextButtonProps} />
        </div>
      </div>
      <CalendarGrid state={state} bookingAvailabilities={bookingAvailabilities} />
    </div>
  )
}

// ----------------------------
// Calendar Grid
// ----------------------------

function CalendarGrid({ state, bookingAvailabilities, ...props }) {
  const { locale } = useLocale()
  const { gridProps, headerProps } = useCalendarGrid(props, state)
  const formatter = useDateFormatter({ weekday: 'long' })

  // Get the full day strings for the calendar heading
  const daysOfWeek = React.useMemo(() => {
    const weekStart = startOfWeek(today(state.timeZone), locale)
    return [...new Array(7).keys()].map((index) => {
      const date = weekStart.add({ days: index })
      const dateDay = date.toDate(state.timeZone)
      return formatter.format(dateDay)
    })
  }, [locale, state.timeZone, formatter])

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <div className="-mx-4">
      <table {...gridProps} className="mt-4 w-full table-fixed border-separate border-spacing-2">
        <thead {...headerProps}>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index} className="pb-4">
                <abbr
                  className="cursor-help text-sm font-semibold uppercase tracking-wider text-slate-700 no-underline"
                  title={day}
                >
                  {day.slice(0, 3)}
                </abbr>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
            <tr key={weekIndex} className="text-center">
              {state
                .getDatesInWeek(weekIndex)
                .map((date, i) =>
                  date ? (
                    <CalendarDay
                      key={i}
                      state={state}
                      date={date}
                      bookingAvailabilities={bookingAvailabilities}
                    />
                  ) : (
                    <td key={i} />
                  )
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ----------------------------
// Month Navigation Button
// ----------------------------

function CalendarButton(props) {
  const ref = React.useRef()
  const { buttonProps } = useButton(props, ref)

  const direction = buttonProps['aria-label']

  return (
    <button
      ref={ref}
      {...buttonProps}
      className="grid aspect-square w-12 max-w-full place-items-center rounded-full border border-slate-300 text-slate-400 hover:text-indigo-600 disabled:border-slate-200 disabled:text-slate-300 disabled:hover:text-slate-300"
    >
      {direction === 'Previous' ? (
        <ChevronLeftIcon className="-ml-0.5 h-6 w-6" />
      ) : (
        <ChevronRightIcon className="ml-0.5 h-6 w-6" />
      )}
    </button>
  )
}
