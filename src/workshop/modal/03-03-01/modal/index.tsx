import React from 'react'

import Modal from './modal'
import Button from '../button'

export default function ModalDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <main>
      {/* 
      ------------------------------
      TODO: Pass the required `title`, `children` 
      and `action` props to the modal below.
      ------------------------------
    */}
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />

      <Button impact="light" onClick={() => setIsOpen(true)}>
        Open dialog
      </Button>
    </main>
  )
}
