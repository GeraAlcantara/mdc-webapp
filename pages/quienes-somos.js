import Link from "next/link";
import React from "react";
import { DataHeadQuienesSomos } from "../components/data/DataHeader";
import HelperHead from "../components/helpers/HelperHead";
import Clients from "../components/ui/Clients";
import Hero from "../components/ui/Hero";

function About() {
  return (
    <>
      <HelperHead {...DataHeadQuienesSomos} />
      <Hero>
        <h1 className=' portrait:text-center md:portrait:text-left md:text-left text-6xl md:text-7xl xl:text-9xl leading-[60px] text-accent font-extrabold md:pb-8'>
          <small className='text-brandWhite text-2xl md:text-4xl xl:text-6xl leading-normal flex-1'>Nuestras soluciones de</small>
          <br></br>e-Learning
        </h1>
        <div className='my-4 pb-4 w-full sm:landscape:w-1/2 md:w-2/4'>
          <p className='text-center md:text-left xl:text-xl max-w-prose '>
            Te permitirán cumplir los objetivos de formación de tu empresa y alcanzar un desarrollo organizacional exitoso.
          </p>
        </div>
        <div className='flex justify-around md:justify-start sm:landscape:w-1/2'>
          <div className=''>
            <Link href='/libreria'>
              <a className=' flex justify-center items-center uppercase rounded-full bg-secondary px-8 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-[.98] hover:contrast-150 transition-all  '>
                CONOCER MÁS
              </a>
            </Link>
          </div>
        </div>
      </Hero>
      <Clients />
      <div className='lg:text-lg  bg-white text-gray-900 py-4 lg:py-8 xl:py-12'>
        <div className='mdc-ui-container md:p-10'>
          <h2 className='text-3xl lg:text-5xl font-extrabold text-bg_primary pb-8 text-center'>QUIENES SOMOS</h2>
          <p className='max-w-prose m-auto pb-8'>
            Mexico Development Center es una compañía conformada por un equipo multidisciplinario en la elaboración de productos digitales. Durante la última
            década, nos hemos dedicado a la producción de cursos en línea (e-Learning) enfocados al entrenamiento y/o capacitación del personal en ambientes
            corporativos y empresariales que van desde la escala local, a la escala global.
          </p>
          <p className='max-w-prose m-auto pb-8'>
            Esto se ha logrado gracias a una efectiva fusión y ejecución de las diversas áreas profesionales, como los son el diseño, programación, fotografía,
            audio y video que integran nuestros productos por medio de altos estándares de calidad y cumpliendo con los estándares básicos de la industria
            (SCORM, AICC, TINCAN, etc), que nos han permitido atender de manera satisfactoria a clientes de nivel internacional.
          </p>
          <p className='max-w-prose m-auto pb-8'>
            En la actualidad, la educación a distancia es una herramienta muy útil para lograr los objetivos en los departamentos de recursos humanos, ya que
            permite la reducción de tiempo e inversión en el entrenamiento en comparación a una capacitación presencial que poco a poco está siendo rezagada por
            las nuevas tecnologías existentes hoy en día.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
