import * as React from 'react'
import { Dialog, Transition } from '@headlessui/react'

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
  tone?: ButtonProps['tone']
  /*
    You know the drill - we've got a new prop!
  */
  slideFrom?: 'top' | 'right' | 'bottom' | 'left'
}

// ---------------------------------
// Style lookup directories
// ---------------------------------
const sizeClasses: Record<ModalProps['size'], string> = {
  small: 'sm:max-w-sm',
  medium: 'sm:max-w-lg',
  large: 'sm:max-w-2xl',
}

const toneClasses: Record<ModalProps['tone'], string> = {
  default: 'bg-indigo-300',
  danger: 'bg-red-300',
  success: 'bg-green-300',
}

/* 
  ------------------------------
  TODO: Populate the `slideFromClasses` object below 
  with the correct keys and styles.
  ------------------------------
*/
const slideFromClasses: Record<ModalProps['slideFrom'], { from: string; to: string }> = {}

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
  slideFrom = 'top',
}: ModalProps) {
  /* 
    ------------------------------
    TODO: Update the code below to make the Dialog panel slide 
    from the direction specified in the `slideFrom` prop.
    ------------------------------
  */
  return (
    <Transition.Root show={open}>
      <Dialog onClose={onClose} className="relative z-10">
        {/* Background overlay */}
        <Transition.Child
          enter="transition ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={cx('fixed inset-0 bg-opacity-75 transition-opacity', toneClasses[tone])}
          ></div>
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* Modal panel */}
            <Transition.Child
              enter="transition ease-out"
              enterFrom="opacity-0 translate-y-8"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
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
                  <Button tone={tone} onClick={actions.confirm.action}>
                    {actions.confirm.label}
                  </Button>

                  {/* Only show the cancel button if the action exists */}
                  {actions.cancel && (
                    <Button tone={tone} impact="none" onClick={actions.cancel.action}>
                      {actions.cancel.label}
                    </Button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
