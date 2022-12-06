import * as React from 'react'
import { Dialog } from '@headlessui/react'

import Button from '../button'

// ---------------------------------
// Prop types
// ---------------------------------
type ModalProps = {
  open: boolean
  onClose: () => void
}

// ---------------------------------
// Main Component
// ---------------------------------
export default function Modal({ open, onClose }: ModalProps) {
  /*  
    ------------------------------
    TODO: Use Headless UI's `Dialog` component to improve
    the modal's usability and accessibility.
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
                <Dialog.Title className="text-xl font-semibold leading-6 text-slate-900">
                  Confirm subscription
                </Dialog.Title>
                {children}
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
