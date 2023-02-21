import Image from 'next/image'
import { useEffect, useState } from 'react'

import IberostarLogo from '../../public/clientes/iberostarLogo.png'
import MedixLogo from '../../public/clientes/medixLogo.png'
import IbmLogo from '../../public/clientes/ibmLogo.png'
import MeetmeLogo from '../../public/clientes/meetmeLogo.png'
import IelLogo from '../../public/clientes/logo_iel-white.png'

function Clients() {
  const [isMobile, setIsMobile] = useState(false)
  //check the screen size
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleResize)
    }
  }, [])

  return (
    <section className="py-4 lg:py-8 xl:py-12">
      <div className="flex flex-col lg:flex-row justify-center mdc-ui-container xl:justify-between items-center">
        <div className="min-w-[185px] flex flex-row lg:flex-col flex- items-baseline justify-center mb-4 lg:mb-6 xl:mb-0 lg:mr-12 ">
          <h3 className="text-2xl leading-32 mr-8 text-secondary">Casos de Éxito</h3>
          <span className="">Nuestros Clientes</span>
        </div>
        {/* logos */}

        <div className="hidden lg:flex flex-row items-center flex-shrink-0 lg:min-w-[80%] justify-between">
          <div className="w-24 mr-12">
            <Image alt="Iberostar Logo" src={IberostarLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="Medix Logo" src={MedixLogo} />
          </div>
          <div className="w-32 mr-12">
            <Image alt="Inspired e-Learning Logo" src={IelLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="IBM Logo" src={IbmLogo} />
          </div>
          <div className="w-24">
            <Image alt="Meet me in the cloud Logo" src={MeetmeLogo} />
          </div>
        </div>
      </div>
      {/* Caroussel logos */}
      <div className="w-full grid place-items-center overflow-hidden lg:hidden">
        <div
          className={`  ${
            isMobile
              ? 'w-[calc(120px*15)] flex justify-between items-center animate-carousel'
              : 'hidden'
          }`}
        >
          <div className="w-24 mr-12">
            <Image alt="Iberostar Logo" src={IberostarLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="Medix Logo" src={MedixLogo} />
          </div>
          <div className="w-32 mr-12">
            <Image alt="Inspired e-Learning Logo" src={IelLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="IBM Logo" src={IbmLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="Meet me in the cloud" src={MeetmeLogo} />
          </div>

          {/* <!-- same 5 slides doubled (duplicate)--> */}
          <div className="w-24 mr-12">
            <Image alt="Iberostar Logo" src={IberostarLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="Medix Logo" src={MedixLogo} />
          </div>
          <div className="w-32 mr-12">
            <Image alt="Inspired e-Learning Logo" src={IelLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="IBM Logo" src={IbmLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="Meet me in the cloud" src={MeetmeLogo} />
          </div>
          {/* <!-- same 5 slides tripled (duplicate 2)--> */}
          <div className="w-24 mr-12">
            <Image alt="Iberostar Logo" src={IberostarLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="Medix Logo" src={MedixLogo} />
          </div>
          <div className="w-32 mr-12">
            <Image alt="Inspired e-Learning Logo" src={IelLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="IBM Logo" src={IbmLogo} />
          </div>
          <div className="w-24 mr-12">
            <Image alt="Meet me in the cloud" src={MeetmeLogo} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
