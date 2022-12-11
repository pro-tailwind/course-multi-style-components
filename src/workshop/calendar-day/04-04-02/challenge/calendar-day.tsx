import * as React from 'react'
import { useCalendarCell } from 'react-aria'
import { isSameDay, parseDateTime, isToday, getLocalTimeZone } from '@internationalized/date'

import { cx } from '~/utils'

export default function CalendarDay({ state, date, bookingAvailabilities }) {
  const ref = React.useRef()
  const { cellProps, buttonProps, isSelected, isOutsideVisibleRange, isDisabled, formattedDate } =
    useCalendarCell({ date }, state, ref)

  // Check if the day is today
  const localTimezone = getLocalTimeZone()
  const isCurrentDay = isToday(date, localTimezone)

  // Match booking availabilies against the day
  const hasAvailability = bookingAvailabilities.some((availability) =>
    isSameDay(parseDateTime(availability.startTime), date)
  )

  type Status = 'SELECTED' | 'DISABLED' | 'VACANCY' | 'NO_VACANCY' | 'TODAY_NO_VACANCY'

  // ------------------------------
  // Styles lookup dictionary
  // ------------------------------
  const baseClasses =
    'relative w-12 max-w-full aspect-square rounded-full grid place-items-center focus:outline-none focus:ring focus:ring-offset-1 focus:ring-indigo-400'

  const statusClasses: Record<Status, string> = {
    SELECTED: 'bg-indigo-600 text-white font-bold bg-stripes',
    DISABLED: 'text-slate-300 pointer-events-none',
    VACANCY: 'bg-indigo-100 text-indigo-600 font-bold hover:bg-indigo-200',
    NO_VACANCY: 'text-slate-900 hover:bg-slate-100',
    TODAY_NO_VACANCY: 'text-indigo-600 font-bold hover:bg-slate-100',
  }

  const getStatus: () => Status = () => {
    if (isSelected) return 'SELECTED'
    if (isDisabled) return 'DISABLED'
    if (hasAvailability) return 'VACANCY'
    return isCurrentDay ? 'TODAY_NO_VACANCY' : 'NO_VACANCY'
  }

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={cx(
          baseClasses,
          statusClasses[getStatus()]
          // isSelected && dynamicClasses.selected,
          // isDisabled && dynamicClasses.disabled,
          // isCurrentDay && !isSelected && dynamicClasses.today,
          // hasAvailability && !isDisabled && !isSelected && dynamicClasses.hasAvailability,
          // !hasAvailability &&
          //   !isCurrentDay &&
          //   !isDisabled &&
          //   !isSelected &&
          //   dynamicClasses.candidate
        )}
      >
        <span>{formattedDate}</span>
        {/* Current day "spot" indicator */}
        {isCurrentDay && (
          <span
            className={cx(
              'absolute bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full',
              isSelected ? 'bg-white' : 'bg-indigo-600'
            )}
          ></span>
        )}
      </div>
    </td>
  )
}
