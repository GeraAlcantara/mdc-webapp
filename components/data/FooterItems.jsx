export const FooterItems = [
  {
    categories: {
      R: {
        name: "Recursos Humanos",
        slug: "recursos-humanos",
        subcategories: {
          HB: {
            name: "Habilidades Blandas",
            slug: "habilidades-blandas",
            curses: {
              EA: { name: "Escucha Activa", slug: "escucha-activa" },
              ME: { name: "Manejo de estres", slug: "manejo-de-estress" },
            },
          },
          HD: {
            name: "Habilidades Directivas",
            slug: "habilidades-directivas",
            curses: {
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
            curses: {
              TT101: { name: "Mejores prácticas para el teletrabajo", slug: "mejores-practicas-para-el-teletrabajo" },
              TT201: { name: "Teletrabajo Supervisores", slug: "teletrabajo-supervisores" },
            },
          },
          J: {
            name: "Juridico",
            slug: "juridico",
            curses: {
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
            curses: {
              E101: { name: "Seguridad Informatica", slug: "seguridad-informatica" },
            },
          },
          MM: {
            name: "Micro Módulos",
            slug: "micro-modulos",
            curses: {
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
            curses: {
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
export default FooterItems;
