import Facebook from "../svgs/facebook.svg";
import Twitter from "../svgs/twitter.svg";
import Instagram from "../svgs/instagram.svg";
import Linkedin from "../svgs/linkedin.svg";

export const coursesLinks = [
  {
    categories: {
      R: {
        name: "Recursos Humanos",
        slug: "recursos-humanos",
        subcategories: {
          HB: {
            name: "Habilidades Blandas",
            slug: "habilidades-blandas",
            course: {
              EA: { name: "Escucha Activa", slug: "escucha-activa" },
              ME: { name: "Manejo de estres", slug: "manejo-de-estress" },
            },
          },
          HD: {
            name: "Habilidades Directivas",
            slug: "habilidades-directivas",
            course: {
              HD01: { name: "Liderazgo Effectivo", slug: "liderazgo-effectivo" },
              HD02: { name: "Equipos de alto rendimiento", slug: "equipos-de-alto-rendimiento" },
              HD03: { name: "Comunicación efectiva", slug: "comunicación-efectiva" },
              HD04: { name: "Inteligencia emocional para la gestión de conflictos", slug: "inteligencia-emocional-para-la-gestion-de-conflictos" },
              HD05: { name: "Gestión del tiempo", slug: "gestion-del-tiempo" },
              HD06: { name: "Evaluación del Desempeño", slug: "evaluacion-del-desempeno" },
              HD07: { name: "Cómo dar retroalimentación", slug: "como-dar-retroalimentacion" },
            },
          },
          HT: {
            name: "Habilidades Tecnologicas",
            slug: "habilidades-tecnologicas",
            course: {
              TT101: { name: "Mejores prácticas para el teletrabajo", slug: "mejores-practicas-para-el-teletrabajo" },
              TT201: { name: "Teletrabajo Supervisores", slug: "teletrabajo-supervisores" },
            },
          },
          J: {
            name: "Juridico",
            slug: "juridico",
            course: {
              N35: { name: "Nom35", slug: "nom35" },
              VL101: { name: "Prevención de violencia laboral y acoso sexual", slug: "prevencion-de-violencia-laboral-y-acoso-sexual" },
              VL201: {
                name: "Prevención, atención y erradicación de la violencia laboral para supervisores.",
                slug: "prevencion-atención-y-erradicacion-de-la-violencia-laboral",
              },
            },
          },
        },
      },
      S: {
        name: "Seguridad de la informacion",
        slug: "seguridad-de-la-informacion",
        subcategories: {
          E: {
            name: "Esenciales",
            slug: "esenciales",
            course: {
              E101: { name: "Seguridad Informatica", slug: "seguridad-informatica" },
            },
          },
          MM: {
            name: "Micro Módulos",
            slug: "micro-modulos",
            course: {
              C01: { name: "contraseñas Seguras", slug: "contrasenas-seguras" },
              M01: { name: "Malware mini modulo", slug: "malware" },
              P01: { name: "Phishing", slug: "phishing" },
            },
          },
        },
      },
      V: {
        name: "Ventas",
        slug: "ventas",
        subcategories: {
          PV: {
            name: "Capacitación en el Proceso de Ventas",
            slug: "capacitacion-en-el-proceso-de-ventas",
            course: {
              PV101: { name: "Proceso de Ventas", slug: "proceso-de-ventas" },
            },
          },
        },
      },
    },
  },
  { name: "inicio", slug: "/" },
  { name: "servicios", slug: "servicios" },
  { name: "Librerías", slug: "Librerias" },
  { name: "Casos de éxito", slug: "Casos-de-exito" },
  { name: "blog", slug: "blog" },
];

export const FooterLinks = [
  {
    title: "Compañia",
    links: [
      {
        name: "Sobre MDC",
        link: "about",
      },
      {
        name: "¡Estamos Contratando!",
        link: "trabaja-con-nosotros",
      },
      {
        name: "Precios",
        link: "precios",
      },
    ],
  },
  {
    title: "Site Map",
    links: [
      {
        name: "Inicio",
        link: "/",
      },
      {
        name: "Servicios",
        link: "servicios",
      },
      {
        name: "Librerías",
        link: "librerias",
      },
      {
        name: "Casos de éxito",
        link: "casos-de-exito",
      },
      {
        name: "blog",
        link: "blog",
      },
    ],
  },
  {
    title: "Categorias",
    links: [
      {
        name: "Recursos Humanos",
        link: "recursos-humanos",
      },
      {
        name: "Seguridad de la informacion",
        link: "seguridad-de-la-informacion",
      },
      {
        name: "Ventas",
        link: "ventas",
      },
    ],
  },
  {
    title: "Subcategorías",
    links: [
      {
        name: "Habilidades Blandas",
        link: "habilidades-blandas",
      },
      {
        name: "Habilidades Directivas",
        link: "habilidades-directivas",
      },
      {
        name: "Habilidades Tecnologicas",
        link: "habilidades-tecnologicas",
      },
      {
        name: "Juridico",
        link: "juridico",
      },
      {
        name: "Seguridad Esenciales",
        link: "esenciales",
      },
      {
        name: "Micro Módulos",
        link: "micro-modulos",
      },
      {
        name: "Proceso de Ventas",
        link: "capacitacion-en-el-proceso-de-ventas",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    Icon: Instagram,
    link: "https://www.instagram.com/mexicodc/",
    name: "instagram",
  },
  {
    id: "social-media-2",
    Icon: Facebook,
    link: "https://www.facebook.com/mexicodevelopmentcenter",
    name: "facebook",
  },
  {
    id: "social-media-3",
    Icon: Twitter,
    link: "https://twitter.com/MexicoDC",
    name: "twitter",
  },
  {
    id: "social-media-4",
    Icon: Linkedin,
    link: "https://www.linkedin.com/company/mexico-development-center/",
    name: "linkedin",
  },
];

/* export default FooterLinks; */
