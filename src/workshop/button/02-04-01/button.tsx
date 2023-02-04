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

const impactClasses: Record<ButtonProps['impact'], string> = {
  bold: 'bg-indigo-500 text-white shadow-md hover:bg-indigo-600 disabled:shadow-none',
  light: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
  none: 'bg-transparent text-indigo-700 hover:bg-indigo-50',
}

/*
  ------------------------------
  1. Populate the `sizeClasses` and `shapeClasses` lookup object below,
  following the same approach we used for the `impactClasses` object.
  ------------------------------
*/
const sizeClasses: Record<ButtonProps['size'], string> = {}
const shapeClasses: Record<ButtonProps['shape'], string> = {}

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
        2. Add the appropriate `sizeClasses` and `shapeClasses` 
        values to the className attribute below.
        ------------------------------
      */
      className={cx(baseClasses, impactClasses[impact])}
    />
  )
}

export default Button
