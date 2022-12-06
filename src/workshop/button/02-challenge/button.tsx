import React from 'react'
import { cx } from '~/utils'

// ------------------------------
// Prop types
// ------------------------------
type ButtonProps = {
  impact?: 'bold' | 'light' | 'none'
  size?: 'small' | 'medium' | 'large'
  shape?: 'square' | 'rounded' | 'pill'
}

// ------------------------------
// Tailwind Classes lookup directory
// ------------------------------
const baseClasses =
  'font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50'

/*
  ------------------------------
  1. Populate the `impactClasses` lookup object below.
  This object should have a key for each possible 
  `impact` value, and the key should 
  mirror the prop value.
  ------------------------------
*/
const impactClasses: Record<ButtonProps['impact'], string> = {
  bold: 'bg-indigo-500 text-white shadow-md hover:bg-indigo-600',
  light: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
  none: 'bg-transparent text-indigo-700 hover:bg-indigo-50',
}

// ------------------------------
// Component definition (with default variants)
// ------------------------------
const Button = ({
  size = 'medium',
  impact = 'bold',
  shape = 'rounded',
  ...restProps
}: ButtonProps & React.ComponentProps<'button'>) => {
  return (
    <button
      {...restProps}
      /* 
        ------------------------------
        2. Add the appropriate `impactClasses` values to the 
        className attribute below.
        The `cx()` function imported at the top will merge
        a series of comma separated inputs!
        ------------------------------
      */
      className={cx(baseClasses, impactClasses[impact])}
    />
  )
}

export default Button
