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
          <div className='flex flex-wrap flex-col lg:flex-row justify-between '>
            <div className='p-4 w-full lg:w-1/2 text-center lg:text-left'>
              <h2 className='uppercase text-4xl mb-10 font-extrabold '>Demo Reel</h2>
              <p className='mb-10 text-lg xl:pr-14 '>
                Esto es una pequeña muestra de lo que hemos hecho, haga click en la pantalla para ver el video. Para conocer a detalle algunos proyectos visite
                nuestros Casos de Éxito.
              </p>
              <Link href='/casos-de-exito'>
                <a className='border-[1px] border-white border-solid rounded-md h-[48px] hover:border-secondary hover:text-secondary hover:scale-[.98] will-change-transform inline-flex items-center justify-center leading-4 px-10'>
                  Conocer más
                </a>
              </Link>
            </div>
            <div className='p-4 w-full lg:w-1/2 flex items-center justify-center relative'>
              <ModalVideo />
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
