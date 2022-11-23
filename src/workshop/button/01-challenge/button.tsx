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
const baseClasses = ''

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
      className=""
    />
  )
}

export default Button
