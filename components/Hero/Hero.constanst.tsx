import { StaticImageData } from 'next/dist/client/image'

import imgHero1 from '../../public/hero1.png'
import imgHero2 from '../../public/hero2.png'
import imgHero3 from '../../public/hero3.png'
import imgHero4 from '../../public/hero4.png'

export const initImagesData = [
  {
    id: 'hero1',
    alt: 'mujer con semblante positivo esta sonriendo ',
    src: imgHero1
  },
  {
    id: 'hero2',
    alt: 'hombre concentrado trabajando en su laptop',
    src: imgHero2
  },
  {
    id: 'hero3',
    alt: 'empleada joven sonriendo ',
    src: imgHero3
  },
  {
    id: 'hero4',
    alt: 'mujer trigeña sonriendo en su area de trabajo',
    src: imgHero4
  }
]
export interface HeroDATA {
  id: string
  alt: string
  src: StaticImageData
  content: {
    title: {
      small: string
      highlight: string
    }
    text: JSX.Element
  }
  cta: string
}

export const heroData: HeroDATA[] = [
  {
    id: 'hero1',
    alt: 'mujer con semblante positivo esta sonriendo ',
    src: imgHero1,
    content: {
      title: {
        small: 'Transforma tu empresa con',
        highlight: 'e-learning'
      },
      text: (
        <span>
          Nuestras soluciones de e-learning te permitirán <strong>cumplir los objetivos</strong> de
          formación de tu empresa y <strong>alcanzar un desarrollo organizacional exitoso</strong>.
        </span>
      )
    },
    cta: 'CONOCER MÁS'
  },
  {
    id: 'hero2',
    alt: 'hombre concentrado trabajando en su laptop',
    src: imgHero2,
    content: {
      title: {
        small: 'Fortalece tu',
        highlight: 'empresa'
      },
      text: (
        <span>
          Ponemos a tu disposición una librería de cursos enfocados en fortalecer áreas escenciales
          para tu empresa.
        </span>
      )
    },
    cta: 'Explora nuestros cursos'
  },
  {
    id: 'hero3',
    alt: 'empleada joven sonriendo ',
    src: imgHero3,
    content: {
      title: {
        small: 'Concientización de',
        highlight: 'Seguridad'
      },
      text: (
        <span>
          Los trabajadores son “el eslabón más débil” en la cadena de seguridad de su empresa.
          ¡Hágalos más fuertes!
        </span>
      )
    },
    cta: 'Actúa ahora'
  },
  {
    id: 'hero4',
    alt: 'mujer trigeña sonriendo en su area de trabajo',
    src: imgHero4,
    content: {
      title: {
        small: 'Cursos en formato',
        highlight: 'SCORM'
      },
      text: (
        <span>
          Contamos con el servicio de “llave en mano”, lo que significa que entregamos nuestros
          cursos exportados en formato SCORM y listos para integrarse en cualquier plataforma LMS.
        </span>
      )
    },
    cta: 'Conoce más'
  }
]
