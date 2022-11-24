import * as React from 'react'
import { Dialog } from '@headlessui/react'

import { cx } from '~/utils'
import Button from '../button'

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
  /*
    ------------------------------
    This time, we're adding a new `size` prop. 
    It's  optional and defaults to `medium`.
    ------------------------------
  */
  size?: 'small' | 'medium' | 'large'
}

// ---------------------------------
// Style lookup directories
// ---------------------------------

/*  
  ------------------------------
  TODO: Populate the `sizeClasses` object below with 
  the appropriate keys. 
  
  **At the `sm` breakpoint and up**, a max-width container 
  should be applied, as follows:
  small -> `sm`
  medium -> `lg`
  large -> `2xl`
  ------------------------------
*/
const sizeClasses: Record<ModalProps['size'], string> = {}

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
}: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-indigo-300 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Modal panel */}
          <Dialog.Panel className="relative w-full overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:max-w-lg">
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
