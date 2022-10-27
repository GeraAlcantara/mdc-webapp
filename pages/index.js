import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/ui/Hero";
import { SectionsData } from "../components/data/SectionTimeLineData";
import ModalVideo from "../components/ui/ModalVideo";
import Capacite from "../public/icons/capacite.svg";
import Clients from "../components/ui/Clients";
import Timeline from "../components/ui/Timeline";
import BannerParallax from "../components/ui/BannerParallax";
import SectionTimeline from "../components/ui/SectionTimeline";
import ModalDemoReel from "../components/ui/ModalDemoReel";
import MonitorVideoReel from "../public/videoreel.png";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Mexico Development Center es una compañía conformada por un equipo multidisciplinario en la elaboración de productos digitales. Durante la última década, nos hemos dedicado a la producción de cursos en línea (elearning) enfocados al entrenamiento y/o capacitación del personal en ambientes corporativos y empresariales que van desde la escala local, a la escala global.'
        />
        <title>Mexico Development Center | Elearning</title>
      </Head>
      <Hero />
      <Clients />
      <div className=' md:text-center bg-white text-gray-900 py-4 lg:py-8 xl:py-12'>
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
        <hr className='border border-[#4cafb8] animate-sectionhr m-auto ' />
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
      <section className=' min-h-screen flex items-center'>
        <div className='mdc-ui-container'>
          <div className='flex justify-between bg-gradient-to-br from-[#386fdd] via-[#439dc0] to-[#67dd80] rounded-3xl relative'>
            <div className='px-10 py-6 xl:px-20 w-full lg:w-1/2 lg:text-left'>
              <h2 className='uppercase mb-4'>Demo Reel</h2>
              <div className='pb-8'>
                <h3 className='md:text-6xl lg:text-8xl font-extrabold'>
                  <small className='text-4xl xl:text-[2.75rem] text-gray-900'>Una Muestra de</small> <br />
                  Nuestro <br /> Trabajo
                </h3>
                <p className='mb-10 text-xl font-semibold text-gray-900 mt-4 w-[34ch]'>
                  Esta es una pequeña muestra de lo que hemos realizado en nuestros casos de éxito.
                </p>
                <div className='pb-20'>
                  <ModalDemoReel />
                </div>
              </div>
            </div>
            <div className='w-1/3 lg:w-[48%] flex items-center justify-center absolute top-0 right-0 h-full overflow-hidden my-4 '>
              <div className=' absolute w-full h-[90%]'>
                <Image src={MonitorVideoReel} layout='fill' objectPosition='left' objectFit='cover' alt='Monitor computadora de escritorio'></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <BannerParallax />
      </section>
    </>
  );
}
