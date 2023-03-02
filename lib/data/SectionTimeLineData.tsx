import ImgLaptop from '../../public/laptop.jpg'
import ImgTrofeo from '../../public/trofeo.png'
import ImgTimeline2 from '../../public/timeline2.jpg'
import ImgTimeline3 from '../../public/timeline3.jpg'
import ImgTimeline4 from '../../public/timeline4.jpg'

export const SectionsData: SectionData[] = [
  {
    title: 'Cursos Multipremiados',
    excerpt:
      'Nuestros productos han sido reconocidos internacionalmente con más de 40 premios, como MarCom Awards, Davey Awards, W³ Awards, Golden Bridge Awards, Summit Creative Awards, Network Products Guide IT World Awards, Omni Awards, Interactive Media Awards.',
    link: {
      slug: 'libreria',
      text: 'libreria de Cursos'
    },
    MainImage: {
      src: ImgLaptop,
      alt: 'Laptop abierta, en la pantalla se muestra un curso de capacitacion de México development center.'
    },
    sideImage: {
      src: ImgTrofeo,
      alt: 'trofeo'
    },
    colorClass: 'secondary',
    layoutLeft: false,
    ColorSchemaDark: false
  },
  {
    title: 'Contenido interactivo',
    excerpt:
      'En México DC creamos un e-learning de impacto. Por eso diseñamos cursos con videos, animaciones, cuestionarios y ejercicios interactivos que impulsan y refuerzan el aprendizaje. Estos elementos motivan a los usuarios y aumentan su interés en el momento de tomar un curso.',
    link: {
      slug: 'libreria#catalogoCursos',
      text: 'Ver demos'
    },
    MainImage: {
      src: ImgTimeline2,
      alt: 'chica frente a la pantalla de una laptop'
    },
    colorClass: 'TropicalBlue',
    layoutLeft: true,
    ColorSchemaDark: true
  },
  {
    title: 'Mobile Ready',
    excerpt: (
      <span>
        Nuestros cursos <b>son accesibles desde cualquier dispositivo</b>, incluyendo tabletas y
        teléfonos inteligentes. Cada detalle de nuestros cursos se diseña cuidadosamente para
        proporcionar materiales efectivos y de fácil acceso, que permitan a las empresas ofrecer
        <b> mayor flexibilidad</b> para la capacitación de sus trabajadores.
      </span>
    ),
    link: {
      slug: 'libreria',
      text: 'Catálogo de cursos'
    },
    MainImage: {
      src: ImgTimeline3,
      alt: 'mano tocando una pantalla con el indice'
    },
    colorClass: 'MintGreen',
    layoutLeft: false,
    ColorSchemaDark: true
  },
  {
    title: 'Integración con LMS',
    excerpt:
      'Contamos con el servicio de “llave en mano”, lo que significa que entregamos nuestros cursos exportados en formato SCORM y listos para integrarse en cualquier plataforma LMS.',
    link: {
      slug: 'servicios',
      text: 'Servicios'
    },
    MainImage: {
      src: ImgTimeline4,
      alt: 'Hombre pensativo viendo graficas de datos en la pantalla de su computadora'
    },
    colorClass: 'BrightGreen',
    layoutLeft: true,
    ColorSchemaDark: true
  }
]
