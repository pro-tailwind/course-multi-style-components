import React from 'react'

import Modal from './modal'
import Button from '../button'

export default function ModalDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <main>
      <Modal
        title="Confirm subscription"
        actions={{
          confirm: {
            label: 'Yes please!',
            action: () => setIsOpen(false),
          },
          cancel: {
            label: 'No thanks.',
            action: () => setIsOpen(false),
          },
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            You're about to confirm your{' '}
            <a className="text-indigo-600 underline hover:text-indigo-500" href="#">
              membership subscription
            </a>
            . Your account will be billed for a one-year membership. We just want to make sure you
            understand that.
          </p>
        </div>
      </Modal>

      <Button impact="light" onClick={() => setIsOpen(true)}>
        Open dialog
      </Button>
    </main>
  )
}
