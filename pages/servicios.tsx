import Image from 'next/image'
import Link from 'next/link'

import HelperHead from '../lib/helpers/HelperHead'
import { DataHeadServicios } from '../lib/data/DataHeader'
import BannerCTContact from '../components/ui/BannerCTContact'
import CheckBackImg from '../public/heroProductosCheckback.png'
import PlayImg from '../public/heroserviciosPlayIconFront.png'
import ChatImg from '../public/heroserviciosChatIconMiddle.png'
import ServHeroMenImg from '../public/heroServiciosMen.png'
import Iconlibrary from '../public/icons/libreria.svg'
import IconServices from '../public/icons/servicios.svg'
import ImgBannerServices from '../public/bannerServicios.jpg'
import ProducionImgGraph from '../public/produccionesImgGraph.png'
import ProducionImgPerson from '../public/produccionesImgPerson.png'
import ProducionImgSet from '../public/produccionesImgSet.png'
import SociosImgHandData from '../public/sociosImgHandData.png'
import SociosImgPersons from '../public/sociosImgPersons.png'
import TradImgLightEQ from '../public/traduccionesImgLightEQ.jpg'
import TradImgLocutora from '../public/traduccionesImgLocutora.png'
import TradImgMicrofono from '../public/traduccionesImgMicrofono.png'

