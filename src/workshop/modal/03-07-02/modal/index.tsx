import React from 'react'

import Modal from './modal'
import Button from '../button'

export default function ModalDemo() {
  const [isOpenTop, setIsOpenTop] = React.useState(false)
  const [isOpenRight, setIsOpenRight] = React.useState(false)
  const [isOpenBottom, setIsOpenBottom] = React.useState(false)
  const [isOpenLeft, setIsOpenLeft] = React.useState(false)

  return (
    <main>
      {/* 
        ------------------------------
        Slide from top
        ------------------------------
      */}
      <Modal
        slideFrom="top"
        open={isOpenTop}
        onClose={() => setIsOpenTop(false)}
        title="Slide from top"
        actions={{
          confirm: {
            label: 'Okay!',
            action: () => setIsOpenTop(false),
          },
          cancel: {
            label: 'Cancel',
            action: () => setIsOpenTop(false),
          },
        }}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            This modal slides from the top. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Tenetur commodi dolorum ut consectetur provident ipsum corporis nihil, animi
            voluptas.
          </p>
        </div>
      </Modal>

      {/* 
        ------------------------------
        Slide from right
        ------------------------------
      */}
      <Modal
        slideFrom="right"
        open={isOpenRight}
        onClose={() => setIsOpenRight(false)}
        title="Slide from right"
        actions={{
          confirm: {
            label: 'Okay!',
            action: () => setIsOpenRight(false),
          },
          cancel: {
            label: 'Cancel',
            action: () => setIsOpenRight(false),
          },
        }}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            This modal slides from the right. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Tenetur commodi dolorum ut consectetur provident ipsum corporis nihil, animi
            voluptas.
          </p>
        </div>
      </Modal>

      {/* 
        ------------------------------
        Slide from bottom
        ------------------------------
      */}
      <Modal
        slideFrom="bottom"
        open={isOpenBottom}
        onClose={() => setIsOpenBottom(false)}
        title="Slide from bottom"
        actions={{
          confirm: {
            label: 'Okay!',
            action: () => setIsOpenBottom(false),
          },
          cancel: {
            label: 'Cancel',
            action: () => setIsOpenBottom(false),
          },
        }}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            This modal slides from the bottom. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Tenetur commodi dolorum ut consectetur provident ipsum corporis nihil, animi
            voluptas.
          </p>
        </div>
      </Modal>

      {/* 
        ------------------------------
        Slide from left
        ------------------------------
      */}
      <Modal
        slideFrom="left"
        open={isOpenLeft}
        onClose={() => setIsOpenLeft(false)}
        title="Slide from left"
        actions={{
          confirm: {
            label: 'Okay!',
            action: () => setIsOpenLeft(false),
          },
          cancel: {
            label: 'Cancel',
            action: () => setIsOpenLeft(false),
          },
        }}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            This modal slides from the left. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Tenetur commodi dolorum ut consectetur provident ipsum corporis nihil, animi
            voluptas.
          </p>
        </div>
      </Modal>

      {/* 
        ------------------------------
        Toggle buttons
        ------------------------------
      */}
      <div className="flex gap-2">
        <Button impact="light" onClick={() => setIsOpenTop(true)}>
          From top
        </Button>
        <Button impact="light" onClick={() => setIsOpenRight(true)}>
          From right
        </Button>
        <Button impact="light" onClick={() => setIsOpenBottom(true)}>
          From bottom
        </Button>
        <Button impact="light" onClick={() => setIsOpenLeft(true)}>
          From left
        </Button>
      </div>
    </main>
  )
}
