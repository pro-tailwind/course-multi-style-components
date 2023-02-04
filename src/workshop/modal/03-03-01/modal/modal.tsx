import * as React from 'react'
import { Dialog } from '@headlessui/react'

import Button from '../button'

// ---------------------------------
// Prop types
// ---------------------------------
type ModalProps = {
  open: boolean
  onClose: () => void
  /*
    ------------------------------
    We've added new props for our Modal title, 
    body (children) and action buttons.
    ------------------------------
  */
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
}

// ---------------------------------
// Main Component
// ---------------------------------
export default function Modal({ open, onClose, title, children, actions }: ModalProps) {
  /*  
    ------------------------------
    TODO: Update the code below to use the title, children 
    and action props instead of having these "hardcoded".
    ------------------------------
  */
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
                  Confirm subscription
                </Dialog.Title>

                {/* Body */}
                <div className="mt-4">
                  <p className="text-slate-500">
                    You're about to confirm your{' '}
                    <a className="text-indigo-600 underline hover:text-indigo-500" href="#">
                      membership subscription
                    </a>
                    . Your account will be billed for a one-year membership. We just want to make
                    sure you understand that.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-2 border-t p-4 sm:flex-row-reverse">
              <Button onClick={onClose}>Confirm</Button>
              <Button impact="none" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