export default function Servicios() {
  return (
    <>
      <HelperHead {...DataHeadServicios} />
      <div className="pt-[68px]">
        <div className="p-4 md:p-6 lg:p-10 container mb-20 flex flex-col-reverse lg:flex-row lg:gap-8 bg-gradient-to-b from-[#1c3d5c] via-[#1c3d5c]/30 to-bg_primary rounded-t-3xl mdc-ui-container min-h-[calc(100vh-70px)] lg:min-h-0 justify-around lg:items-center ">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-8xl text-accent font-extrabold">
              <small className="text-brandWhite text-2xl lg:text-6xl font-bold">Nuestros</small>
              <br />
              Servicios
            </h1>
            <p className=" my-2 lg:my-8 text-lg lg:text-xl md:max-w-[44ch]">
              Descubre las soluciones de capacitación y entrenamiento online que tenemos para tu
              empresa.
            </p>
            <div className="pt-2">
              <Link href="/contactanos">
                <a className="py-2 px-8 bg-secondary rounded-full inline-flex justify-center items-center uppercase">
                  contáctanos
                </a>
              </Link>
            </div>
          </div>
          <div className="relative w-full xl:w-1/2">
            <div className="relative top-0 left-0 grid grid-cols-7 grid-rows-3">
              <div className="row-start-1 col-start-3 p-2 opacity-30 flex items-end">
                <Image alt="icono de marca de verificacion " loading="eager" src={CheckBackImg} />
              </div>
              <div className="row-start-1 col-span-2 row-span-2 col-end-8 col-start-5 p-5 md:p-8">
                <Iconlibrary className="w-full h-auto" />
              </div>
              <div className="row-start-1 col-start-2 row-span-2 pt-4 opacity-50 flex items-center">
                <Image alt="icono de marca de verificacion " loading="eager" src={ChatImg} />
              </div>
              <div className="col-start-1 row-start-1 row-end-4 col-end-7  ">
                <Image
                  alt="empleado con laptop"
                  height={997}
                  layout="responsive"
                  loading="eager"
                  objectFit="cover"
                  objectPosition="top center"
                  priority={true}
                  src={ServHeroMenImg}
                  width={985}
                />
              </div>
              <div className="row-start-2 col-start-2 col-span-2 opacity-70 pl-3 pt-3">
                <Image alt="icono de marca de verificacion " loading="eager" src={PlayImg} />
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="flex mdc-ui-container justify-center items-end m-auto my-16 ">
          <div className="bg-brandBlue-400 h-[1px] w-1/2 flex-1" />
          <div className="mx-4 relative ">
            <IconServices className="w-20 h-auto" />
          </div>
          <div className="bg-brandBlue-400 h-[1px] flex-1" />
        </div>
        {/* Divider END */}
        <section className="py-4 md:py-8">
          <header>
            <hgroup className="text-center">
              <p className="text-xl">Estamos listos</p>
              <h2 className="text-4xl font-bold">Para cualquier reto...</h2>
            </hgroup>
          </header>

          {/* blocke Produccion */}
          <div className="mdc-ui-container flex flex-col-reverse gap-4 md:gap-8 xl:gap-28 md:flex-row my-8">
            {/* grid layout images */}
            <div className="grid grid-cols-5 grid-rows-6 md:w-1/2 md:h-3/4 lg:h-full shrink ">
              <div className="col-start-1 row-start-2 col-span-2 row-span-3">
                <Image
                  alt="set de produccion"
                  height={491}
                  loading="lazy"
                  src={ProducionImgSet}
                  width={601}
                />
              </div>
              <div className="flex justify-end col-start-3 col-span-3 row-start-1 row-end-6">
                <Image
                  alt="persona de produccion"
                  height={896}
                  src={ProducionImgPerson}
                  width={709}
                />
              </div>
              <div className="flex justify-center col-start-2 col-span-2 row-start-5 row-span-2">
                <Image
                  alt="graficos de produccion"
                  height={377}
                  src={ProducionImgGraph}
                  width={496}
                />
              </div>
            </div>
            {/* grid layout images END */}
            {/* text  */}
            <div className="md:w-1/2 flex flex-col md:items-start md:justify-center text-gray-400 text-lg">
              <h2 className={`font-bold text-4xl mb-6 capitalize text-lineGradient_3 w-[12ch] `}>
                Producciones a tu medida.
              </h2>
              <p className="max-w-prose md:text-left mb-4">
                Podemos desarrollar la capacitación que tu empresa necesita, desde el diseño
                instruccional hasta el producto final listo para usarse en cualquier LMS y desde
                cualquier dispositivo.
              </p>
              <p className="max-w-prose md:text-left mb-4">
                Entendemos los obstáculos a los que te enfrentas, ya sean cortos tiempos de entrega,
                restricciones de presupuesto o problemas de implementación.
              </p>
            </div>
          </div>
          {/* blocke Produccion END */}
          {/* blocke Traduccion */}
          <div className="mdc-ui-container flex flex-col gap-4 md:gap-8 xl:gap-28 md:flex-row my-8">
            {/* text  */}
            <div className="md:w-1/2 flex flex-col md:items-end md:justify-center text-gray-400 text-lg">
              <h2 className={`font-bold md:text-right text-4xl mb-6 text-lineGradient_1 w-[12ch] `}>
                Traducción o Localización.
              </h2>
              <p className="max-w-prose md:text-right mb-4">
                Contamos con la capacidad de traducir tu contenido a cualquier idioma.
              </p>
              <p className="max-w-prose md:text-right mb-4">
                Nos encargaremos de implementar el nuevo idioma en el curso, sincronizando
                animaciones, audios y videos, asegurándonos de que el material sea culturalmente
                apropiado para su audiencia.
              </p>
            </div>
            {/* grid layout images */}
            <div className="grid grid-cols-6 grid-rows-5 md:w-1/2 md:h-3/4 lg:h-full shrink ">
              <div className="col-start-1 row-start-2 col-span-2 row-span-4">
                <Image alt="microfono de locutor" src={TradImgMicrofono} />
              </div>
              <div className="flex justify-end items-center col-start-2 col-span-5 row-start-2 row-end-5">
                <div className="w-11/12 pl-8">
                  <Image
                    alt="locutora con audifonos hablando frente al microfono"
                    src={TradImgLocutora}
                  />
                </div>
              </div>
              <div className="flex justify-center col-start-1 col-end-7 row-start-5 relative ">
                <div className="w-3/4 pt-2 opacity-90">
                  <Image
                    alt="graficos de sonido equalizador"
                    objectFit="contain"
                    src={TradImgLightEQ}
                  />
                </div>
              </div>
            </div>
            {/* grid layout images END */}
          </div>
          {/* blocke Traduccion END */}
          {/* blocke Socios */}
          <div className="mdc-ui-container flex flex-col-reverse gap-4 md:gap-8 xl:gap-28 md:flex-row my-8">
            {/* grid layout images */}
            <div className="grid grid-cols-5 grid-rows-2 md:w-1/2 md:h-3/4 lg:h-full shrink ">
              <div className="flex justify-end col-start-1 col-span-5 row-start-1 row-span-2">
                <div className="w-11/12">
                  <Image
                    alt="Socios de negocios revisando un plan en la mesa de trabajo"
                    src={SociosImgPersons}
                  />
                </div>
              </div>
              <div className="flex justify-end col-start-3 col-span-3 row-start-2 ">
                <div className="w-9/12">
                  <Image alt="graficos de produccion" src={SociosImgHandData} />
                </div>
              </div>
            </div>
            {/* grid layout images END */}
            {/* text  */}
            <div className="md:w-1/2 flex flex-col md:items-start md:justify-center text-gray-400 text-lg">
              <h2 className={`font-bold text-4xl mb-6 capitalize text-secondary w-[12ch] `}>
                Socios Estratégicos.
              </h2>
              <p className="max-w-prose md:text-left mb-4">
                Podemos proporcionar la flexibilidad que tu empesa necesita para extender sus
                capacidades de producción internas.
              </p>
              <p className="max-w-prose md:text-left mb-4">
                Intégranos a tu equipo de trabajo para optimizar las operaciones y reducir los
                gastos.
              </p>
              <p className="max-w-prose md:text-left mb-4">
                Estamos listos para cualquier reto, desde actualizaciones simples hasta planes de
                capacitación completos en elearning.
              </p>
            </div>
          </div>
          {/* blocke Socios END */}
        </section>
        <section className="py-4 md:py-8">
          {/* banner CT Contactanos */}
          <div className="py-16 xl:py-24">
            <BannerCTContact
              imgBanner={ImgBannerServices}
              txtalt="ejecutivos teniendo una reunion de negocios con un cliente"
            />
          </div>
        </section>
      </div>
    </>
  )
}
