import { MdLocationOn } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";

function Address() {
  return (
    /* gradient top to bottom brand blue */
    <div className='bg-gradient-to-b from-brandBlue-500 to-brandBlue-600 py-5 px-7 xl:py-10 xl:px-14 rounded-3xl flex flex-col gap-4 text-lg '>
      <div>
        <h1 className='text-secondary text-4xl font-bold mb-4'>Oficinas</h1>
        <p className='text-gray-400 font-light max-w-prose mr-8'>
          Para más información acerca de nuestros <strong className='text-gray-50 font-bold'>Planes y Servicios</strong> póngase en contacto con nosotros a
          travez de los siguientes canales de comunicacion:
        </p>
      </div>
      {/* address semantic html */}
      <address>
        <h2 className='font-bold text-white'>Palmeiras Business Center</h2>
        <p>Oficina 4, Calle 11 Sur,</p>
        <p>Playa del Carmen</p>
        <div className='text-accent flex items-center gap-2'>
          <MdLocationOn /> <span>Ubicación en Mapa</span>
        </div>
      </address>
      <div>
        <h2 className='font-bold text-white'>Ventas</h2>
        <div className=' flex items-center gap-2'>
          <RiPhoneFill className='text-accent' /> <a href='tel:+525575839925'>+52 55 7583 9925 </a>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-white'>Oficinas</h2>
        <div className=' flex items-center gap-2'>
          <RiPhoneFill className='text-accent' /> <a href='tel:+529848033746'>+52 984 803 3746 </a>
        </div>
      </div>
      <div className='pb-8'>
        <h2 className='font-bold text-white'>Nuestro correo</h2>
        <div className=' flex items-center gap-2'>
          <MdMail className='text-accent' /> <a href='mailto:info@mexicodc.com'>info@mexicodc.com</a>
        </div>
      </div>
    </div>
  );
}

export default Address;
