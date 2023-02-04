import * as React from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { cx } from '~/utils'
import Button, { ButtonProps } from '../button'

// ---------------------------------
// Prop types
// ---------------------------------
type ModalProps = {
  onClose: () => void
  title: string
  open: boolean
  isLoading?: boolean
  size?: 'small' | 'medium' | 'large'
  tone?: ButtonProps['tone']
  slideFrom?: 'top' | 'right' | 'bottom' | 'left'
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
  children: React.ReactNode
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

const slideFromClasses: Record<ModalProps['slideFrom'], { from: string; to: string }> = {
  top: {
    from: '-translate-y-8',
    to: 'translate-y-0',
  },
  right: {
    from: 'translate-x-8',
    to: 'translate-x-0',
  },
  bottom: {
    from: 'translate-y-8',
    to: 'translate-y-0',
  },
  left: {
    from: '-translate-x-8',
    to: 'translate-x-0',
  },
}

// ---------------------------------
// Main Component
// ---------------------------------
export default function Modal({
  open,
  onClose,
  title,
  children,
  actions,
  isLoading = false,
  size = 'medium',
  tone = 'default',
  slideFrom = 'top',
}: ModalProps) {
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
              enterFrom={cx('opacity-0', slideFromClasses[slideFrom].from)}
              enterTo={cx('opacity-100', slideFromClasses[slideFrom].to)}
              leave="transition ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
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
                  <Button disabled={isLoading} tone={tone} onClick={actions.confirm.action}>
                    <span className="flex items-center gap-3">
                      <span>{actions.confirm.label}</span>
                      {isLoading && <LoadingSpinner />}
                    </span>
                  </Button>

                  {/* Only show the cancel button if the action exists */}
                  {actions.cancel && (
                    <Button
                      disabled={isLoading}
                      tone={tone}
                      impact="none"
                      onClick={actions.cancel.action}
                    >
                      <span>{actions.cancel.label}</span>
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

// ------------------------------
// Loading spinner
// ------------------------------
function LoadingSpinner() {
  return (
    <Transition
      appear
      show={true}
      enter="transition ease-out"
      enterFrom="scale-0"
      enterTo="scale-100"
    >
      <svg
        className="h-5 w-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </Transition>
  )
}
