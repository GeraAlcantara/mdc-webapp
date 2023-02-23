import ThumbnailHBEA from '../../public/thumbnail/thumbnail_R_HB_EA.jpg'
import ThumbnailHBME from '../../public/thumbnail/thumbnail_R_HB_ME.jpg'
import ThumbnailHD01 from '../../public/thumbnail/thumbnail_R_HD_01.jpg'
import ThumbnailHD02 from '../../public/thumbnail/thumbnail_R_HD_02.jpg'
import ThumbnailHD03 from '../../public/thumbnail/thumbnail_R_HD_03.jpg'
import ThumbnailHD04 from '../../public/thumbnail/thumbnail_R_HD_04.jpg'
import ThumbnailHD05 from '../../public/thumbnail/thumbnail_R_HD_05.jpg'
import ThumbnailHD06 from '../../public/thumbnail/thumbnail_R_HD_06.jpg'
import ThumbnailHD07 from '../../public/thumbnail/thumbnail_R_HD_07.jpg'
import ThumbnailHTTT101 from '../../public/thumbnail/thumbnail_R_HT_TT_101.jpg'
import ThumbnailHTTT201 from '../../public/thumbnail/thumbnail_R_HT_TT_201.jpg'
import ThumbnailRJN35 from '../../public/thumbnail/thumbnail_R_J_N35_201.jpg'
import ThumbnailRJV101 from '../../public/thumbnail/thumbnail_R_J_VL_101.jpg'
import ThumbnailRJV201 from '../../public/thumbnail/thumbnail_R_J_VL_201.jpg'
import ThumbnailSC01 from '../../public/thumbnail/thumbnail_S_C_01.jpg'
import ThumbnailSE101 from '../../public/thumbnail/thumbnail_S_E_101.jpg'
import ThumbnailSM01 from '../../public/thumbnail/thumbnail_S_M_01.jpg'
import ThumbnailSP01 from '../../public/thumbnail/thumbnail_S_P_01.jpg'
import ThumbnailVPV101 from '../../public/thumbnail/thumbnail_V_PV_101.jpg'

/**
 * @typedef {{name:string, slug:string, subcategories:Array<Subcategory>}} Category
 * @typedef {{name:string, slug:string, colorid:string, courses:Array<Course>}} Subcategory
 * @typedef {{library:Library, subcategory: LibrarySubcategory, title: string, slug: string, thumbnail: Thumbnail, cover:string, identifier: Identifier, duration: number, description: Array<string>, topics: Array<string>, features:Array<Feature>, modules: Array<Module> }} Course
 * @typedef {{name:string, skuPrefix:string}} Library
 * @typedef {{ name: string, skuPrefix: string }} LibrarySubcategory
 * @typedef {{src: string, alt: string }} Thumbnail
 * @typedef {{prefix: string, courseNumber: string }} Identifier
 * @typedef {{ name: string, qt: number, iconSrc: string }} Feature
 * @typedef {{ name: string, lessons: Array<lesson> }} Module
 * @typedef {{ title: string, duration: string }} lesson
 * @typedef {Array<Category>} Categories
 * @type {Categories}
 */

