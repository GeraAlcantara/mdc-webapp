import { useEffect, useState } from 'react'

import LogosClientes from './LogosClientes'

export default function Clients() {
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
      window.removeEventListener('resize', handleResize)
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
          <LogosClientes />
        </div>
      </div>
      {/* Caroussel logos */}
      <div className="w-full grid place-items-center overflow-hidden lg:hidden">
        <div
          className={`  ${
            isMobile
              ? 'w-[calc(132px*24)] flex justify-between gap-2 items-center animate-carousel'
              : 'hidden'
          }`}
        >
          {/* <!-- same 3 duplicate for Caroussel --> */}
          <LogosClientes />
          <LogosClientes />
          <LogosClientes />
        </div>
      </div>
    </section>
  )
}
