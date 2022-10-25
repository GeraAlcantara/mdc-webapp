import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/ui/Hero";
import ModalVideo from "../components/ui/ModalVideo";
import Capacite from "../public/icons/capacite.svg";
import ImgTimeline2 from "../public/timeline2.jpg";
import ImgTimeline3 from "../public/timeline3.jpg";
import ImgTimeline4 from "../public/timeline4.jpg";
import ImgLaptop from "../public/laptop.jpg";
import ImgTrofeo from "../public/trofeo.png";
import Clients from "../components/ui/Clients";
import Timeline from "../components/ui/Timeline";
import TimelineCheckmark from "../components/ui/TimelineCheckmark";
import BannerParallax from "../components/ui/BannerParallax";
import ImgBannerVideo from "../public/bannerReel.jpg";
import { useState, useEffect, useRef } from "react";
import SectionTimeline from "../components/ui/SectionTimeline";
import { SectionsData } from "../components/data/SectionTimeLineData";

export default function Home() {
  const [isInViewport, setisInViewport] = useState(false);
  const articleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const articleCurr = articleRef.current;
      const rect = articleCurr.getBoundingClientRect();
      const rectY = articleCurr.getBoundingClientRect().y;
      const condition =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      setisInViewport(condition || rectY <= 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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

        {/* <SectionTimeline
            ColorSchemaDark={section.ColorSchemaDark}
            layoutLeft={section.layoutLeft}
            colorSufix={section.colorSufix}
            sideImage={section.sideImage}
            MainImage={section.MainImage}
            link={section.link}
            excerpt={section.excerpt}
            title={section.title}
          />*/}
        {SectionsData.map((section, i) => (
          <SectionTimeline
            key={i}
            ColorSchemaDark={section.ColorSchemaDark}
            layoutLeft={section.layoutLeft}
            colorSufix={section.colorSufix}
            sideImage={section.sideImage}
            MainImage={section.MainImage}
            link={section.link}
            excerpt={section.excerpt}
            title={section.title}
          />
        ))}

        {/* Interactividad */}
        <article className='py-4 md:py-8'>
          <div ref={articleRef} className='mdc-ui-container flex flex-col-reverse gap-4 md:gap-8 md:flex-row '>
            <div
              className={`md:w-1/2 flex flex-col md:items-end md:justify-center py-4 ${isInViewport ? "animate-FadeInSlidein" : "animate-FadeOutSlideout"}   `}
            >
              <h2 className='font-bold text-4xl mb-8 text-[#00bec6]'>Interactividad</h2>
              <p className='max-w-prose md:text-right mb-8'>
                En México DC lo visual es tan importante como el contenido, diseñamos cursos con video y animaciones personalizadas para impulsar el
                aprendizaje. Este tipo de factores generan entusiasmo y aumenta el interes en sus empleados a la hora de tomar un curso.
              </p>
              <Link href='#'>
                <a className='place-self-start md:place-self-auto py-2 px-10 bg-[#00bec6] rounded-full text-bg_primary uppercase hover:from-cyan-500 hover:to-blue-600 transition-all '>
                  <span>Ver demos</span>
                </a>
              </Link>
            </div>
            <TimelineCheckmark bgColor='bg-[#00bec6]' />
            <div className={`md:w-1/2 opacity-0 ${isInViewport ? "animDelay animate-FadeInSlidein " : " animate-FadeOutSlideout "}`}>
              <Image src={ImgTimeline2} alt='text alt '></Image>
            </div>
          </div>
        </article>
        {/* Mobile Ready */}
        <article className='py-4 md:py-8'>
          <div className='mdc-ui-container flex flex-col gap-4 md:gap-8 md:flex-row '>
            <div className='md:w-1/2'>
              <Image src={ImgTimeline3} alt='text alt '></Image>
            </div>
            <TimelineCheckmark bgColor='bg-[#4cff91]' />
            <div className='md:w-1/2 flex flex-col md:place-self-auto md:justify-center py-4 '>
              <h2 className='font-bold text-4xl mb-8 text-[#4cff91] '>Mobile Ready</h2>
              <p className='max-w-prose md:text-left mb-8'>
                Creamos cursos fácilmente accesibles en tabletas o dispositivos móviles. Estos materiales no solo son aptos para dispositivos móviles. Cada
                aspecto de la capacitación se diseñó cuidadosamente, desde el contenido hasta la pantalla, para proporcionar los materiales más efectivos y de
                fácil acceso.
              </p>
              <Link href='#'>
                <a className='place-self-start py-2 px-10 bg-[#4cff91] rounded-full text-bg_primary uppercase hover:from-cyan-500 hover:to-blue-600 transition-all '>
                  <span>Catalogos de cursos</span>
                </a>
              </Link>
            </div>
          </div>
          {/* End section cards right */}
        </article>
        {/* Plataforma LMS Intuitiva */}
        <article className='py-4 md:py-8'>
          <div className='mdc-ui-container flex flex-col-reverse gap-4 md:gap-8 md:flex-row '>
            <div className='md:w-1/2 flex flex-col md:items-end md:justify-center py-4 '>
              <h2 className='font-bold text-4xl mb-8 text-[#02e239] md:text-right xl:w-1/2'>Plataforma LMS Intuitiva</h2>
              <p className='max-w-prose md:text-right mb-8'>
                Nuestros productos han tenido reconocimiento internacional ganando más de 40 premios como MarCom Awards, Davey Awards, W³ Awards, Golden Bridge
                Awards, Summit Creative Awards, Network Products Guide IT World Awards, Omni Awards, Interactive Media Awards.
              </p>
              <Link href='#'>
                <a className='place-self-start md:place-self-auto py-2 px-10 bg-[#02e239] text-bg_primary rounded-full uppercase hover:from-cyan-500 hover:to-blue-600 transition-all '>
                  <span>Planes y precios</span>
                </a>
              </Link>
            </div>
            <TimelineCheckmark bgColor='bg-[#02e239]' />
            <div className='md:w-1/2'>
              <Image src={ImgTimeline4} alt='text alt '></Image>
            </div>
          </div>
        </article>
      </section>
      <section className='relative'>
        <div className='w-full aspect-video'>
          <Image src={ImgBannerVideo} layout='responsive' alt='Laptom with graphic on the screen ' />
        </div>
        <div className='absolute w-full h-full top-0 p-10'>
          <div className='text-gray-900 py-6 m-4 flex flex-col items-center'>
            <h1 className='text-3xl font-extrabold xl:text-5xl'>DEMO REEL</h1>
            <p className='m-4 max-w-prose xl:text-lg'>
              Esto es una pequeña muestra de lo que hemos hecho, haga click en la pantalla para ver el video. Para conocer a detalle algunos proyectos visite
              nuestros Casos de Estudio.
            </p>
          </div>
          <div className='flex justify-center items-center h-[70%]'>
            <ModalVideo />
          </div>
        </div>
      </section>
      <section>
        <BannerParallax />
      </section>
    </>
  );
}
