import Facebook from "../svgs/facebook.svg";
import Twitter from "../svgs/twitter.svg";
import Instagram from "../svgs/instagram.svg";
import Linkedin from "../svgs/linkedin.svg";

export const FooterLinks = [
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

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
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
