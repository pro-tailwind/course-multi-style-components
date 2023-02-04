import React from 'react'

import Modal from './modal'
import Button from '../button'

export default function ModalDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <main>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title=" Modal transition"
        actions={{
          confirm: {
            label: 'That was nice!',
            action: () => setIsOpen(false),
          },
          cancel: {
            label: 'Wow',
            action: () => setIsOpen(false),
          },
        }}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            A little bit of transition animation can go a long way! How much nicer does that modal
            feel now (providing you manage to add the transition) 🎉
          </p>
        </div>
      </Modal>

      {/* 
        ------------------------------
        Toggle button
        ------------------------------
      */}
      <div className="flex gap-2">
        <Button impact="light" onClick={() => setIsOpen(true)}>
          With transition
        </Button>
      </div>
    </main>
  )
}
