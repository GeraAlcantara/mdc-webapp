import { RiPhoneFill } from 'react-icons/ri'

function Address() {
  return (
    /* gradient top to bottom brand blue */
    <div className="bg-gradient-to-b from-brandBlue-500 to-brandBlue-600 py-5 px-4 lg:px-7 xl:py-10 xl:px-14 rounded-3xl flex flex-col lg:flex-row  gap-4 text-lg ">
      <div className="lg:w-1/2">
        <h1 className="text-secondary text-4xl font-bold mb-4">Oficinas</h1>
        <p className="text-gray-400 font-light max-w-prose lg:mr-8">
          Para más información acerca de nuestros{' '}
          <strong className="text-gray-50 font-bold">Planes y Servicios</strong> póngase en contacto
          con nosotros a través de los siguientes canales de comunicacion:
        </p>
      </div>
      {/* address semantic html */}
      <div className="flex flex-row flex-wrap lg:flex-col lg:flex-nowrap gap-4 lg:ml-5">
        <address>
          <h2 className="font-bold text-brandWhite">Palmeiras Business Center</h2>
          <p>Oficina 4, Calle 11 Sur,</p>
          <p>Playa del Carmen</p>
          {/* <div className='text-accent flex items-center gap-2'>
            <MdLocationOn /> <span>Ubicación en Mapa</span>
          </div> */}
        </address>
        <div>
          <h2 className="font-bold text-brandWhite">Oficinas</h2>
          <div className=" flex items-center gap-2">
            <RiPhoneFill className="text-accent" />
            <a href="tel:+525575839925">+52 55 7583 9925 </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address
