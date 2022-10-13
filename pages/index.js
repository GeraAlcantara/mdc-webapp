import Head from "next/head";
import Image from "next/image";
import CourseSpecs from "../components/ui/CourseSpecs";
import Hero from "../components/ui/Hero";
import Escudo from "../public/icons/escudo.svg";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className=' md:text-center bg-white text-gray-900'>
        <div className=' p-10'>
          <Escudo className='text-8xl m-auto mb-4' />
          <h2 className='text-3xl font-bold uppercase pb-8 text-center'>Capacite a su personal</h2>
          <p className='max-w-prose m-auto pb-8'>
            Desde pequeñas empresas hasta empresas globales e instituciones públicas, los empleados son el activo más importante en cualquier organización, pero
            también son el punto débil en defensa de ciberseguridad. Podemos cambiar eso. Nuestras soluciones de capacitación sobre seguridad efectúan cambios
            significativos y sostenibles en cualquier fuerza laboral. Con nuestros cursos, los empleados no solo son conscientes de los peligros que presenta un
            panorama de amenazas en constante cambio: están capacitados para proteger a su organización de ellos.
          </p>
          <hr className='border border-[#4cafb8] animate-section-hr m-auto ' />
        </div>
      </div>
    </>
  );
}