export const DataCourseLibrarie: Categories = [
  {
    name: 'Recursos Humanos',
    slug: 'recursos-humanos',
    subcategories: [
      {
        name: 'Habilidades Directivas',
        slug: 'habilidades-directivas',
        colorid: '#db913e',
        courses: [
          {
            library: { name: 'Recursos Humanos', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades directivas', skuPrefix: 'HD' },
            title: 'Liderazgo Efectivo',
            slug: 'liderazgo-efectivo',
            thumbnail: {
              src: ThumbnailHD01,
              alt: 'Supervisor teniendo una reunion con colaboradores'
            },
            cover: '/covers/cover_R_HD_01.svg',
            identifier: { prefix: 'R-HD-', courseNumber: '01' },
            duration: 12,
            description: [
              'Este curso está dirigido a supervisores, gerentes y líderes de equipo que busquen desarrollar sus habilidades directivas.',
              'Los usuarios comprenderán las competencias necesarias para ejercer un liderazgo efectivo, y conocerán diferentes estilos de liderazgo a través de escenarios reales.',
              'Al finalizar, podrán identificar por medio de una autoevaluación qué tan eficiente es su liderazgo.'
            ],
            topics: [
              'Estilos de liderazgo',
              'La influencia en el liderazgo',
              'Competencias de un líder efectivo',
              'La autodisciplina',
              'Liderazgo ético',
              'Visión estratégica',
              'La comunicación',
              'La motivación'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 1, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 2, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 0, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Liderazgo efectivo',
                lessons: [{ title: 'Introducción', duration: '0:30' }]
              },
              {
                name: '¿Cómo lograr un liderazgo efectivo?',
                lessons: [
                  { title: 'Competencias de un líder efectivo', duration: '0:50' },
                  { title: 'Practica la autodisciplina', duration: '0:40' },
                  { title: 'Trabaja con liderazgo ético', duration: '1:30' },
                  { title: 'Mantén una visión estratégica', duration: '1:18' },
                  { title: 'Promueve la comunicación', duration: '0:55' },
                  { title: 'Impulsa la motivación', duration: '0:28' },
                  { title: 'Escenarios de liderazgo', duration: '0:45' },
                  { title: 'Escenario 1', duration: '3:00' },
                  { title: 'Escenario 2', duration: '3:00' },
                  { title: 'Escenario 3', duration: '3:00' },
                  { title: 'Escenario 4', duration: '3:00' },
                  { title: 'Resumen', duration: '0:58' }
                ]
              },
              {
                name: 'Autoevaluación',
                lessons: [
                  { title: 'Introducción de autoevaluación', duration: '0:20' },
                  { title: 'Autoevaluación', duration: '1:55' }
                ]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Recursos Humanos', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades directivas', skuPrefix: 'HD' },
            title: 'Equipos de alto rendimiento',
            slug: 'equipos-alto-rendimiento',
            thumbnail: {
              src: ThumbnailHD02,
              alt: 'ejecutiva liderando una reunion con su equipo'
            },
            cover: '/covers/cover_R_HD_02.svg',
            identifier: { prefix: 'R-HD-', courseNumber: '02' },
            duration: 10,
            description: [
              'El objetivo de este curso es concientizar a los supervisores y líderes sobre su responsabilidad de mantener un equipo de trabajo integrado y capaz de alcanzar sus objetivos.',
              'Se proporcionan herramientas para desarrollar el apoyo social, la ayuda mutua y afianzar la relación entre supervisores y trabajadores.',
              'Asimismo, se presentan estrategias para resolver conflictos laborales en las que se promueve el apoyo entre trabajadores.'
            ],
            topics: [
              'Fundamentos del trabajo en equipo',
              'Definición de propósitos',
              '¿Cómo generar confianza y compromiso?',
              'Resolución de conflictos'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 2, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 1, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Equipos de alto rendimiento',
                lessons: [{ title: 'Introducción', duration: '0:24' }]
              },
              {
                name: '¿Fundamentos del trabajo en equipo',
                lessons: [
                  { title: 'Crea un equipo de alto rendimiento', duration: '0:24' },
                  { title: 'Define el propósito', duration: '0:27' },
                  { title: 'Organiza a tu equipo', duration: '0:28' },
                  { title: '¿Cómo debo establecer mis objetivos?', duration: '0:30' },
                  { title: 'Introducción a interactividad 1', duration: '0:10' },
                  { title: 'Ordena los pasos', duration: '1:00' },
                  { title: 'Fomenta la participación', duration: '0:43' },
                  { title: 'Motiva a tu equipo', duration: '0:44' },
                  { title: 'Desarrolla compromiso', duration: '0:31' },
                  { title: 'Genera confianza en el equipo', duration: '0:28' },
                  { title: 'Introducción a interactividad 2', duration: '0:10' },
                  { title: 'Encuentra la mejor solución', duration: '1:00' },
                  { title: 'Resolución de conflictos ', duration: '0:19' },
                  { title: 'Introducción a interactividad 3', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:55' },
                  { title: 'Pregunta 2', duration: '1:55' },
                  { title: 'Pregunta 3', duration: '1:55' },
                  { title: 'Pregunta 4', duration: '1:55' }
                ]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Recursos Humanos', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades directivas', skuPrefix: 'HD' },
            title: 'Comunicación Efectiva',
            slug: 'comunicacion-efectiva',
            thumbnail: {
              src: ThumbnailHD03,
              alt: 'sala de junta con ejecutivos, mujer mayor dirigiendo la reunion'
            },
            cover: '/covers/cover_R_HD_03.svg',
            identifier: { prefix: 'R-HD-', courseNumber: '03' },
            duration: 12,
            description: [
              'En este curso dirigido a líderes y supervisores, los usuarios conocerán los diferentes estilos de comunicación, así como estrategias para comunicar malas noticias y mantener una comunicación efectiva.'
            ],
            topics: [
              'Estilos de comunicación',
              'Las 7 C’s de la comunicación efectiva ',
              '¿Cómo comunicar malas noticias?'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 2, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 1, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Comunicación efectiva',
                lessons: [{ title: 'Introducción', duration: '0:43' }]
              },
              {
                name: '¿Cómo nos comunicamos?',
                lessons: [
                  { title: 'Estilos de comunicación', duration: '2:17' },
                  { title: 'Introducción a interactividad 1', duration: '0:10' },
                  { title: 'Escenario 1', duration: '0:13' },
                  { title: 'Escenario 2', duration: '0:10' }
                ]
              },
              {
                name: '¿Cómo lograr una comunicación efectiva?',
                lessons: [
                  { title: "Las 7 C's de la comunicación efectiva 1", duration: '0:39' },
                  { title: "Las 7 C's de la comunicación efectiva 2", duration: '0:39' },
                  { title: "Las 7 C's de la comunicación efectiva 3", duration: '0:25' },
                  { title: 'Introducción a interactividad 2', duration: '0:10' },
                  { title: "Aplicando las 7 C's", duration: '0:25' }
                ]
              },
              {
                name: 'Comunicaciones desafiantes',
                lessons: [
                  { title: '¿Cómo comunicar malas noticias?', duration: '2:07' },
                  { title: 'Introducción a interactividad 3', duration: '0:10' },
                  { title: 'Ordena los pasos', duration: '1:00' }
                ]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Recursos Humanos', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades directivas', skuPrefix: 'HD' },
            title: 'Inteligencia emocional para la gestión de conflictos',
            slug: 'inteligencia-emocional-gestion-de-conflictos',
            thumbnail: {
              src: ThumbnailHD04,
              alt: 'bodega con cajas de mercancia, mujer mayor dirigiendo el trabajo'
            },
            cover: '/covers/cover_R_HD_04.svg',
            identifier: { prefix: 'R-HD-', courseNumber: '04' },
            duration: 15,
            description: [
              'Este curso está diseñado para líderes de equipo, gerentes y supervisores, y tiene como objetivo dar a conocer  la importancia de utilizar la Inteligencia Emocional para gestionar los conflictos en las organizaciones.',
              'Para comenzar, los usuarios podrán autoevaluar su forma de gestionar los conflictos, después aprenderán qué es la Inteligencia Emocional, cuáles son los dominios que la conforman, así como estrategias que les ayudarán a solucionar y prevenir los conflictos laborales. A través de casos de estudio con escenarios reales, podrán  reforzar y poner en práctica los conocimientos adquiridos.'
            ],
            topics: [
              'La inteligencia emocional en el trabajo',
              'Los dominios de la inteligencia emocional',
              'Autoconocimiento',
              'Autogestión',
              'Conciencia social',
              'Gestión de las relaciones',
              'Estrategias para solucionar conflictos',
              'Acuerdos justos y sostenibles'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 1, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 0, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 0, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 3, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Inteligencia emocional para la gestión de conflictos',
                lessons: []
              },
              {
                name: 'Autoevaluación',
                lessons: [
                  { title: 'Introducción a la autoevaluación', duration: '0:43' },
                  { title: 'Autoevaluación de inteligencia emocional', duration: '2:17' }
                ]
              },
              {
                name: '¿Qué es la inteligencia emocional?',
                lessons: [
                  { title: '¿Qué es la inteligencia emocional?', duration: '0:10' },
                  { title: 'La inteligencia emocional', duration: '0:13' },
                  { title: 'Introducción a escenario 1', duration: '0:10' },
                  { title: 'IE en el trabajo', duration: '0:39' },
                  { title: 'IE: Los 4 dominios', duration: '0:39' },
                  { title: 'Introducción de interactividad 1', duration: '0:25' },
                  { title: 'Pregunta 1', duration: '1:10' },
                  { title: 'Pregunta 2', duration: '1:25' },
                  { title: 'Estrategias para solucionar conflictos 1', duration: '2:07' },
                  { title: 'Estrategias para solucionar conflictos 2', duration: '0:10' },
                  { title: 'Introducción de interactividad 2', duration: '1:00' },
                  { title: 'Pregunta 1', duration: '1:10' },
                  { title: 'Pregunta 2', duration: '1:10' },
                  { title: 'Mantener objetivos claros 1', duration: '0:40' },
                  { title: 'Mantener objetivos claros 2', duration: '0:30' },
                  { title: 'Introducción a escenario 2', duration: '0:10' },
                  { title: 'Acuerdos justos y sostenibles', duration: '0:38' },
                  { title: 'Introducción de interactividad 3', duration: '1:00' },
                  { title: 'Pregunta 1', duration: '1:10' },
                  { title: 'Pregunta 2', duration: '1:10' },
                  { title: 'Pregunta 3', duration: '1:10' },
                  { title: 'Pregunta 4', duration: '1:10' }
                ]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Recursos Humanos', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades directivas', skuPrefix: 'HD' },
            title: 'Gestión del Tiempo',
            slug: 'gestion-del-tiempo',
            thumbnail: {
              src: ThumbnailHD05,
              alt: 'ejecutiva joven en sala de juntas revisa la hora en su reloj'
            },
            cover: '/covers/cover_R_HD_05.svg',
            identifier: { prefix: 'R-HD-', courseNumber: '05' },
            duration: 12,
            description: [
              'Este curso está dirigido a supervisores, gerentes y líderes de equipo que busquen mejorar la forma en que gestionan el tiempo. Los estudiantes conocerán qué es la gestión del tiempo, sus beneficios, y los efectos negativos de una mala gestión.',
              'Asimismo, conocerán cómo desarrollar un proceso de planeación efectivo, así como diferentes estrategias para optimizarlo y lograr un equilibrio entre su vida profesional y familiar.',
              'A través de cuestionarios y ejercicios interactivos los usuarios podrán reforzar el conocimiento adquirido.'
            ],
            topics: [
              'Definición y beneficios',
              'Matriz de organización del tiempo',
              '¿Cómo organizarte?',
              'Estrategias y recomendaciones',
              'Equilibrio en la vida profesional y familiar'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 1, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 2, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 1, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Gestión del tiempo',
                lessons: [{ title: 'Introducción', duration: '0:43' }]
              },
              {
                name: 'Autoevaluación',
                lessons: [
                  { title: 'Introducción a la autoevaluación', duration: '2:17' },
                  { title: 'Autoevaluación de gestión del tiempo', duration: '0:10' }
                ]
              },
              {
                name: '¿Cómo gestionar el tiempo?',
                lessons: [
                  { title: 'Caso de estudio: Conoce a Sam', duration: '0:10' },
                  { title: 'Objetivos y tareas', duration: '0:39' },
                  { title: '¿Cómo priorizar las tareas?', duration: '0:39' },
                  { title: 'Introducción de interactividad 1', duration: '0:25' },
                  { title: 'Prioridades', duration: '1:10' },
                  { title: '¿Cómo organizarte?', duration: '1:25' },
                  { title: 'Introducción de interactividad 2', duration: '2:07' },
                  { title: 'Organízate', duration: '0:10' },
                  { title: 'Recomendaciones para gestionar tu tiempo', duration: '1:00' },
                  { title: 'Introducción de interactividad 3', duration: '1:10' },
                  { title: 'Pregunta 1', duration: '1:10' },
                  { title: 'Pregunta 2', duration: '1:10' },
                  { title: 'Ordena los pasos', duration: '0:40' }
                ]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Recursos Humanos', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades directivas', skuPrefix: 'HD' },
            title: 'Evaluación del Desempeño',
            slug: 'evaluacion-del-desempeño',
            thumbnail: {
              src: ThumbnailHD06,
              alt: 'supervisor de bodega revisando un informe '
            },
            cover: '/covers/cover_R_HD_06.svg',
            identifier: { prefix: 'R-HD-', courseNumber: '06' },
            duration: 20,
            description: [
              'En este curso dirigido a supervisores, gerentes y líderes de equipo, los estudiantes conocerán el objetivo de las evaluaciones de desempeño y sus beneficios para los trabajadores y la organización en general.',
              'Asimismo, conocerán algunos de los modelos más utilizados en la actualidad, así como la metodología para implementar el modelo más conveniente para su organización.',
              'A través de cuestionarios y ejercicios interactivos, los usuarios podrán poner en práctica lo aprendido y reforzar sus conocimientos'
            ],
            topics: [
              'Evaluación del desempeño',
              '¿Quiénes son los responsables?',
              'Modelos de evaluación del desempeño',
              'Metodología de implementación '
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 1, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 3, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Evaluación del Desempeño',
                lessons: [
                  { title: 'Introducción', duration: '0:43' },
                  { title: '¿Qué es la evaluación de desempeño?', duration: '2:17' },
                  { title: 'Introducción de interactividad 1', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:10' },
                  { title: 'Pregunta 2', duration: '1:10' },
                  { title: 'Pregunta 3', duration: '1:10' }
                ]
              },
              {
                name: 'Responsables',
                lessons: [
                  { title: 'Supervisores', duration: '0:13' },
                  { title: 'Autoevaluación', duration: '0:10' },
                  { title: 'Colaboradores y subordinados', duration: '0:39' },
                  { title: 'Recursos humanos y comisión de evaluación', duration: '0:39' },
                  { title: 'Evaluación 360°', duration: '0:25' },
                  { title: 'Evaluación 360° cont.', duration: '1:10' },
                  { title: 'Introducción de interactividad 2', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:10' },
                  { title: 'Pregunta 2', duration: '1:10' },
                  { title: 'Pregunta 3', duration: '1:10' }
                ]
              },
              {
                name: 'Modelos de evaluación del desempeño',
                lessons: [
                  { title: '¿Cuáles son los modelos?', duration: '2:07' },
                  { title: 'Evaluación por coste-beneficio ', duration: '0:10' },
                  { title: 'Evaluación por incidentes críticos ', duration: '1:00' },
                  { title: 'Evaluación por objetivos 1', duration: '1:10' },
                  { title: 'Evaluación por objetivos 2', duration: '1:10' },
                  { title: 'Elección forzosa 1', duration: '1:10' },
                  { title: 'Elección forzosa 2', duration: '1:10' },
                  { title: 'Elección forzosa 3', duration: '1:10' },
                  { title: 'Con base en competencias laborales', duration: '1:10' },
                  { title: 'Competencias laborales 1', duration: '0:30' },
                  { title: 'Competencias laborales 2', duration: '0:40' },
                  { title: 'Competencias laborales 3', duration: '0:28' },
                  { title: 'Introducción de interactividad 3', duration: '0:40' },
                  { title: 'Pregunta 1', duration: '1:10' },
                  { title: 'Pregunta 2', duration: '1:10' },
                  { title: 'Pregunta 3', duration: '1:10' },
                  { title: 'Pregunta 4', duration: '1:10' },
                  { title: 'Pregunta 5', duration: '1:10' },
                  { title: 'Pregunta 6', duration: '1:10' }
                ]
              },
              {
                name: 'Metodología de implementación',
                lessons: [
                  { title: '¿Cómo implementar la evaluación? 1', duration: '0:40' },
                  { title: '¿Cómo implementar la evaluación? 2', duration: '0:30' },
                  { title: '¿Cómo implementar la evaluación? 3', duration: '0:32' },
                  { title: 'Introducción de interactividad 4', duration: '0:10' },
                  { title: 'Implementación', duration: '1:00' }
                ]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Recursos Humanos', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades directivas', skuPrefix: 'HD' },
            title: '¿Cómo dar retroalimentación?',
            slug: 'como-dar-retroalimentacion',
            thumbnail: {
              src: ThumbnailHD07,
              alt: 'dos obreros revisan juntos un manual de instrucciones'
            },
            cover: '/covers/cover_R_HD_07.svg',
            identifier: { prefix: 'R-HD-', courseNumber: '07' },
            duration: 15,
            description: [
              'En este curso dirigido a supervisores, gerentes y líderes de equipo, los estudiantes conocerán los beneficios de la retroalimentación (feedback) como parte fundamental de un proceso de desarrollo continuo, tanto a nivel personal como organizacional.',
              'También comprenderán la necesidad de transformar la percepción de la retroalimentación y las evaluaciones de desempeño, de un evento incómodo que provoca incertidumbre y ansiedad, por uno que nos ofrece la posibilidad de crecer y mejorar.',
              'Se presentan las características de la retroalimentación positiva y negativa, así como estrategias y recomendaciones sobre cuándo y cómo proporcionar cada una.',
              'Para reforzar el aprendizaje, los estudiantes analizarán situaciones comunes que ocurren en los centros de trabajo, a través de escenarios e interactividades. '
            ],
            topics: [
              'Beneficios de la retroalimentación',
              'Impactos negativos de una mala retroalimentación',
              '¿Cuándo dar retroalimentación?',
              'Tipos de retroalimentación',
              'Características de la retroalimentación efectiva',
              'Procedimiento para dar retroalimentación'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 0, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 4, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: '¿Cómo dar retroalimentación?',
                lessons: [
                  { title: 'Introducción', duration: '0:43' },
                  { title: '¿Cuándo se proporciona retroalimentación?', duration: '2:17' },
                  { title: 'Impacto negativo', duration: '0:10' },
                  { title: 'Beneficios de la retroalimentación 1', duration: '1:10' },
                  { title: 'Beneficios de la retroalimentación 2', duration: '1:10' },
                  { title: 'Tipos de retroalimentación', duration: '1:10' },
                  { title: 'Introducción de interactividad 1', duration: '1:10' },
                  { title: 'Pregunta 1', duration: '1:10' },
                  { title: 'Pregunta 2', duration: '1:10' },
                  { title: 'Pregunta 3', duration: '1:10' },
                  { title: 'Pregunta 4', duration: '1:10' }
                ]
              },
              {
                name: 'Características de la retroalimentación',
                lessons: [
                  { title: 'Objetiva', duration: '0:10' },
                  { title: 'Específica y factual', duration: '0:39' },
                  { title: 'Prioridades establecidas', duration: '0:39' },
                  { title: 'Introducción de interactividad 2', duration: '0:25' },
                  { title: 'Escenario 1', duration: '1:10' },
                  { title: 'Escenario 2', duration: '1:10' },
                  { title: 'Escenario 3', duration: '1:10' }
                ]
              },
              {
                name: 'Procedimiento para dar retroalimentación',
                lessons: [
                  { title: 'Aprende a indagar', duration: '1:10' },
                  { title: 'Dar seguimiento', duration: '0:10' },
                  { title: 'Solicita retroalimentación', duration: '2:07' },
                  { title: 'Introducción de interactividad 3', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:10' },
                  { title: 'Pregunta 2', duration: '1:10' },
                  { title: 'Pregunta 3', duration: '1:10' },
                  { title: 'Pregunta 4', duration: '1:10' }
                ]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          }
        ]
      },
      {
        name: 'Habilidades Blandas',
        slug: 'habilidades-blandas',
        colorid: '#db913e',
        courses: [
          {
            library: { name: 'Recursos Humanos ', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades Blandas', skuPrefix: 'HB' },
            title: 'Escucha Activa',
            slug: 'escucha-activa',
            thumbnail: {
              src: ThumbnailHBEA,
              alt: 'dos compañeros de trabajo entablando una conversación '
            },
            cover: '/covers/cover_R_HB_EA.svg',
            identifier: { prefix: 'HB', courseNumber: 'EA' },
            duration: 20,
            description: [
              'Este curso está dirigido a todos los colaboradores de empresas y organizaciones. Al inicio, se presenta una autoevaluación de las habilidades de escucha para que los usuarios puedan reconocer sus oportunidades de mejora.',
              'A continuación, se presentan los conceptos fundamentales para comprender el proceso de la comunicación, así como los diferentes tipos de escucha y las habilidades que se deben poner en práctica para llevar a cabo una escucha activa que beneficie tanto las relaciones laborales como las personales.',
              'A lo largo del curso, los usuarios encontrarán una serie de ejercicios y casos de estudio para poner en práctica sus conocimientos y reforzar el aprendizaje.'
            ],
            topics: [
              'El proceso de la comunicación',
              'Diferencia entre oír y escuchar',
              'Tipos de escucha',
              'Habilidades de la escucha activa',
              '¿Cómo escuchar la crítica?',
              '¿Cómo escuchar a alguien en catarsis?'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 1, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 0, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 0, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 4, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 0, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Escucha Activa',
                lessons: [
                  { title: 'Introducción a la autoevaluación', duration: '0:17' },
                  { title: 'Autoevaluación de Escucha Activa', duration: '0:32' },
                  { title: 'El proceso de comunicación?', duration: '0:20' },
                  { title: 'Diferencia entre oír y escuchar 1', duration: '0:40' },
                  { title: 'Diferencia entre oír y escuchar 2', duration: '0:35' },
                  { title: 'Tipos de escucha', duration: '0:19' },
                  { title: 'Tipos de escucha: No efectivos 1', duration: '0:30' },
                  { title: 'Tipos de escucha: No efectivos 2', duration: '0:30' },
                  { title: 'Introducción de interactividad 1', duration: '0:10' },
                  { title: 'Interactividad - Oír vs. Escuchar', duration: '1:00' },
                  { title: 'Pregunta de desafío 1', duration: '1:00' },
                  { title: 'Pregunta de desafío 2', duration: '1:00' },
                  { title: 'Pregunta de desafío 3', duration: '1:00' },
                  { title: 'Tipos de escucha: Efectivos 1', duration: '0:30' },
                  { title: 'Tipos de escucha: Efectivos 2', duration: '0:24' },
                  { title: 'Tipos de escucha: Efectivos 3', duration: '0:24' },
                  { title: 'Beneficios', duration: '0:24' },
                  { title: 'Introducción de interactividad 2', duration: '0:10' },
                  { title: 'Pregunta de desafío 1', duration: '1:00' },
                  { title: 'Pregunta de desafío 2', duration: '1:00' },
                  { title: 'Pregunta de desafío 3', duration: '1:00' }
                ]
              },
              {
                name: 'Habilidades de escucha activa',
                lessons: [
                  { title: 'Malas prácticas al escuchar 1', duration: '0:40' },
                  { title: 'Malas prácticas al escuchar 2', duration: '0:30' },
                  { title: 'Cómo aplicar la escucha activa', duration: '0:30' },
                  { title: 'Presta atención', duration: '0:30' },
                  { title: 'Evita los juicios', duration: '0:30' },
                  { title: 'Parafrasea la conversación', duration: '0:30' },
                  { title: 'Aclara tus dudas', duration: '0:30' },
                  { title: 'Reafirma los temas clave', duration: '0:30' },
                  { title: 'Comparte tu perspectiva', duration: '0:30' },
                  { title: 'Introducción de interactividad 3', duration: '0:10' },
                  { title: 'Interactividad - Buenas y malas prácticas', duration: '1:00' },
                  { title: 'Pregunta de desafío 1', duration: '1:00' },
                  { title: 'Pregunta de desafío 2', duration: '1:00' },
                  { title: 'Casos específicos', duration: '1:00' },
                  { title: 'Cómo escuchar la crítica 1', duration: '0:30' },
                  { title: 'Cómo escuchar la crítica 2', duration: '0:30' },
                  { title: 'Cómo escuchar la crítica 3', duration: '0:30' },
                  { title: 'Cómo escuchar la crítica 4', duration: '0:30' },
                  { title: 'Cómo escuchar a alguien en catarsis', duration: '0:30' },
                  { title: 'Cómo detener una conversación amablemente', duration: '0:30' },
                  { title: 'Introducción de interactividad 4', duration: '0:10' },
                  { title: 'Pregunta de desafío 1', duration: '1:00' },
                  { title: 'Pregunta de desafío 2', duration: '1:00' },
                  { title: 'Pregunta de desafío 3', duration: '1:00' }
                ]
              },

              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Recursos Humanos ', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades Blandas', skuPrefix: 'HB' },
            title: 'Manejo del estrés laboral',
            slug: 'manejo-del-estres-laboral',
            thumbnail: {
              src: ThumbnailHBME,
              alt: 'hombre con lentres frente a la computadora pensativo'
            },
            cover: '/covers/cover_R_HB_ME.svg',
            identifier: { prefix: 'HB', courseNumber: 'ME' },
            duration: 30,
            description: [
              'Este curso está dirigido a todos los colaboradores de empresas y organizaciones, con la intención de sensibilizarlos sobre el tema del estrés laboral como una problemática de nivel global que afecta su salud y la de las organizaciones',
              'Se presentan definiciones, hábitos y técnicas para reconocer, prevenir y manejar las situaciones estresantes en el centro de trabajo de manera individual, así como las estrategias de prevención e intervención que las organizaciones deben implementar para generar un entorno organizacional favorable para todos los trabajadores.',
              'Para reforzar el aprendizaje, los estudiantes deberán responder preguntas y analizar situaciones que les permitirán reconocer las mejores prácticas en el manejo y la erradicación del estrés laboral y el burnout de los centros de trabajo'
            ],
            topics: [
              'Emoción vs. Sentimiento',
              '¿Qué es el estrés?',
              'Estrés crónico',
              'Estrés laboral',
              'Síndrome de desgaste ocupacional (Burnout)',
              'Efectos del estrés en la salud',
              'Hábitos de autocuidado',
              'Mindfulness',
              'Programación Neurolingüística',
              'Aprender a negociar',
              'Gestión del tiempo',
              'Estrategias para la organización'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 0, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 4, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Manejo del Estrés Laboral',
                lessons: [
                  { title: 'Introducción', duration: '0:47' },
                  { title: 'Emoción vs. Sentimiento', duration: '0:32' },
                  { title: 'Emociones', duration: '0:20' },
                  { title: 'Sentimientos', duration: '0:40' },
                  { title: 'Vivir de manera consciente', duration: '0:35' },
                  { title: '¿Qué es el estrés?', duration: '0:19' },
                  { title: 'Estrés crónico', duration: '0:30' },
                  { title: 'Efectos del estrés en la salud', duration: '0:30' },
                  { title: 'Factores que producen estrés', duration: '0:10' },
                  { title: 'Estrés laboral 1', duration: '1:00' },
                  { title: 'Estrés laboral 2', duration: '1:00' },
                  { title: 'Factores de riesgo psicosocial', duration: '1:00' },
                  { title: 'Síntomas del estrés', duration: '1:00' },
                  { title: 'Síndrome de desgaste ocupacional', duration: '0:30' },
                  { title: 'Introducción de interactividad 1', duration: '0:14' },
                  { title: 'Definiciones - Interactividad', duration: '1:24' },
                  { title: 'Riesgos psicosociales - Interactividad', duration: '1:24' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Estrategias de manejo del estrés', duration: '0:40' },
                  { title: 'Hábitos de autocuidado', duration: '0:42' },
                  { title: 'Hábitos de sueño 1', duration: '0:40' },
                  { title: 'Hábitos de sueño 2', duration: '0:40' },
                  { title: 'Hábitos de sueño 3', duration: '0:40' },
                  { title: 'Hábitos alimenticios', duration: '0:40' },
                  { title: 'Consumo de sustancias nocivas', duration: '0:40' },
                  { title: 'Desconéctate del mundo digital 1', duration: '0:40' },
                  { title: 'Desconéctate del mundo digital 2', duration: '0:40' },
                  { title: 'Combate el sedentarismo', duration: '0:30' },
                  { title: 'Introducción de interactividad 2', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' },
                  { title: 'Pregunta 4', duration: '1:00' },
                  { title: 'Mindfulness 1', duration: '0:30' },
                  { title: 'Mindfulness 2', duration: '0:30' },
                  { title: 'Mindfulness 3', duration: '0:30' },
                  { title: 'Evalúa tus niveles de estrés', duration: '0:30' },
                  { title: 'Ejercicios de respiración', duration: '0:30' },
                  { title: 'Programación Neurolingüística', duration: '0:30' },
                  { title: 'Introducción de interactividad 3', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Aprende a decir que no', duration: '0:30' },
                  { title: 'Aprende a negociar', duration: '0:30' },
                  { title: 'Ten una red de apoyo 1', duration: '0:30' },
                  { title: 'Ten una red de apoyo 2', duration: '0:30' },
                  { title: 'Gestión del tiempo 1', duration: '0:40' },
                  { title: 'Gestión del tiempo 2', duration: '0:40' },
                  { title: 'Realiza actividades recreativas 1', duration: '0:40' },
                  { title: 'Realiza actividades recreativas 2', duration: '0:40' },
                  { title: 'Introducción de interactividad 4', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Red de apoyo - Interactividad', duration: '1:00' },
                  { title: 'Gestión del tiempo - Interactividad', duration: '1:00' },
                  { title: 'Estrategias para la organización 1', duration: '0:30' },
                  { title: 'Nivel organizacional', duration: '0:30' },
                  { title: 'Nivel interpersonal', duration: '0:30' },
                  { title: 'Nivel individual', duration: '0:30' },
                  { title: 'Estrategias para la organización 2', duration: '0:30' },
                  { title: 'Resumen', duration: '0:30' }
                ]
              },
              {
                name: 'Examen Final',
                lessons: [{ title: 'Examen Final', duration: '3:00' }]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          }
        ]
      },
      {
        name: 'Habilidades Tecnológicas',
        slug: 'habilidades-tecnologicas',
        colorid: '#71629f',
        courses: [
          {
            library: { name: 'Recursos Humanos ', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades Tecnológicas', skuPrefix: 'HT' },
            title: 'Mejores prácticas para el teletrabajo',
            slug: 'mejores-practicas-para-el-teletrabajo',
            thumbnail: {
              src: ThumbnailHTTT101,
              alt: 'Hombre mayor realiza trabajo de forma remota en su laptop'
            },
            cover: '/covers/cover_R_HT_TT_101.png',
            identifier: { prefix: 'HT-TT', courseNumber: '101' },
            duration: 12,
            description: [
              'Este curso tiene como objetivo educar a los colaboradores sobre las mejores prácticas para el teletrabajo, tomando en cuenta el desarrollo de buenos hábitos, la creación de un ambiente de trabajo óptimo y las medidas necesarias para mantener la seguridad de la información.',
              'Por medio de una evaluación, el usuario podrá demostrar que conoce las mejores prácticas para implementar el teletrabajo con éxito.'
            ],
            topics: [
              'Buenos hábitos de trabajo',
              'Creación de un ambiente óptimo',
              'Seguridad de la información',
              'Seguridad de dispositivos digitales'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 1, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 3, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Mejores prácticas para el teletrabajo',
                lessons: [
                  { title: 'Introducción', duration: '0:30' },
                  { title: '¿Qué es el teletrabajo?', duration: '0:30' },
                  { title: 'Lineamientos y políticas para el teletrabajo', duration: '0:30' },
                  { title: 'Buenos hábitos de trabajo', duration: '0:30' },
                  { title: 'Introducción de interactividad 1', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Introducción de interactividad 2', duration: '0:10' },
                  { title: 'Crea un ambiente de trabajo óptimo', duration: '0:30' },
                  { title: 'Introducción de interactividad 3', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' },
                  { title: 'Mejores prácticas de seguridad', duration: '0:40' },
                  { title: 'Introducción de interactividad 4', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' }
                ]
              },
              {
                name: 'Examen final',
                lessons: [{ title: 'Examen final', duration: '5:00' }]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Recursos Humanos ', skuPrefix: 'R' },
            subcategory: { name: 'Habilidades Tecnológicas', skuPrefix: 'HT' },
            title: 'Fundamentos del Teletrabajo para supervisores',
            slug: 'fundamentos-del-teletrabajo-para-supervisores',
            thumbnail: {
              src: ThumbnailHTTT201,
              alt: 'mujer realiza trabajo remoto desde la sala de su casa con su laptop'
            },
            cover: '/covers/cover_R_HT_TT_201.png',
            identifier: { prefix: 'HT-TT', courseNumber: '201' },
            duration: 20,
            description: [
              'Este curso tiene como objetivo concientizar a los gerentes, supervisores y líderes de equipos remotos sobre los beneficios y posibles riesgos del teletrabajo, así como los lineamientos y políticas que deben seguirse de acuerdo con la reforma a la Ley Federal del Trabajo (2021), sobre este tema.',
              'Se proporciona información y conocimientos prácticos para enfrentar los retos que se presentan en el teletrabajo, y se fomenta una cultura de autodisciplina, colaboración y trabajo por objetivos que potencialice el desempeño. A través de escenarios e interactividades, los usuarios podrán poner en práctica lo aprendido, y evaluar sus conocimientos al finalizar.'
            ],
            topics: [
              'Implementación del teletrabajo',
              'Lineamientos y políticas',
              'Seguridad física de dispositivos',
              'Seguridad de la información',
              'Ambiente óptimo para el teletrabajo',
              'Actitudes y habilidades de liderazgo'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 3, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 1, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Fundamentos del teletrabajo para supervisores',
                lessons: [{ title: 'Introducción', duration: '0:30' }]
              },
              {
                name: 'Implementación del teletrabajo',
                lessons: [
                  { title: '¿Cómo implementar el teletrabajo?', duration: '0:30' },
                  { title: 'Introducción de interactividad 1', duration: '0:10' },
                  { title: 'Ordena los pasos', duration: '1:00' },
                  { title: 'Lineamientos y políticas para el teletrabajo 1', duration: '0:30' },
                  { title: 'Lineamientos y políticas para el teletrabajo 2', duration: '0:40' },
                  { title: 'Lineamientos y políticas para el teletrabajo 3', duration: '1:00' },
                  { title: 'Seguridad física de los dispositivos 1', duration: '0:30' },
                  { title: 'Seguridad física de los dispositivos 2', duration: '0:24' },
                  { title: 'Seguridad de la información 1', duration: '0:30' },
                  { title: 'Seguridad de la información 2', duration: '0:20' },
                  { title: 'Seguridad de la información 3', duration: '0:40' },
                  { title: 'Introducción de interactividad 2', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' },
                  { title: 'Pregunta 4', duration: '1:00' },
                  { title: 'Pregunta 5', duration: '1:00' }
                ]
              },
              {
                name: 'Cómo ser un buen líder para teletrabajadores',
                lessons: [
                  { title: 'Tú marcas la pauta', duration: '5:00' },
                  { title: 'Introducción de interactividad 3', duration: '0:10' },
                  { title: 'Ambiente óptimo de trabajo', duration: '0:40' },
                  { title: 'Actitudes y habilidades de liderazgo', duration: '0:30' },
                  { title: 'Propósitos y metas en común', duration: '0:40' },
                  { title: 'Conoce en lo personal', duration: '0:40' },
                  { title: 'Comunicación eficiente 1', duration: '0:20' },
                  { title: 'Comunicación eficiente 2', duration: '0:30' },
                  { title: 'Estrategias de productividad', duration: '0:40' },
                  { title: 'Reconocimiento del desempeño', duration: '0:30' },
                  { title: 'Introducción de interactividad 4', duration: '0:10' },
                  { title: 'Encuentra la mejor solución', duration: '1:00' },
                  { title: 'Introducción de interactividad 5', duration: '0:10' },
                  { title: 'Mensaje de correo', duration: '1:00' },
                  { title: 'Resumen', duration: '1:00' }
                ]
              },
              {
                name: 'Examen final',
                lessons: [{ title: 'Examen final', duration: '5:00' }]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          }
        ]
      },
      {
        name: 'Jurídico',
        slug: 'juridico',
        colorid: '#0ca079',
        courses: [
          {
            library: { name: 'Recursos Humanos ', skuPrefix: 'R' },
            subcategory: { name: 'Jurídico', skuPrefix: 'J' },
            title: 'Fundamentos de la NOM-035',
            slug: 'fundamentos-de-la-nom-035',
            thumbnail: {
              src: ThumbnailRJN35,
              alt: 'colaboradores teniendo una conversacion intensa'
            },
            cover: '/covers/cover_R_J_N35_201.png',
            identifier: { prefix: 'J-N35', courseNumber: '201' },
            duration: 35,
            description: [
              'Este curso está dirigido a directivos, gerentes, supervisores y ejecutivos de Recursos Humanos, o a aquellos encargados del cumplimiento y aplicación de la NOM-035-STPS-2018.',
              'Expone de manera didáctica los conceptos y requerimientos de la NOM-035 para su correcta aplicación en los centros de trabajo, y refuerza el contenido a través de escenarios interactivos y cuestionarios. Por medio de una evaluación, se comprueba la comprensión de los conceptos y obligaciones establecidos en la NOM-035.'
            ],
            topics: [
              'Objetivo de la NOM-035',
              'Política de prevención',
              'Identificación y análisis factores de riesgo',
              'Evaluación del entorno organizacional',
              'Resultados y registros',
              'Medidas de prevención y acción de control',
              'Obligaciones de los trabajadores',
              'Multas por incumplimiento'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 2, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 4, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Fundamentos de la NOM-035',
                lessons: [
                  { title: 'Introducción', duration: '0:30' },
                  { title: 'Objetivo de la NOM-035', duration: '0:30' },
                  { title: '¿A Quién Aplica?', duration: '0:10' },
                  { title: 'Política de Prevención', duration: '1:00' },
                  { title: 'Identificar y Analizar Factores de Riesgo', duration: '0:30' },
                  { title: 'Introducción de Interactividad', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' },
                  { title: 'Introducción de interactividad 2', duration: '0:10' },
                  { title: 'Encuentra la Mejor Solución - Interactividad', duration: '1:00' },
                  { title: 'Evaluación del Entorno Organizacional', duration: '0:30' },
                  { title: '¿Cómo Presentar los Resultados? 1', duration: '0:24' },
                  { title: '¿Cómo Presentar los Resultados? 2', duration: '0:24' },
                  { title: 'Introducción de interactividad 3', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' },
                  { title: 'Pregunta 4', duration: '1:00' },
                  { title: 'Pregunta 5', duration: '1:00' },
                  { title: 'Pregunta 6', duration: '1:00' },
                  { title: '¿Qué son las Medidas de Prevención?', duration: '0:30' },
                  { title: '¿Cuáles son las medidas de prevención?', duration: '0:30' },
                  { title: 'Introducción de interactividad 4', duration: '0:10' },
                  { title: 'Interactividad 4', duration: '1:00' },
                  { title: 'Introducción de interactividad 5', duration: '0:10' },
                  { title: 'Interactividad 5', duration: '1:00' },
                  { title: 'Medidas y Acciones de Control 1', duration: '0:30' },
                  { title: 'Medidas y Acciones de Control 2', duration: '0:30' },
                  { title: 'Introducción de interactividad 6', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' },
                  { title: 'Identificar y Canalizar Trabajadores 1', duration: '0:40' },
                  { title: 'Identificar y Canalizar Trabajadores 2', duration: '0:30' },
                  { title: 'Exámenes Médicos y Evaluaciones Psicológicas', duration: '0:30' },
                  { title: '¿Capacitación o Información? 1', duration: '0:30' },
                  { title: '¿Capacitación o Información? 2', duration: '0:30' },
                  { title: '¿Qué Registros Necesito? 1', duration: '0:30' },
                  { title: '¿Qué Registros Necesito? 2', duration: '0:30' },
                  { title: 'Obligaciones de los Trabajadores 1', duration: '0:30' },
                  { title: 'Obligaciones de los Trabajadores 2', duration: '0:30' },
                  { title: 'Aspectos Importantes', duration: '0:30' },
                  { title: 'Multas por Incumplimiento', duration: '0:30' },
                  { title: 'Resumen', duration: '0:30' } // TODO: conclusion y curso completo verificar names
                ]
              },
              {
                name: 'Examen final',
                lessons: [{ title: 'Examen final', duration: '5:00' }]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Recursos Humanos ', skuPrefix: 'R' },
            subcategory: { name: 'Jurídico', skuPrefix: 'J' },
            title: 'Prevención de violencia laboral y acoso sexual',
            slug: 'prevencion-de-violencia-laboral-y-acoso-sexual',
            thumbnail: {
              src: ThumbnailRJV101,
              alt: 'ejecutivo le llama la atencion verbalmente a empleada en la oficina'
            },
            cover: '/covers/cover_R_J_VL_101.svg',
            identifier: { prefix: 'J-VL', courseNumber: '101' },
            duration: 25,
            description: [
              'Este curso está dirigido a todos los trabajadores de la organización.',
              'Tiene el objetivo de concientizar sobre el problema de la violencia y discriminación laborales, y brindar una capacitación teórico práctica para prevenir, atender y erradicar estos comportamientos de los centros de trabajo.'
            ],
            topics: [
              'Política de cero tolerancia',
              'Definiciones importantes',
              'Conductas prohibidas ',
              'Relaciones personales en el trabajo',
              'Ciberacoso',
              'Estrategias para abordar la violencia laboral',
              'Método de reporte',
              'Mecanismos externos de atención',
              'Medidas de protección'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 1, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 3, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Prevención, atención y erradicación de la violencia laboral',
                lessons: [
                  { title: 'Introducción', duration: '0:30' },
                  { title: '¿Qué es la violencia laboral?', duration: '0:30' },
                  { title: 'Introducción de interactividad 1', duration: '0:10' },
                  { title: 'Definiciones', duration: '1:00' },
                  { title: 'Política de cero tolerancia', duration: '0:30' },
                  { title: '¿Qué conductas están prohibidas?', duration: '0:40' },
                  { title: 'Violencia física', duration: '1:00' },
                  { title: 'Violencia verbal', duration: '0:30' },
                  { title: 'Violencia no verbal', duration: '0:24' },
                  { title: 'Introducción de interactividad 2', duration: '0:10' },
                  { title: 'Escenario 1', duration: '1:00' },
                  { title: 'Escenario 2', duration: '1:00' },
                  { title: 'Comportamientos fuera del centro de trabajo', duration: '0:30' },
                  { title: 'Relaciones personales en el centro de trabajo 1', duration: '0:30' },
                  { title: 'Relaciones personales en el centro de trabajo 2', duration: '0:30' },
                  { title: 'Ciberacoso', duration: '0:30' },
                  { title: 'Introducción de interactividad 3', duration: '0:10' },
                  { title: 'Escenario 1', duration: '1:00' },
                  { title: 'Escenario 2', duration: '1:00' },
                  { title: 'Escenario 3', duration: '1:00' },
                  { title: 'Escenario 4', duration: '1:00' },
                  { title: '¿Cómo abordar la violencia laboral?', duration: '0:30' },
                  { title: 'Estrategias para abordar la violencia laboral', duration: '0:30' },
                  { title: 'Método para reportar violaciones', duration: '0:30' },
                  { title: 'Información importante para los reportes', duration: '0:30' },
                  { title: 'Mecanismos externos de atención', duration: '0:30' },
                  { title: 'Medidas de protección', duration: '0:30' },
                  { title: 'Introducción de interactividad 4', duration: '0:10' },
                  { title: 'Escenario 1', duration: '1:00' },
                  { title: 'Escenario 2', duration: '1:00' },
                  { title: 'Escenario 3', duration: '1:00' },
                  { title: 'Resumen', duration: '1:00' }
                ]
              },
              {
                name: 'Examen final',
                lessons: [{ title: 'Examen final', duration: '5:00' }]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Recursos Humanos ', skuPrefix: 'R' },
            subcategory: { name: 'Jurídico', skuPrefix: 'J' },
            title: 'Prevención, atención y erradicación de la violencia laboral para supervisores',
            slug: 'prevencion-atencion-y-erradicacion-de-la-violencia-laboral',
            thumbnail: {
              src: ThumbnailRJV201,
              alt: 'En una sala de juntas un supervisor agita papeles mientras habla con un empleado que se ve intimidado'
            },
            cover: '/covers/cover_R_J_VL_201.svg',
            identifier: { prefix: 'J-VL', courseNumber: '201' },
            duration: 20,
            description: [
              'Este curso está dirigido a líderes de equipo y supervisores. El objetivo es concientizarlos sobre sus responsabilidades para generar y mantener un ambiente de trabajo libre de violencia y discriminación',
              'También, conocerán estrategias de prevención y atención, así como las medidas de protección y modificación de la conducta que deben de aplicarse en caso de ser necesario. '
            ],
            topics: [
              'Política de cero tolerancia',
              'Conductas inapropiadas',
              'Relaciones románticas en el trabajo',
              'Cultura de cumplimiento',
              'Estrategias de prevención',
              'Medidas disciplinarias',
              'Comité de Atención y Seguimiento',
              'Sanciones'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 0, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 3, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Prevención, atención y erradicación de la violencia laboral para supervisores',
                lessons: [
                  { title: 'Introducción', duration: '0:30' },
                  { title: 'Conoce la política de cero tolerancia', duration: '0:30' },
                  { title: 'Conductas inapropiadas en general', duration: '0:10' },
                  { title: 'Conductas inapropiadas de los supervisores', duration: '1:00' },
                  { title: 'Relaciones románticas en el trabajo', duration: '0:30' },
                  { title: 'Información sobre el incumplimiento', duration: '0:40' },
                  { title: 'Introducción de interactividad 1', duration: '0:10' },
                  { title: 'Escenario 1', duration: '1:00' },
                  { title: 'Escenario 2', duration: '1:00' },
                  { title: 'Escenario 3', duration: '1:00' },
                  { title: 'Escenario 4', duration: '1:00' },
                  { title: 'Cultura de cumplimiento', duration: '1:00' },
                  { title: 'Estrategias de prevención', duration: '0:30' },
                  { title: 'Violencia no verbal', duration: '0:24' },
                  { title: 'Introducción de interactividad 2', duration: '0:10' },
                  { title: 'Escenario 1', duration: '1:00' },
                  { title: 'Escenario 2', duration: '1:00' },
                  { title: 'Escenario 3', duration: '1:00' },
                  { title: 'Escenario 4', duration: '1:00' },
                  { title: 'Información importante sobre los reportes', duration: '0:30' },
                  { title: 'Medidas disciplinarias', duration: '0:30' },
                  { title: 'Comité de Atención y Seguimiento', duration: '0:30' },
                  { title: 'Medidas necesarias', duration: '0:30' },
                  { title: 'Medidas de protección', duration: '0:10' },
                  { title: 'Medidas de modificación de la conducta', duration: '0:30' },
                  { title: 'Medidas para fortalecer un ambiente laboral seguro', duration: '0:30' },
                  { title: 'Vigilar el cumplimiento', duration: '0:30' },
                  { title: 'Sanciones', duration: '0:30' },
                  { title: 'Introducción de interactividad 3', duration: '0:10' },
                  { title: 'Escenario 1', duration: '1:00' },
                  { title: 'Escenario 2', duration: '1:00' },
                  { title: 'Escenario 3', duration: '1:00' },
                  { title: 'Escenario 4', duration: '1:00' },
                  { title: 'Resumen', duration: '0:30' }
                ]
              },
              {
                name: 'Examen final',
                lessons: [{ title: 'Examen final', duration: '5:00' }]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Seguridad de la información',
    slug: 'seguridad-de-la-informacion',
    subcategories: [
      {
        name: 'Seguridad Esenciales',
        slug: 'esenciales',
        colorid: '#4a6eb5',
        courses: [
          {
            library: { name: 'Seguridad de la información', skuPrefix: 'S' },
            subcategory: { name: 'Esenciales', skuPrefix: 'E' },
            title: 'Prácticas Esenciales',
            slug: 'practicas-esenciales',
            thumbnail: {
              src: ThumbnailSE101,
              alt: 'hombre con lentes mirando a la computadora'
            },
            cover: '/covers/cover_S_E_101.png',
            identifier: { prefix: 'E', courseNumber: '101' },
            duration: 30,
            description: [
              'Este curso tiene como objetivo concientizar a los colaboradores sobre los peligros que ponen en riesgo la información de las organizaciones, tanto en los centros de trabajo como en los dispositivos digitales e internet.',
              'Se presentan los diferentes riesgos y las mejores prácticas para prevenirlos y evitarlos.',
              'Asimismo, se pretende fomentar una cultura de respuesta inmediata y reporte ante cualquier incidente relacionado con la seguridad de la información.'
            ],
            topics: [
              'Clasificación de la información',
              'Ingenieros sociales',
              'Amenazas internas',
              'Mejores prácticas en el centro de trabajo',
              'Malware',
              'Phishing',
              'Baiting',
              'Mejores prácticas en dispositivos digitales e internet'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 4, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 3, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Prácticas Esenciales',
                lessons: [
                  { title: 'Introducción', duration: '0:47' },
                  { title: 'Objetivo del Curso', duration: '0:32' },
                  { title: 'Clasificación de la información', duration: '0:20' },
                  { title: 'Introducción de interactividad 1', duration: '0:14' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: '¿A qué Amenazas te Enfrentas?', duration: '0:40' },
                  { title: 'Mundo digital: Mejores Prácticas', duration: '0:35' },
                  { title: 'Programas y Actualizaciones', duration: '0:19' },
                  { title: 'Contraseñas Seguras 1', duration: '0:30' },
                  { title: 'Contraseñas Seguras 2', duration: '0:30' },
                  { title: 'Introducción de interactividad 2', duration: '0:10' },
                  { title: 'Contraseña Segura - Mejores Prácticas', duration: '0:10' },
                  { title: '¿Cómo Identificar Páginas Peligrosas? 1', duration: '0:10' },
                  { title: '¿Cómo Identificar Páginas Peligrosas? 2', duration: '0:10' },
                  { title: 'Introducción de interactividad 3', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: '¿Cómo Identificar Correos de Phishing?', duration: '0:30' },
                  { title: 'Introducción de interactividad 4', duration: '0:10' },
                  { title: 'Caso de Phishing 1', duration: '1:00' },
                  { title: 'Caso de Phishing 2', duration: '1:00' },
                  { title: 'Caso de Phishing 3', duration: '1:00' },
                  { title: '¿Cómo Protegerse en las Redes Sociales? 1', duration: '0:30' },
                  { title: '¿Cómo Protegerse en las Redes Sociales? 2', duration: '0:30' },
                  { title: '¿Cómo Proteger los Dispositivos Móviles? 1', duration: '1:00' },
                  { title: '¿Cómo Proteger los Dispositivos Móviles? 2', duration: '1:00' },
                  { title: '¿Cómo Protegerse Fuera de la Oficina? 1', duration: '1:00' },
                  { title: '¿Cómo Protegerse Fuera de la Oficina? 2', duration: '0:30' },
                  { title: 'Introducción de Interactividad 5', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' },
                  { title: 'Seguridad Física: Mejores Prácticas', duration: '0:44' }
                ]
              },
              {
                name: 'Examen Final',
                lessons: [{ title: 'Examen Final', duration: '3:00' }]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          }
        ]
      },
      {
        name: 'Seguridad Micro Módulos',
        slug: 'micro-modulos',
        colorid: '#4a6eb5',
        courses: [
          {
            library: { name: 'Seguridad de la información', skuPrefix: 'S' },
            subcategory: { name: 'Micro Módulos', skuPrefix: 'MM' },
            title: 'Contraseñas Seguras',
            slug: 'contrasenas-seguras',
            thumbnail: {
              src: ThumbnailSC01,
              alt: 'hombre inicia secion con 2 factores de autenticacion atravez de su mobile.'
            },
            cover: '/covers/cover_S_C_01.svg',
            identifier: { prefix: 'C', courseNumber: '01' },
            duration: 10,
            description: [
              'Este curso está dirigido a trabajadores, supervisores y líderes de equipo que necesiten aprender a generar contraseñas seguras y fáciles de recordar.',
              'Los usuarios conocerán la importancia de las contraseñas en la ciberseguridad, aprenderán estrategias para generar contraseñas seguras y métodos para protegerlas.',
              'A través de cuestionarios, los estudiantes podrán poner en práctica sus conocimientos y reforzarán el aprendizaje.'
            ],
            topics: [
              'Recomendaciones generales',
              'Frases de contraseña',
              'Contraseña maestra personalizada',
              'Gestores de contraseña',
              'Autenticación de dos factores',
              '¿Qué hacer si mi contraseña ha sido robada?'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 0, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 2, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 0, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Contraseñas Seguras',
                lessons: [
                  { title: 'Introducción', duration: '0:47' },
                  { title: '¿Cómo generar contraseñas seguras?', duration: '0:32' },
                  { title: 'Introducción de interactividad 1', duration: '0:14' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' },
                  { title: '¿Cómo proteger tus contraseñas?', duration: '0:40' },
                  { title: 'Gestores de contraseñas', duration: '0:35' },
                  { title: '¿Cómo funcionan los gestores de contraseñas?', duration: '0:19' },
                  { title: 'Autenticación de dos factores', duration: '0:30' },
                  { title: 'Introducción de interactividad 1', duration: '0:14' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: '¿Qué hacer si tu contraseña ha sido robada?', duration: '0:30' }
                ]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Seguridad de la información', skuPrefix: 'S' },
            subcategory: { name: 'Micro Módulos', skuPrefix: 'MM' },
            title: 'Malware',
            slug: 'malware',
            thumbnail: {
              src: ThumbnailSM01,
              alt: 'empleada de oficina con un virus en su computadora.'
            },
            cover: '/covers/cover_S_M_01.svg',
            identifier: { prefix: 'M', courseNumber: '01' },
            duration: 10,
            description: [
              'Este curso está dirigido a trabajadores, supervisores y líderes de equipo que necesiten reforzar sus conocimientos de ciberseguridad para convertirse en “el eslabón más fuerte” de la estrategia de seguridad de su organización.',
              'Los estudiantes aprenderán a reconocer los diferentes tipos de malware a los que se enfrentan, y conocerán cuáles son las mejores prácticas para evitarlos.',
              'A través de ejercicios interactivos, los usuarios podrán poner en práctica lo aprendido y reforzarán las habilidades adquiridas.'
            ],
            topics: [
              '¿Qué es el malware?',
              'Principales amenazas',
              '¿Cuáles son las señales de infección?',
              '¿Cómo protegernos del malware?'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 3, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 0, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 0, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Malware',
                lessons: [
                  { title: 'Introducción', duration: '0:47' },
                  { title: 'Principales amenazas 1', duration: '0:32' },
                  { title: 'Principales amenazas 2', duration: '0:32' },
                  { title: 'Introducción de interactividad 1', duration: '0:14' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Malware', duration: '0:40' },
                  { title: '¿Cómo protegerte del malware? ', duration: '0:35' },
                  { title: 'Resumen', duration: '0:19' },
                  { title: 'Introducción de interactividad 2', duration: '0:14' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' },
                  { title: '¿Cuáles son las señales de infección? 1', duration: '0:30' },
                  { title: '¿Cuáles son las señales de infección? 2', duration: '0:30' },
                  { title: 'Introducción de interactividad 3', duration: '0:14' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' }
                ]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          },
          {
            library: { name: 'Seguridad de la información', skuPrefix: 'S' },
            subcategory: { name: 'Micro Módulos', skuPrefix: 'MM' },
            title: 'Phishing',
            slug: 'phishing',
            thumbnail: {
              src: ThumbnailSP01,
              alt: 'persona con un teléfono celular en la mano, recibe una llamada de un número desconocido.'
            },
            cover: '/covers/cover_S_P_01.svg',
            identifier: { prefix: 'P', courseNumber: '01' },
            duration: 10,
            description: [
              'Este curso está dirigido a trabajadores, supervisores y líderes de equipo que necesiten reforzar sus conocimientos de ciberseguridad para convertirse en “el eslabón más fuerte” de la estrategia de seguridad de su organización.',
              'Los estudiantes conocerán qué es el phishing, las diferentes estrategias utilizadas por los ciberdelincuentes, así como las mejores prácticas para estar prevenidos y saber cómo actuar en caso de un ataque de phishing.',
              'Los usuarios podrán poner en práctica las habilidades adquiridas a través de interactividades que simulan ataques de la vida real. '
            ],
            topics: [
              '¿Qué es el phishing?',
              'Tipos de ataques',
              'Mejores prácticas para navegar en internet',
              'Análisis de un correo de phishing',
              'Uso seguro de redes sociales'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 1, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 0, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 0, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Phishing',
                lessons: [
                  { title: 'Introducción', duration: '0:47' },
                  { title: 'Tipos de ataques', duration: '0:32' },
                  { title: 'Email phishing', duration: '0:32' },
                  { title: 'Spear phishing', duration: '0:14' },
                  { title: 'Whaling', duration: '1:00' },
                  { title: 'Smishing y Vishing', duration: '0:40' },
                  { title: 'Angler phishing', duration: '0:35' },
                  { title: '¿Cómo evitar el phishing en páginas web?', duration: '0:19' },
                  { title: '¿Cómo evitar el phishing en correos y mensajes?', duration: '0:34' },
                  { title: '¿Cómo evitar el phishing en redes sociales?', duration: '0:40' },
                  { title: 'Introducción de interactividad 1', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '1:00' },
                  { title: 'Pregunta 2', duration: '1:00' },
                  { title: 'Pregunta 3', duration: '1:00' },
                  { title: 'Pregunta 4', duration: '1:00' },
                  { title: 'Pregunta 6', duration: '1:00' }
                ]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Ventas',
    slug: 'ventas',
    subcategories: [
      {
        name: 'Capacitación Ventas',
        slug: 'capacitacion-ventas',
        colorid: '#ff9903',
        courses: [
          {
            library: { name: 'Ventas', skuPrefix: 'V' },
            subcategory: { name: 'Capacitación Ventas', skuPrefix: 'PV' },
            title: 'Proceso de Ventas',
            slug: 'proceso-de-ventas',
            thumbnail: {
              src: ThumbnailVPV101,
              alt: 'ejecutiva de ventas finaliza un trato con cliente.'
            },
            cover: '/covers/cover_V_PV_101.svg',
            identifier: { prefix: 'V-PV-', courseNumber: '101' },
            duration: 30,
            description: [
              'En este curso, los estudiantes conocerán la importancia de apegarse a un proceso de ventas estructurado para mejorar sus resultados sin importar en qué industria se desarrollen. Se presenta la definición, los beneficios y las siete etapas fundamentales de todo proceso de ventas, así como una metodología para su desarrollo e implementación.',
              'A través de cuestionarios y casos de estudio interactivos, los estudiantes podrán reforzar los conceptos y estrategias presentados, y con la evaluación final podrán comprobar qué tanto han aprendido, y qué áreas necesitan revisar nuevamente.'
            ],
            topics: [
              'Proceso de ventas',
              'Proceso vs. Metodología',
              'Prospección y calificación',
              'Metodología BANT',
              'Manejo de objeciones',
              'Cerrar el trato',
              'Buyer’s journey',
              'Implementación del PV'
            ],
            features: [
              { name: 'Texto + Locución', qt: 1, iconSrc: '/svgs/txtLocucion.svg' },
              { name: 'Autoevaluación', qt: 0, iconSrc: '/svgs/autoeval.svg' },
              { name: 'Video de Introducción', qt: 1, iconSrc: '/svgs/video.svg' },
              { name: 'Interactividades', qt: 6, iconSrc: '/svgs/interact.svg' },
              { name: 'Cuestionario', qt: 0, iconSrc: '/svgs/cuestionario.svg' },
              { name: 'Examen Final', qt: 1, iconSrc: '/svgs/examen.svg' }
            ],
            modules: [
              {
                name: 'Proceso de Ventas',
                lessons: [{ title: 'Introducción', duration: '0:30' }]
              },
              {
                name: 'Módulo 1',
                lessons: [
                  { title: 'El proceso de ventas', duration: '0:50' },
                  { title: '¿Qué es el proceso de ventas?', duration: '0:40' },
                  { title: '¿Cuáles son los pasos?', duration: '1:30' },
                  { title: 'Proceso vs. Metodología', duration: '1:18' },
                  { title: '¿Por qué implementar un proceso de ventas?', duration: '0:55' },
                  { title: 'Beneficios de la implementación', duration: '0:28' },
                  { title: 'Introducción de interactividad 1', duration: '0:45' },
                  { title: 'Pregunta 1', duration: '3:00' },
                  { title: 'Pregunta 2', duration: '3:00' },
                  { title: 'Los 7 pasos del proceso de ventas', duration: '3:00' },
                  { title: 'Preparación y prospección 1', duration: '3:00' },
                  { title: 'Preparación y prospección 2', duration: '0:58' },
                  { title: 'Preparación y prospección 3', duration: '0:58' },
                  { title: 'Contacto y calificación 1', duration: '0:58' },
                  { title: 'Contacto y calificación 2', duration: '0:58' },
                  { title: 'Contacto y calificación 3', duration: '0:58' },
                  { title: 'Contacto y calificación 4', duration: '0:58' },
                  { title: 'Introducción de interactividad 2', duration: '0:58' },
                  { title: 'Pregunta 1', duration: '3:00' },
                  { title: 'Pregunta 2', duration: '3:00' },
                  { title: 'Metodología BANT: Interactividad', duration: '0:30' },
                  { title: 'Investigación 1', duration: '3:00' },
                  { title: 'Investigación 2', duration: '0:30' },
                  { title: 'Presentación 1', duration: '0:30' },
                  { title: 'Presentación 2', duration: '0:20' },
                  { title: 'Presentación 3', duration: '0:25' },
                  { title: 'Presentación 4', duration: '0:28' },
                  { title: 'Manejo de objeciones 1', duration: '0:28' },
                  { title: 'Manejo de objeciones 2', duration: '0:28' },
                  { title: 'Manejo de objeciones 3', duration: '0:28' },
                  { title: 'Introducción de interactividad 3', duration: '0:28' },
                  { title: 'Pregunta 1', duration: '3:00' },
                  { title: 'Presentación: Interactividad', duration: '0:20' },
                  { title: 'Pregunta 2', duration: '3:00' },
                  { title: 'Cerrar el trato 1', duration: '0:40' },
                  { title: 'Cerrar el trato 2', duration: '0:40' },
                  { title: 'Cerrar el trato 3', duration: '0:40' },
                  { title: 'Cerrar el trato 4', duration: '0:40' },
                  { title: 'Seguimiento 1', duration: '0:30' },
                  { title: 'Seguimiento 2', duration: '0:30' },
                  { title: 'Seguimiento 3', duration: '0:30' },
                  { title: 'Introducción de interactividad 4', duration: '0:30' },
                  { title: 'Pregunta 1', duration: '3:00' },
                  { title: 'Pregunta 2', duration: '3:00' }
                ]
              },
              {
                name: 'Módulo 2',
                lessons: [
                  { title: 'Implementación del proceso de ventas', duration: '0:20' },
                  { title: '¿Cómo generar un proceso de ventas exitoso?', duration: '0:55' },
                  { title: 'Establece objetivos 1', duration: '0:45' },
                  { title: 'Establece objetivos 2', duration: '0:35' },
                  { title: 'Analiza tu proceso de ventas 1', duration: '0:40' },
                  { title: 'Analiza tu proceso de ventas 2', duration: '0:40' },
                  { title: 'Introducción de interactividad 5', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '3:00' },
                  { title: 'Pregunta 2', duration: '3:00' },
                  { title: 'Ciclo de compra', duration: '0:30' },
                  { title: 'Crea tu proceso', duration: '0:30' },
                  { title: 'Mide los resultados', duration: '0:30' },
                  { title: 'Desarrollo continuo 1', duration: '0:30' },
                  { title: 'Desarrollo continuo 2', duration: '0:30' },
                  { title: 'Introducción de interactividad 6', duration: '0:10' },
                  { title: 'Pregunta 1', duration: '3:00' },
                  { title: 'Pregunta 2', duration: '3:00' },
                  { title: 'Implementación: Interactividad', duration: '0:10' },
                  { title: 'Resumen', duration: '0:40' }
                ]
              },
              {
                name: 'Examen final',
                lessons: [{ title: 'Evaluación de conocimientos', duration: '5:00' }]
              },
              {
                name: 'Conclusión',
                lessons: [{ title: 'Conclusión', duration: '0:17' }]
              }
            ]
          }
        ]
      }
    ]
  }
]
export default DataCourseLibrarie
