import React from 'react'

import Modal from './modal'
import Button from '../button'

export default function ModalDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  /* 
    1. Create a new `isLoading` piece of state.
    We'll use this to display a spinner. 
  */

  function handleConfirm() {
    /* 
      2. When the `confirm` button is clicked, 
      set `isLoading` to true
    */

    /* 
      3. Let's simulate an async operation with a `setTimeout`.
      The Modal can be closed 
    */
    setTimeout(() => {
      // TODO: Close the modal
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
        title="Delete account permantly"
        actions={{
          confirm: {
            label: 'Yes, delete my account!',
            action: handleConfirm,
            // TODO: Add the `isLoading` prop here
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
