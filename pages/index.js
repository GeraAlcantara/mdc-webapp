import HelperHead from "../components/helpers/HelperHead";
import { DataHeadHome } from "../components/data/DataHeader";
import Image from "next/image";
import Hero from "../components/ui/Hero";
import { SectionsData } from "../components/data/SectionTimeLineData";
import Capacite from "../public/icons/capacitePersonal.svg";
import Clients from "../components/ui/Clients";
import Timeline from "../components/ui/Timeline";
import BannerParallax from "../components/ui/BannerParallax";
import SectionTimeline from "../components/ui/SectionTimeline";
import ModalDemoReel from "../components/ui/ModalDemoReel";
import MonitorVideoReel from "../public/videoreel.png";

export default function Home() {
  return (
    <>
      <HelperHead {...DataHeadHome} />
      <Hero />
      <Clients />
      <div className='lg:text-lg md:text-center bg-white text-gray-900 py-4 lg:py-8 xl:py-12'>
        <div className=' p-10'>
          <Capacite className='text-8xl m-auto mb-4' />
          <h2 className='text-3xl font-extrabold  pb-8 text-center'>Capacite a su personal</h2>
          <p className='max-w-prose m-auto pb-8'>
            Desde pequeñas empresas hasta empresas globales e instituciones públicas, los empleados son el activo más importante en cualquier organización, pero
            también son el punto débil en defensa de ciberseguridad. Podemos cambiar eso. Nuestras soluciones de capacitación sobre seguridad efectúan cambios
            significativos y sostenibles en cualquier fuerza laboral. Con nuestros cursos, los empleados no solo son conscientes de los peligros que presenta un
            panorama de amenazas en constante cambio: están capacitados para proteger a su organización de ellos.
          </p>
        </div>
      </div>
      {/* Section Timeline */}
      <section className='relative '>
        {/* timeline  */}
        <div className='flex justify-center'>
          <Timeline></Timeline>
        </div>

        {SectionsData.map((section, i) => (
          <SectionTimeline
            key={i}
            ColorSchemaDark={section.ColorSchemaDark}
            layoutLeft={section.layoutLeft}
            colorClass={section.colorClass}
            sideImage={section.sideImage}
            MainImage={section.MainImage}
            link={section.link}
            excerpt={section.excerpt}
            title={section.title}
          />
        ))}
      </section>
      {/* video reel Section */}
      <section className='flex items-center pb-8 md:pt-28 md:pb-[8.5rem] '>
        <div className='mdc-ui-container'>
          <div className='flex flex-col md:flex-row justify-between bg-gradient-to-br from-[#386fdd] via-[#439dc0] to-[#67dd80] rounded-3xl relative xl:py-12'>
            <div className='px-10 py-6 xl:px-20 w-full lg:w-1/2 lg:text-left'>
              <h2 className='uppercase mb-4'>Demo Reel</h2>
              <div className='pb-8'>
                <h3 className='text-6xl md:text-6xl lg:text-8xl font-extrabold'>
                  <small className='text-2xl md:text-4xl xl:text-[2.75rem] text-gray-900'>Una Muestra de</small> <br />
                  Nuestro <br /> Trabajo
                </h3>
                <p className='mb-10 tetx-lg md:text-xl font-semibold text-gray-900 mt-4 md:w-[34ch]'>
                  Esta es una pequeña muestra de lo que hemos realizado en nuestros casos de éxito.
                </p>
                <div className='md:pb-20'>
                  <ModalDemoReel btnTheme='btnDark' />
                </div>
              </div>
            </div>
            <div className='hidden w-1/3 lg:w-[48%] md:flex items-center justify-center absolute top-0 right-0 h-full overflow-hidden my-4 '>
              <div className=' absolute w-full h-[90%]'>
                <Image src={MonitorVideoReel} layout='fill' objectPosition='left' objectFit='cover' alt='Monitor computadora de escritorio'></Image>
              </div>
            </div>
            <div className='md:hidden flex justify-center p-4'>
              <div className='relative md:absolute w-[90%] h-[90%] '>
                <Image src={MonitorVideoReel} layout='responsive' objectFit='contain' alt='Monitor computadora de escritorio'></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='py-16 xl:py-24'>
          <BannerParallax />
        </div>
      </section>
    </>
  );
}
