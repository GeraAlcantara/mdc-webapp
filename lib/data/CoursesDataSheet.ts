import Iconinteract from '../svgs/interact.svg'
import Iconvideo from '../svgs/video.svg'
import IcontxtLocucion from '../svgs/txtLocucion.svg'
import Iconautoeval from '../svgs/autoeval.svg'

export const DataSheet: CourseFeatures = {
  library: { name: 'Recursos Humanos', skuPrefix: 'R' },
  subcategory: { name: 'Habilidades directivas', skuPrefix: 'HD' },
  title: 'Liderazgo Efectivo',
  slug: 'liderazgo-efectivo',
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
    { id: 1, name: 'Texto + Locución', qt: 1, ICON: IcontxtLocucion },
    { id: 2, name: 'Autoevaluación', qt: 1, ICON: Iconautoeval },
    { id: 3, name: 'Video de Introducción', qt: 1, ICON: Iconvideo },
    { id: 4, name: 'Interactividades', qt: 2, ICON: Iconinteract }
  ],
  lessons: [
    { title: 'Introducción', duration: '0:30' },
    { title: 'La influencia en el liderazgo', duration: '1:00' },
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
    { title: 'Resumen', duration: '0:58' },
    { title: 'Introducción de autoevaluación', duration: '0:20' },
    { title: 'Autoevaluación', duration: '1:55' },
    { title: 'Conclusión', duration: '0:34' }
  ]
}
