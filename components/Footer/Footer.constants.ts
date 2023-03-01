import Facebook from './../svgs/facebook.svg'
import Twitter from './../svgs/twitter.svg'
import Instagram from './../svgs/instagram.svg'
import Linkedin from './../svgs/linkedin.svg'

export const coursesLinks = [
  {
    categories: {
      R: {
        name: 'Recursos Humanos',
        slug: 'recursos-humanos',
        subcategories: {
          HB: {
            name: 'Habilidades Blandas',
            slug: 'habilidades-blandas',
            course: {
              EA: { name: 'Escucha Activa', slug: 'escucha-activa' },
              ME: { name: 'Manejo de estrés', slug: 'manejo-de-estres' }
            }
          },
          HD: {
            name: 'Habilidades Directivas',
            slug: 'habilidades-directivas',
            course: {
              HD01: { name: 'Liderazgo Efectivo', slug: 'liderazgo-efectivo' },
              HD02: { name: 'Equipos de alto rendimiento', slug: 'equipos-de-alto-rendimiento' },
              HD03: { name: 'Comunicación efectiva', slug: 'comunicación-efectiva' },
              HD04: {
                name: 'Inteligencia emocional para la gestión de conflictos',
                slug: 'inteligencia-emocional-para-la-gestion-de-conflictos'
              },
              HD05: { name: 'Gestión del tiempo', slug: 'gestion-del-tiempo' },
              HD06: { name: 'Evaluación del Desempeño', slug: 'evaluacion-del-desempeno' },
              HD07: { name: 'Cómo dar retroalimentación', slug: 'como-dar-retroalimentacion' }
            }
          },
          HT: {
            name: 'Habilidades Tecnológicas',
            slug: 'habilidades-tecnologicas',
            course: {
              TT101: {
                name: 'Mejores prácticas para el teletrabajo',
                slug: 'mejores-practicas-para-el-teletrabajo'
              },
              TT201: { name: 'Teletrabajo Supervisores', slug: 'teletrabajo-supervisores' }
            }
          },
          J: {
            name: 'Jurídico',
            slug: 'juridico',
            course: {
              N35: { name: 'Nom35', slug: 'nom35' },
              VL101: {
                name: 'Prevención de violencia laboral y acoso sexual',
                slug: 'prevencion-de-violencia-laboral-y-acoso-sexual'
              },
              VL201: {
                name: 'Prevención, atención y erradicación de la violencia laboral para supervisores.',
                slug: 'prevencion-atencion-y-erradicacion-de-la-violencia-laboral'
              }
            }
          }
        }
      },
      S: {
        name: 'Seguridad de la información',
        slug: 'seguridad-de-la-informacion',
        subcategories: {
          E: {
            name: 'Esenciales',
            slug: 'esenciales',
            course: {
              E101: { name: 'Seguridad Informática', slug: 'seguridad-informatica' }
            }
          },
          MM: {
            name: 'Micro Módulos',
            slug: 'micro-modulos',
            course: {
              C01: { name: 'Contraseñas Seguras', slug: 'contrasenas-seguras' },
              M01: { name: 'Malware mini módulo', slug: 'malware' },
              P01: { name: 'Phishing', slug: 'phishing' }
            }
          }
        }
      },
      V: {
        name: 'Ventas',
        slug: 'ventas',
        subcategories: {
          PV: {
            name: 'Capacitación en el Proceso de Ventas',
            slug: 'capacitacion-en-el-proceso-de-ventas',
            course: {
              PV101: { name: 'Proceso de Ventas', slug: 'proceso-de-ventas' }
            }
          }
        }
      }
    }
  },
  { name: 'inicio', slug: '/' },
  { name: 'servicios', slug: 'servicios' },
  { name: 'Librerías', slug: 'Librerias' },
  { name: 'Casos de éxito', slug: 'Casos-de-exito' },
  { name: 'blog', slug: 'blog' }
]
export interface FooterLinksDef {
  title: string
  links: {
    name: string
    link: string
  }[]
}

export const FooterLinks: FooterLinksDef[] = [
  {
    title: 'Compañía',
    links: [
      {
        name: 'Sobre MDC',
        link: '/quienes-somos'
      }
    ]
  },
  {
    title: 'Site Map',
    links: [
      {
        name: 'Inicio',
        link: '/'
      },
      {
        name: 'Servicios',
        link: '/servicios'
      },
      {
        name: 'Librerías',
        link: '/libreria'
      },
      {
        name: 'Contáctanos',
        link: '/contactanos'
      },
      {
        name: 'Blog',
        link: '/blog'
      }
    ]
  },
  {
    title: 'Rutas de aprendizaje',
    links: [
      {
        name: 'Habilidades Directivas',
        link: '/rutas-de-aprendizaje/#habilidadesdirectivas'
      },
      {
        name: 'Habilidades Blandas',
        link: '/rutas-de-aprendizaje/#habilidadesblandas'
      },
      {
        name: 'Habilidades Tecnológicas',
        link: '/rutas-de-aprendizaje/#habilidadestecnologicas'
      },
      {
        name: 'Jurídico',
        link: '/rutas-de-aprendizaje/#juridico'
      },
      {
        name: 'Prácticas Esenciales',
        link: '/rutas-de-aprendizaje/#seguridadesenciales'
      },
      {
        name: 'Micro Módulos',
        link: '/rutas-de-aprendizaje/#micromodulos'
      },
      {
        name: 'Proceso de Ventas',
        link: '/rutas-de-aprendizaje/#capacitacionventas'
      }
    ]
  }
]

export interface SocialMediaDef {
  id: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  link: string
  name: string
}

export const socialMedia: SocialMediaDef[] = [
  {
    id: 'social-media-1',
    Icon: Instagram,
    link: 'https://www.instagram.com/mexicodc/',
    name: 'instagram'
  },
  {
    id: 'social-media-2',
    Icon: Facebook,
    link: 'https://www.facebook.com/mexicodevelopmentcenter',
    name: 'facebook'
  },
  {
    id: 'social-media-3',
    Icon: Twitter,
    link: 'https://twitter.com/MexicoDC',
    name: 'twitter'
  },
  {
    id: 'social-media-4',
    Icon: Linkedin,
    link: 'https://www.linkedin.com/company/mexico-development-center/',
    name: 'linkedin'
  }
]
