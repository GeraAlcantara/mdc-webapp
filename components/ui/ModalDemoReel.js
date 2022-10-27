import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

export default function ModalDemoReel() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        type='button'
        name='Open dialog'
        className='uppercase rounded-full bg-gray-900 py-2 px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        onClick={openModal}
      >
        Ver demo reel
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-80' />
          </Transition.Child>
          <div className='fixed inset-0 bg-black/40 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full md:w-3/4 xl:w-7/12 2xl:8/12 transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all '>
                  <div className='flex justify-end'>
                    <button
                      type='button'
                      className='inline-flex relative justify-center rounded-t-md border border-transparent bg-black/80 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900/80 focus:outline-none border-none '
                      onClick={closeModal}
                    >
                      <RiCloseCircleLine className='text-2xl' />
                    </button>
                  </div>
                  <div className='aspect-video relative '>
                    <iframe
                      src='https://player.vimeo.com/video/425231198?h=1f08b35af5'
                      width='100%'
                      height='100%'
                      allow='autoplay; fullscreen; picture-in-picture'
                    ></iframe>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
