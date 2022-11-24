import * as React from 'react'
import { Dialog } from '@headlessui/react'

import { cx } from '~/utils'
import Button, { ButtonProps } from '../button'

// ---------------------------------
// Prop types
// ---------------------------------
type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  actions: {
    cancel?: {
      label: string
      action: () => void
    }
    confirm: {
      label: string
      action: () => void
    }
  }
  size?: 'small' | 'medium' | 'large'
  /* 
    ------------------------------
    Once again, a new prop! This time, it's called `tone`.
    It reflects the 3 tones available on the `Button`
    component we created earlier in this workshop.

    Notice we're importing the `ButtonProps` type
    from the `Button` component file, to make
    sure the possible values are the same!
    ------------------------------
  */
  tone?: ButtonProps['tone']
}

// ---------------------------------
// Style lookup directories
// ---------------------------------
const sizeClasses: Record<ModalProps['size'], string> = {
  small: 'sm:max-w-sm',
  medium: 'sm:max-w-lg',
  large: 'sm:max-w-2xl',
}

/* 
  ------------------------------
  TODO: Populate the `toneClasses` object below with 
  the appropriate keys. Figure out where to use
  these dynamic classes, so the modal shows
  the correct `tone` styles.
  ------------------------------
*/
const toneClasses: Record<ModalProps['tone'], string> = {}

// ---------------------------------
// Main Component
// ---------------------------------
export default function Modal({
  open,
  onClose,
  title,
  children,
  actions,
  size = 'medium',
  tone = 'default',
}: ModalProps) {
  /* 
    ------------------------------
    NOTE: You'll need to do more than just use the 
    `toneClasses` object for this challenge...
    ------------------------------
  */
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-indigo-300 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Modal panel */}
          <Dialog.Panel
            className={cx(
              'relative w-full overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8',
              sizeClasses[size]
            )}
          >
            <div className="bg-white p-4 sm:p-6">
              <div className="text-center sm:text-left">
                {/* Title */}
                <Dialog.Title className="text-xl font-semibold leading-6 text-slate-900">
                  {title}
                </Dialog.Title>

                {/* Body */}
                {children}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-2 border-t p-4 sm:flex-row-reverse">
              <Button onClick={actions.confirm.action}>{actions.confirm.label}</Button>

              {/* Only show the cancel button if the action exists */}
              {actions.cancel && (
                <Button impact="none" onClick={actions.cancel.action}>
                  {actions.cancel.label}
                </Button>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
