/* 
  The first few lines are wiring up React-Aria's `useCalendar`.  
  If curious, you can learn more here: 
  https://react-spectrum.adobe.com/react-aria/useCalendar.html
*/
import * as React from 'react'
import { useCalendarCell } from 'react-aria'
import { isSameDay, parseDateTime, isToday, getLocalTimeZone } from '@internationalized/date'

import { cx } from '~/utils'

// ------------------------------
// Component definition
// ------------------------------
export default function CalendarDay({ state, date, bookingAvailabilities }) {
  const ref = React.useRef()
  const { cellProps, buttonProps, isSelected, isOutsideVisibleRange, isDisabled, formattedDate } =
    useCalendarCell({ date }, state, ref)

  // Checking if the day is today
  const localTimezone = getLocalTimeZone()
  const isCurrentDay = isToday(date, localTimezone)

  /* 
    Our calendar has certain available, "bookable" dates.
    We create a list of days with availability, so that
    we can style those calendar days differently.
  */
  const hasAvailability = bookingAvailabilities.some((availability) =>
    isSameDay(parseDateTime(availability.startTime), date)
  )

  // ------------------------------
  // Styles lookup dictionary
  // ------------------------------
  const baseClasses =
    'relative w-12 max-w-full aspect-square rounded-full grid place-items-center focus:outline-none focus:ring focus:ring-offset-1 focus:ring-indigo-400'

  type Status = 'DISABLED' | 'SELECTED' | 'NO_VACANCY' | 'TODAY_NO_VACANCY' | 'VACANCY'

  const statusClasses: Record<Status, string> = {
    DISABLED: 'text-slate-300 pointer-events-none',
    SELECTED: 'bg-indigo-600 text-white font-bold bg-stripes',
    NO_VACANCY: 'text-slate-900 hover:bg-slate-100',
    TODAY_NO_VACANCY: 'text-indigo-600 font-bold hover:bg-slate-100',
    VACANCY: 'bg-indigo-100 text-indigo-600 font-bold hover:bg-indigo-200',
  }

  /* 
    ------------------------------
    ## CHALLENGE ##
    1. Delete the legacy `dynamicClasses` styles object below.
    WARNING: this will break the page 💥
    You'll also need to delete all references to the `dynamicClasses` 
    object in the `className` attribute of the returned JSX.
    ------------------------------
  */
  const dynamicClasses = {
    disabled: 'text-slate-300 pointer-events-none',
    selected: 'bg-indigo-600 text-white font-bold bg-stripes',
    candidate: 'text-slate-900 hover:bg-slate-100',
    today: 'text-indigo-600 font-bold hover:bg-slate-100',
    hasAvailability: 'bg-indigo-100 text-indigo-600 font-bold hover:bg-indigo-200',
  }
  /* 
    ------------------------------
     ## CHALLENGE ##
    2. Write the logic inside the `getStatus` function below,  
    so that it returns the correct availability status 
    based on the `Status` type.
    ------------------------------
  */
  type GetStatus = () => Status
  const getStatus: GetStatus = function () {
    // TODO: Return the correct availability status
  }

  // ------------------------------
  // Returned JSX
  // ------------------------------
  return (
    // Spreading `useCalendar` props on the various elememnts...
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        /*
          ------------------------------
          ## CHALLENGE ##
          3. Add the correct `statusClasses` styles to the `className` 
          attribute, using the `getStatus` function you've updated.
          ------------------------------
        */
        className={cx(
          baseClasses,
          /* 
            ## CHALLENGE ##
            1b. All the styles below can go away. Instead of deleting them, 
            comment them out so you can compare the "before/after"
            in terms of complexity.
          */
          isSelected && dynamicClasses.selected,
          isDisabled && dynamicClasses.disabled,
          isCurrentDay && !isSelected && dynamicClasses.today,
          hasAvailability && !isDisabled && !isSelected && dynamicClasses.hasAvailability,
          !hasAvailability &&
            !isCurrentDay &&
            !isDisabled &&
            !isSelected &&
            dynamicClasses.candidate
        )}
      >
        <span>{formattedDate}</span>
        {/* Adding a "spot" below the current day */}
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
