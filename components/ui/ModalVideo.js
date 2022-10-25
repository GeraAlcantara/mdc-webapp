import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RiPlayCircleLine, RiCloseCircleLine } from "react-icons/ri";
import Image from "next/image";
import ReelImg from "../../public/videoreel.jpg";
export default function ModalVideo() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className='inset-0 flex items-center justify-center relative '>
        <Image src={ReelImg} alt='ilustraciones de un curso'></Image>
        <div className='flex justify-center items-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute'>
          <button
            type='button'
            name='Open dialog'
            className='rounded-full bg-black bg-opacity-60 p-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
          >
            <RiPlayCircleLine className='text-7xl' />
            <span className='sr-only'>Open dialog</span>
          </button>
        </div>
        <button onClick={openModal} className='inset-0 absolute w-full h-full bg-transparent hover:bg-black/30 cursor-pointer transition-all'></button>
      </div>

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
                <Dialog.Panel className='w-11/12 lg:w-3/4 xl:w-1/2 transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all '>
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

                  {/* <iframe
                    src='https://player.vimeo.com/video/425231198?h=1f08b35af5'
                    width='640'
                    height='360'
                    allow='autoplay; fullscreen; picture-in-picture'
                  ></iframe> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

/* ModalVideo */
