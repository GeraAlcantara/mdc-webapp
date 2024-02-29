import Image from 'next/image'
import Link from 'next/link'

import FelipeBonetaImg from '../../public/assetscontacto/felipe.png'
import MailSVG from '../../public/assetscontacto/mail.svg'
import ChatSVG from '../../public/assetscontacto/chat.svg'
import CallSVG from '../../public/assetscontacto/call.svg'
import ReelSvg from '../../public/assetscontacto/reel.svg'
import MapImgAddress from '../../public/assetscontacto/map.png'

const phone_number = '529841313964'
const mail = 'felipe.boneta@mexicodc.com'

export default function Index() {
  return (
    <div className="pt-[68px] mdc-ui-container flex justify-center items-center m-auto mb-20 min-h-screen">
      <div className="max-w-sm w-full flex flex-col gap-6 justify-center">
        {/* header */}
        <div className="flex justify-center flex-col items-center">
          <div className=" w-44">
            <Image alt="Felipe Boneta" src={FelipeBonetaImg} />
          </div>
          <p className="uppercase text-xs text-center mt-1 ">Mexico Development Center</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center">Felipe Boneta</h1>
          <p className="text-center text-accent uppercase font-light text-sm tracking-[0.125rem]">
            Director General
          </p>
        </div>
        <div className="">
          <Link
            download={`felipe-boneta.vcf`}
            href={`/assetscontacto/felipe-boneta.vcf`}
            rel="nofollow"
          >
            <a className="text-lg transition-all rounded-md hover:text-blue-400 text-[#137cff] text-center underline w-full flex items-center justify-center">
              Agregar a contactos
            </a>
          </Link>
        </div>
        <div>
          {/* buttons */}
          <div className=" mb-6">
            <div className="flex gap-4 ">
              <Link href={`https://wa.me/${phone_number}`}>
                <a className="text-brandWhite transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 flex flex-col py-1 px-4 w-full text-xs items-center uppercase">
                  <ChatSVG className="w-6 h-6" />
                  <span>Chat</span>
                </a>
              </Link>
              <Link href={`tel:${phone_number}`}>
                <a className="text-brandWhite transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 flex flex-col py-1 px-4 w-full text-xs items-center uppercase">
                  <CallSVG className="w-6 h-6" />
                  <span>Call</span>
                </a>
              </Link>
              <a
                className="text-brandWhite transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 flex flex-col py-1 px-4 w-full text-xs items-center uppercase"
                href="https://vimeo.com/425231198"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ReelSvg className="w-6 h-6" />
                <span>Reel</span>
              </a>
              <Link href={`mailto:${mail}`}>
                <a className="text-brandWhite transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 flex flex-col py-1 px-4 w-full text-xs items-center">
                  <MailSVG className="w-6 h-6" />
                  <span>MAIL</span>
                </a>
              </Link>
            </div>
          </div>
          {/* info blocks */}
          <div className="space-y-4">
            <div className="bg-brandBlue-500 text-brandWhite px-4 py-2 rounded-lg">
              <p className="text-sm leading-none">celular</p>
              <a className="text-[#137cff]">+52 984 131 3964</a>
            </div>
            <div className="bg-brandBlue-500 text-brandWhite px-4 py-2 rounded-lg">
              <p className="text-sm leading-none">oficina</p>
              <a className="text-[#137cff]">+52 55 75 83 9925</a>
            </div>
            <div className="bg-brandBlue-500 text-brandWhite px-4 py-2 rounded-lg">
              <p className="text-sm leading-none">correo</p>
              <a className="text-[#137cff]" href={`mailto:${mail}`}>
                {mail}
              </a>
            </div>
            <div className="bg-brandBlue-500 text-brandWhite px-4 py-2 rounded-lg">
              <p className="text-sm leading-none">Linkedin</p>
              <a
                className="text-[#137cff]"
                href="https://www.linkedin.com/in/feloboneta/"
                rel="noopener noreferrer"
                target="_blank"
              >
                feloboneta
              </a>
            </div>
            <div className="bg-brandBlue-500 text-brandWhite px-4 py-2 rounded-lg flex gap-2 items-center">
              <address className="w-full ">
                <p className="text-sm leading-none mb-1 font-normal">dirección</p>
                <p className="font-normal text-brandWhite leading-tight text-base">
                  Palmeiras Business Center <br />
                  Oficina 3, 11 Sur <br />
                  Playa del Carmen, Q.Roo <br />
                  CP 77712
                </p>
              </address>
              <div className="w-48">
                <Image alt="Mapa" src={MapImgAddress} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
