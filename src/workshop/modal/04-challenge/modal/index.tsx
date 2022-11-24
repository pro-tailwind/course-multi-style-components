import React from 'react'

import Modal from './modal'
import Button from '../button'

export default function ModalDemo() {
  const [isOpenDefault, setIsOpenDefault] = React.useState(false)
  const [isOpenDanger, setIsOpenDanger] = React.useState(false)
  const [isOpenSuccess, setIsOpenSuccess] = React.useState(false)

  return (
    <main>
      {/* 
        ------------------------------
        Default tone
        ------------------------------
      */}

      <Modal
        open={isOpenDefault}
        onClose={() => setIsOpenDefault(false)}
        title="Default tone"
        actions={{
          confirm: {
            label: 'Okay!',
            action: () => setIsOpenDefault(false),
          },
          cancel: {
            label: 'Nope',
            action: () => setIsOpenDefault(false),
          },
        }}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            This is a small modal. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            commodi dolorum ut consectetur provident ipsum corporis nihil, animi voluptas.
          </p>
        </div>
      </Modal>

      {/* 
        ------------------------------
        Danger modal
        ------------------------------
      */}

      <Modal
        tone="danger"
        open={isOpenDanger}
        onClose={() => setIsOpenDanger(false)}
        title="Danger tone 🙀"
        actions={{
          confirm: {
            label: 'Yes, delete my account!',
            action: () => setIsOpenDanger(false),
          },
          cancel: {
            label: 'No, Stop!',
            action: () => setIsOpenDanger(false),
          },
        }}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            This is a medium modal. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Tenetur commodi dolorum ut consectetur provident ipsum corporis nihil, animi voluptas.
          </p>
        </div>
      </Modal>

      {/* 
        ------------------------------
        Success modal
        ------------------------------
      */}

      <Modal
        tone="success"
        open={isOpenSuccess}
        onClose={() => setIsOpenSuccess(false)}
        title="Successful tone 🎉"
        actions={{
          confirm: {
            label: 'Awesome!',
            action: () => setIsOpenSuccess(false),
          },
          cancel: {
            label: 'Cancel',
            action: () => setIsOpenSuccess(false),
          },
        }}
      >
        <div className="mt-4">
          <p className="text-slate-500">
            This is a large modal. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            commodi dolorum ut consectetur provident ipsum corporis nihil, animi voluptas.
          </p>
        </div>
      </Modal>

      {/* 
        ------------------------------
        Toggle buttons
        ------------------------------
      */}
      <div className="flex gap-2">
        <Button impact="light" onClick={() => setIsOpenDefault(true)}>
          Default tone
        </Button>
        <Button tone="danger" impact="light" onClick={() => setIsOpenDanger(true)}>
          Danger
        </Button>
        <Button tone="success" impact="light" onClick={() => setIsOpenSuccess(true)}>
          Success
        </Button>
      </div>
    </main>
  )
}
