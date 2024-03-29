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
    TODO: Add transitions using Headless UI's `Transition` component.
    The transitions we're going for:
      
      1. The background overlay should fade-in on enter, 
      fade-out on leave.
      
      2. The Dialog pabel should slide-in from the bottom 
      by 2rem on enter, and fade-out on leave.

    You can use a `<Transition.Root>` component to 
    orchestrate both transitions, which can use 
    a `<Transition.Child>` component each.
    ------------------------------
  */
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      {/* Background overlay */}

      <div className={cx('fixed inset-0 bg-opacity-75', toneClasses[tone])}></div>

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
        </div>
      </div>
    </Dialog>
  )
}
