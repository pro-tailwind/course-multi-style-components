import React from 'react'

// ------------------------------
// Prop types
// ------------------------------
type ButtonProps = {
  impact?: 'bold' | 'light' | 'none'
  size?: 'small' | 'medium' | 'large'
  shape?: 'square' | 'rounded' | 'pill'
}

/*
  ------------------------------
  1. Take a look at the `HardcodedButtons` component.
  Identify and extract the Tailwind classes 
  common to **all buttons**  into the 
  `baseClasses` variable below.
  ------------------------------
*/
const baseClasses =
  'font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50'

const thing = {
  foo: 'text-red-500',
  bar: 'text-4xl font-semibold',
}

// ------------------------------
// Component definition
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
        2. Add the `baseClasses` variable into 
        the className attribute below.
        ------------------------------
      */
      className={baseClasses}
    />
  )
}

export default Button
