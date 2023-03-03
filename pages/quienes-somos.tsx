import React from 'react'

import { DataHeadQuienesSomos } from '../lib/data/DataHeader'
import HelperHead from '../lib/helpers/HelperHead'
import Clients from '../components/Clients'
import Hero from '../components/Hero'
import { heroData } from '../components/Hero/Hero.constanst'

function About() {
  return (
    <>
      <HelperHead {...DataHeadQuienesSomos} />
      <Hero bannerData={heroData} />
      <Clients />
      <div className="lg:text-lg  bg-white text-gray-900 py-4 lg:py-8 xl:py-12">
        <div className="mdc-ui-container md:p-10">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-bg_primary pb-8 text-center">
            QUIENES SOMOS
          </h2>
          <p className="max-w-prose m-auto pb-8">
            Mexico Development Center es una compañía conformada por un equipo multidisciplinario en
            la elaboración de productos digitales. Durante la última década, nos hemos dedicado a la
            producción de cursos en línea (e-Learning) enfocados al entrenamiento y/o capacitación
            del personal en ambientes corporativos y empresariales que van desde la escala local, a
            la escala global.
          </p>
          <p className="max-w-prose m-auto pb-8">
            Esto se ha logrado gracias a una efectiva fusión y ejecución de las diversas áreas
            profesionales, como lo son el diseño, programación, fotografía, audio y video que
            integran nuestros productos por medio de altos estándares de calidad y cumpliendo con
            los estándares básicos de la industria (SCORM, AICC, TINCAN, etc), que nos han permitido
            atender de manera satisfactoria a clientes de nivel internacional.
          </p>
          <p className="max-w-prose m-auto pb-8">
            En la actualidad, la educación a distancia es una herramienta muy útil para lograr los
            objetivos en los departamentos de recursos humanos, ya que permite la reducción de
            tiempo e inversión en el entrenamiento en comparación a una capacitación presencial que
            poco a poco está siendo rezagada por las nuevas tecnologías existentes hoy en día.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
