import React from 'react'
import { cx } from '~/utils'

// ------------------------------
// Prop types
// ------------------------------
export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  impact?: 'bold' | 'light' | 'none'
  tone?: 'default' | 'danger' | 'success'
  shape?: 'square' | 'rounded' | 'pill'
}

// ------------------------------
// Tailwind Classes lookup directory
// ------------------------------
const baseClasses =
  'font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50'

const impactClasses: Record<ButtonProps['tone'], Record<ButtonProps['impact'], string>> = {
  default: {
    bold: 'bg-indigo-500 text-white shadow-md hover:bg-indigo-600 focus-visible:ring-indigo-500',
    light: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus-visible:ring-indigo-500',
    none: 'bg-transparent text-indigo-700 hover:bg-indigo-50 focus-visible:ring-indigo-500',
  },
  danger: {
    bold: 'bg-red-500 text-white shadow-md hover:bg-red-600 focus-visible:ring-red-500',
    light: 'bg-red-100 text-red-700 hover:bg-red-200 focus-visible:ring-red-500',
    none: 'bg-transparent text-red-700 hover:bg-red-50 focus-visible:ring-red-500',
  },
  success: {
    bold: 'bg-green-500 text-white shadow-md hover:bg-green-600 focus-visible:ring-green-500',
    light: 'bg-green-100 text-green-700 hover:bg-green-200 focus-visible:ring-green-500',
    none: 'bg-transparent text-green-700 hover:bg-green-50 focus-visible:ring-green-500',
  },
}

const sizeClasses: Record<ButtonProps['size'], string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-5 py-2',
  large: 'px-7 py-2.5 text-lg',
}

const shapeClasses: Record<ButtonProps['shape'], string> = {
  square: '',
  rounded: 'rounded',
  pill: 'rounded-full',
}

// ------------------------------
// Main component
// ------------------------------
const Button = ({
  size = 'medium',
  impact = 'bold',
  tone = 'default',
  shape = 'rounded',
  ...restProps
}: ButtonProps & React.ComponentProps<'button'>) => {
  return (
    <button
      {...restProps}
      className={cx(
        baseClasses,
        impactClasses[tone][impact],
        sizeClasses[size],
        shapeClasses[shape]
      )}
    />
  )
}

export default Button
