import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/ui/Hero";
import Escudo from "../public/icons/escudo.svg";
import ImgTimeline1 from "../public/timeline1.png";
import ImgLaptop from "../public/laptop.jpg";
import ImgTrofeo from "../public/trofeo.png";

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
      <Hero></Hero>
      <div className=' md:text-center bg-white text-gray-900 py-4 lg:py-8 xl:py-12'>
        <div className=' p-10'>
          <Escudo className='text-8xl m-auto mb-4' />
          <h2 className='text-3xl font-bold uppercase pb-8 text-center'>Capacite a su personal</h2>
          <p className='max-w-prose m-auto pb-8'>
            Desde pequeñas empresas hasta empresas globales e instituciones públicas, los empleados son el activo más importante en cualquier organización, pero
            también son el punto débil en defensa de ciberseguridad. Podemos cambiar eso. Nuestras soluciones de capacitación sobre seguridad efectúan cambios
            significativos y sostenibles en cualquier fuerza laboral. Con nuestros cursos, los empleados no solo son conscientes de los peligros que presenta un
            panorama de amenazas en constante cambio: están capacitados para proteger a su organización de ellos.
          </p>
        </div>
        <hr className='border border-[#4cafb8] animate-section-hr m-auto ' />
      </div>

      <section className='relative bg-black '>
        {/* timeline  */}
        <div className='w-[1px] bg-green-500 h-full md:absolute left-1/2 translate-x-1/2 '></div>
        <article className='bg-white text-gray-900'>
          {/* section cards left */}
          <div className='mdc-ui-container flex flex-col gap-4 md:gap-8 md:flex-row py-4 md:py-16'>
            <div className='md:p-8 md:w-1/2 relative'>
              <Image src={ImgLaptop} alt='text alt '></Image>
              <div className='absolute top-[7%] left-[15%] w-[25%]'>
                <Image src={ImgTrofeo} alt='text alt '></Image>
              </div>
            </div>
            <div className='md:w-1/2 flex flex-col md:items-start md:justify-center py-4 md:p-8'>
              <h2 className='font-bold text-2xl xl:text-4xl mb-8 '>CURSOS MULTIPREMIADOS</h2>
              <p className='max-w-prose md:text-left xl:text-xl mb-8'>
                Nuestros productos han tenido reconocimiento internacional ganando más de 40 premios como MarCom Awards, Davey Awards, W³ Awards, Golden Bridge
                Awards, Summit Creative Awards, Network Products Guide IT World Awards, Omni Awards, Interactive Media Awards.
              </p>
              {/* Link style as Button */}
              <Link href='#'>
                <a className='place-self-start py-2 px-10 bg-gradient-to-r from-cyan-500 to-secondary rounded-full text-white uppercase hover:from-cyan-500 hover:to-blue-600 transition-all '>
                  <span>Casos de exito</span>
                </a>
              </Link>
            </div>
          </div>
          {/* END section cards left */}
        </article>
        <article className='bg-black'>
          {/* section cards right */}
          <div className='mdc-ui-container flex flex-col-reverse gap-4 md:gap-8 md:flex-row py-4 md:py-16'>
            <div className='md:w-1/2 flex flex-col md:items-end md:justify-center py-4 md:p-8'>
              <h2 className='font-bold text-2xl xl:text-4xl mb-8 '>INTERACTIVIDAD</h2>
              <p className='max-w-prose md:text-right xl:text-xl mb-8'>
                En México DC lo visual es tan importante como el contenido, diseñamos cursos con video y animaciones personalizadas para impulsar el
                aprendizaje. Este tipo de factores generan entusiasmo y aumenta el interes en sus empleados a la hora de tomar un curso.
              </p>

              {/* Link style as Button */}
              <Link href='#'>
                <a className='place-self-start md:place-self-auto py-2 px-10 bg-gradient-to-r from-cyan-500 to-secondary rounded-full text-white uppercase hover:from-cyan-500 hover:to-blue-600 transition-all '>
                  <span>Ver demos</span>
                </a>
              </Link>
            </div>
            <div className='md:p-8 md:w-1/2'>
              <Image src={ImgTimeline1} alt='text alt '></Image>
            </div>
          </div>
          {/* End section cards right */}
        </article>
        <article className='bg-black'>
          {/* section cards left */}
          <div className='mdc-ui-container flex flex-col gap-4 md:gap-8 md:flex-row py-4 md:py-16'>
            <div className='md:p-8 md:w-1/2'>
              <Image src={ImgTimeline1} alt='text alt '></Image>
            </div>
            <div className='md:w-1/2 flex flex-col md:items-start md:justify-center py-4 md:p-8'>
              <h2 className='font-bold text-2xl xl:text-4xl mb-8 '>MOBILE READY</h2>
              <p className='max-w-prose md:text-left xl:text-xl mb-8'>
                Creamos cursos fácilmente accesibles en tabletas o dispositivos móviles. Estos materiales no solo son aptos para dispositivos móviles. Cada
                aspecto de la capacitación se diseñó cuidadosamente, desde el contenido hasta la pantalla, para proporcionar los materiales más efectivos y de
                fácil acceso.
              </p>
              {/* Link style as Button */}
              <Link href='#'>
                <a className='place-self-start py-2 px-10 bg-gradient-to-r from-cyan-500 to-secondary rounded-full text-white uppercase hover:from-cyan-500 hover:to-blue-600 transition-all '>
                  <span>Catalogos de cursos</span>
                </a>
              </Link>
            </div>
          </div>
          {/* END section cards left */}
        </article>
        <article className='bg-black'>
          {/* section cards right */}
          <div className='mdc-ui-container flex flex-col-reverse gap-4 md:gap-8 md:flex-row py-4 md:py-16'>
            <div className='md:w-1/2 flex flex-col md:items-end md:justify-center py-4 md:p-8'>
              <h2 className='font-bold text-2xl xl:text-4xl mb-8 '>Plataforma LMS Intuitiva</h2>
              <p className='max-w-prose md:text-right xl:text-xl mb-8'>
                Nuestros productos han tenido reconocimiento internacional ganando más de 40 premios como MarCom Awards, Davey Awards, W³ Awards, Golden Bridge
                Awards, Summit Creative Awards, Network Products Guide IT World Awards, Omni Awards, Interactive Media Awards.
              </p>

              {/* Link style as Button */}
              <Link href='#'>
                <a className='place-self-start md:place-self-auto py-2 px-10 bg-gradient-to-r from-cyan-500 to-secondary rounded-full text-white uppercase hover:from-cyan-500 hover:to-blue-600 transition-all '>
                  <span>Planes y precios</span>
                </a>
              </Link>
            </div>
            <div className='md:p-8 md:w-1/2'>
              <Image src={ImgTimeline1} alt='text alt '></Image>
            </div>
          </div>
          {/* End section cards right */}
        </article>
      </section>
    </>
  );
}
