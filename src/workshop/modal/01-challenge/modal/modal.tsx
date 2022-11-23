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
    <div className="relative z-10">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-indigo-300 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Modal panel */}
          <div className="relative w-full overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:max-w-lg">
            <div className="bg-white p-4 sm:p-6">
              <div className="text-center sm:text-left">
                <h2 className="text-xl font-semibold leading-6 text-slate-900">
                  Confirm subscription
                </h2>
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
          </div>
        </div>
      </div>
    </div>
  )
}
