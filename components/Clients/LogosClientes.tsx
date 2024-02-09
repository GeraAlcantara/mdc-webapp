import Image from 'next/image'

import IberostarLogo from '../../public/clientes/iberostarLogo.png'
import MedixLogo from '../../public/clientes/medixLogo.png'
import MeetmeLogo from '../../public/clientes/meetmeLogo.png'
import IelLogo from '../../public/clientes/logo_iel-white.png'
import VipreLogo from '../../public/clientes/VIPRE_HeaderLogo.svg'
import ContinentalLogo from '../../public/clientes/continental_logo.png'
import CinepolisLogo from '../../public/clientes/cinepolis_logo.png'
import GrupoAxoLogo from '../../public/clientes/grupo_axo_logo.png'
function LogosClientes() {
  return (
    <div className="flex gap-8 items-center mr-6">
      <div className="w-32 ">
        <Image alt="Iberostar Logo" src={IberostarLogo} />
      </div>
      <div className="w-32 ">
        <Image alt="Medix Logo" objectFit="contain" src={MedixLogo} />
      </div>
      <div className="w-32 ">
        <Image alt="Inspired e-Learning Logo" className=" w-full h-full" src={IelLogo} />
      </div>
      <div className=" brightness-0 invert">
        <VipreLogo className="text-9xl " />
      </div>
      <div className="">
        <Image alt="Meet me in the cloud Logo" src={MeetmeLogo} />
      </div>

      <div className="w-32 ">
        <Image alt="Continental Logo" className=" w-full h-full" src={ContinentalLogo} />
      </div>
      <div className="w-32 ">
        <Image alt="Cinepolis Logo" className=" w-full h-full" src={CinepolisLogo} />
      </div>
      <div className="w-32 ">
        <Image alt="Grupo Axo Logo" className=" w-full h-full" src={GrupoAxoLogo} />
      </div>
    </div>
  )
}

export default LogosClientes
