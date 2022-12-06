import React from 'react'

import Modal from './modal'
import Button from '../button'

export default function ModalDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isLocked, setIsLocked] = React.useState(false)

  function handleConfirm() {
    setIsLoading(true)
    setIsLocked(true)

    setTimeout(() => {
      setIsOpen(false)
      setIsLocked(false)
    }, 2000)
  }

  return (
    <main>
      {/* 
        ------------------------------
        Slide from top
        ------------------------------
      */}
      <Modal
        slideFrom="top"
        tone="danger"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onCloseComplete={() => setIsLoading(false)}
        title="Delete account permantly"
        isLocked={isLocked}
        actions={{
          confirm: {
            label: 'Yes, delete my account!',
            action: handleConfirm,
            isLoading,
          },
          cancel: {
            label: 'Wow no, stop!',
            action: () => setIsOpen(false),
          },
        }}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            You're about to delete your account permantently. This action cannot be undone. Are you
            sure you want to do this?
          </p>
        </div>
      </Modal>
      {/* 
        ------------------------------
        Toggle buttons
        ------------------------------
      */}
      <div className="flex gap-2">
        <Button tone="danger" impact="light" onClick={() => setIsOpen(true)}>
          Open modal
        </Button>
      </div>
    </main>
  )
}
