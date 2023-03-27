import Image from 'next/image'

import IberostarLogo from '../../public/clientes/iberostarLogo.png'
import MedixLogo from '../../public/clientes/medixLogo.png'
import MeetmeLogo from '../../public/clientes/meetmeLogo.png'
import IelLogo from '../../public/clientes/logo_iel-white.png'
import VipreLogo from '../../public/clientes/VIPRE_HeaderLogo.svg'
function LogosClientes() {
  return (
    <>
      <div className="w-24">
        <Image alt="Iberostar Logo" src={IberostarLogo} />
      </div>
      <div className="w-24 ">
        <Image alt="Medix Logo" src={MedixLogo} />
      </div>
      <div className="w-24">
        <Image alt="Inspired e-Learning Logo" src={IelLogo} />
      </div>
      <div className="w-24 brightness-0 invert">
        <VipreLogo className="text-8xl xl:text-[10rem]" />
      </div>
      <div className="w-24 ">
        <Image alt="Meet me in the cloud Logo" src={MeetmeLogo} />
      </div>
    </>
  )
}

export default LogosClientes
