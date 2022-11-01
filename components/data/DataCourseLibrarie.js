import Iconinteract from "../svgs/interact.svg";
import Iconvideo from "../svgs/video.svg";
import IcontxtLocucion from "../svgs/txtLocucion.svg";
import Iconautoeval from "../svgs/autoeval.svg";
import Iconcuestionario from "../svgs/cuestionario.svg";
import ThumbnailHD01 from "../../public/thumbnail/thumbnail_1.jpg";
import ThumbnailHD02 from "../../public/thumbnail/thumbnail_2.jpg";
import ThumbnailHD03 from "../../public/thumbnail/thumbnail_3.jpg";
import ThumbnailHD04 from "../../public/thumbnail/thumbnail_4.jpg";

export const DataCourseLibrarie = {
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
            ME: { name: "Manejo de estres", slug: "manejo-de-estres" },
          },
        },
        HD: {
          name: "Habilidades Directivas",
          slug: "habilidades-directivas",
          curses: {
            HD01: {
              library: { name: "Recursos Humanos", skuPrefix: "R" },
              subcategory: { name: "Habilidades directivas", skuPrefix: "HD" },
              title: "Liderazgo Efectivo",
              slug: "liderazgo-efectivo",
              thumbnail: ThumbnailHD01,
              identifier: { prefix: "R-HD-", courseNumber: "01" },
              duration: 12,
              description: [
                "Este curso está dirigido a supervisores, gerentes y líderes de equipo que busquen desarrollar sus habilidades directivas.",
                "Los usuarios comprenderán las competencias necesarias para ejercer un liderazgo efectivo, y conocerán diferentes estilos de liderazgo a través de escenarios reales.",
                "Al finalizar, podrán identificar por medio de una autoevaluación qué tan eficiente es su liderazgo.",
              ],
              topics: [
                "Estilos de liderazgo",
                "La influencia en el liderazgo",
                "Competencias de un líder efectivo",
                "La autodisciplina",
                "Liderazgo ético",
                "Visión estratégica",
                "La comunicación",
                "La motivación",
              ],
              features: [
                { name: "Texto + Locucion", qt: 1, ICON: IcontxtLocucion },
                { name: "Autoevaluación", qt: 1, ICON: Iconautoeval },
                { name: "Video de Introducción", qt: 1, ICON: Iconvideo },
                { name: "Interactividades", qt: 2, ICON: Iconinteract },
                { name: "Cuestionario", qt: 0, ICON: Iconcuestionario },
              ],
              modules: [
                {
                  name: "Liderazgo efectivo",
                  lessons: [{ title: "Introducción", duration: "0:30" }],
                },
                {
                  name: "¿Cómo lograr un liderazgo efectivo?",
                  lessons: [
                    { title: "Competencias de un líder efectivo", duration: "0:50" },
                    { title: "Practica la autodisciplina", duration: "0:40" },
                    { title: "Trabaja con liderazgo ético", duration: "1:30" },
                    { title: "Mantén una visión estratégica", duration: "1:18" },
                    { title: "Promueve la comunicación", duration: "0:55" },
                    { title: "Impulsa la motivación", duration: "0:28" },
                    { title: "Escenarios de liderazgo", duration: "0:45" },
                    { title: "Escenario 1", duration: "3:00" },
                    { title: "Escenario 2", duration: "3:00" },
                    { title: "Escenario 3", duration: "3:00" },
                    { title: "Escenario 4", duration: "3:00" },
                    { title: "Resumen", duration: "0:58" },
                  ],
                },
                {
                  name: "Autoevaluación",
                  lessons: [
                    { title: "Introducción de autoevaluación", duration: "0:20" },
                    { title: "Autoevaluación", duration: "1:55" },
                  ],
                },
                {
                  name: "Conclusión",
                  lessons: [{ title: "Conclusion", duration: "0:17" }],
                },
              ],
            },
            HD02: {
              library: { name: "Recursos Humanos", skuPrefix: "R" },
              subcategory: { name: "Habilidades directivas", skuPrefix: "HD" },
              title: "Equipos de alto rendimiento",
              slug: "equipos-alto-rendimiento",
              thumbnail: ThumbnailHD02,
              identifier: { prefix: "R-HD-", courseNumber: "02" },
              duration: 10,
              description: [
                "El objetivo de este curso es concientizar a los supervisores y líderes sobre su responsabilidad de mantener un equipo de trabajo integrado y capaz de alcanzar sus objetivos.",
                "Se proporcionan herramientas para desarrollar el apoyo social, la ayuda mutua y afianzar la relación entre supervisores y trabajadores.",
                "Asimismo, se presentan estrategias para resolver conflictos laborales en las que se promueve el apoyo entre trabajadores.",
              ],
              topics: ["Fundamentos del trabajo en equipo", "Definición de propósitos", "¿Cómo generar confianza y compromiso?", "Resolución de conflictos"],
              features: [
                { name: "Texto + Locucion", qt: 1, ICON: IcontxtLocucion },
                { name: "Autoevaluación", qt: 0, ICON: Iconautoeval },
                { name: "Video de Introducción", qt: 1, ICON: Iconvideo },
                { name: "Interactividades", qt: 2, ICON: Iconinteract },
                { name: "Cuestionario", qt: 1, ICON: Iconcuestionario },
              ],
              modules: [
                {
                  name: "Equipos de alto rendimiento",
                  lessons: [{ title: "Introducción", duration: "0:24" }],
                },
                {
                  name: "¿Fundamentos del trabajo en equipo",
                  lessons: [
                    { title: "Crea un equipo de alto rendimiento", duration: "0:24" },
                    { title: "Define el propósito", duration: "0:27" },
                    { title: "Organiza a tu equipo", duration: "0:28" },
                    { title: "¿Cómo debo establecer mis objetivos?", duration: "0:30" },
                    { title: "Introducción a interactividad 1", duration: "0:10" },
                    { title: "Ordena los pasos", duration: "1:00" },
                    { title: "Fomenta la participación", duration: "0:43" },
                    { title: "Motiva a tu equipo", duration: "0:44" },
                    { title: "Desarrolla compromiso", duration: "0:31" },
                    { title: "Genera confianza en el equipo", duration: "0:28" },
                    { title: "Introducción a interactividad 2", duration: "0:10" },
                    { title: "Encuentra la mejor solución", duration: "1:00" },
                    { title: "Resolución de conflictos ", duration: "0:19" },
                    { title: "Introducción a interactividad 3", duration: "0:10" },
                    { title: "Pregunta 1", duration: "1:55" },
                    { title: "Pregunta 2", duration: "1:55" },
                    { title: "Pregunta 3", duration: "1:55" },
                    { title: "Pregunta 4", duration: "1:55" },
                  ],
                },
                {
                  name: "Conclusión",
                  lessons: [{ title: "Conclusion", duration: "0:17" }],
                },
              ],
            },
            HD03: {
              library: { name: "Recursos Humanos", skuPrefix: "R" },
              subcategory: { name: "Habilidades directivas", skuPrefix: "HD" },
              title: "Comunicación Efectiva",
              slug: "comunicacion-efectiva",
              thumbnail: ThumbnailHD03,
              identifier: { prefix: "R-HD-", courseNumber: "03" },
              duration: 12,
              description: [
                "En este curso dirigido a líderes y supervisores, los usuarios conocerán los diferentes estilos de comunicación, así como estrategias para comunicar malas noticias y mantener una comunicación efectiva.",
              ],
              topics: ["Estilos de comunicación", "Las 7 C’s de la comunicación efectiva ", "¿Cómo comunicar malas noticias?"],
              features: [
                { name: "Texto + Locucion", qt: 1, ICON: IcontxtLocucion },
                { name: "Autoevaluación", qt: 0, ICON: Iconautoeval },
                { name: "Video de Introducción", qt: 1, ICON: Iconvideo },
                { name: "Interactividades", qt: 2, ICON: Iconinteract },
                { name: "Cuestionario", qt: 1, ICON: Iconcuestionario },
              ],
              modules: [
                {
                  name: "Comunicación efectiva",
                  lessons: [{ title: "Introducción", duration: "0:43" }],
                },
                {
                  name: "¿Cómo nos comunicamos?",
                  lessons: [
                    { title: "Estilos de comunicación", duration: "2:17" },
                    { title: "Introducción a interactividad 1", duration: "0:10" },
                    { title: "Escenario 1", duration: "0:13" },
                    { title: "Escenario 2", duration: "0:10" },
                  ],
                },
                {
                  name: "¿Cómo lograr una comunicación efectiva?",
                  lessons: [
                    { title: "Las 7 C’s de la comunicación efectiva 1", duration: "0:39" },
                    { title: "Las 7 C’s de la comunicación efectiva 2", duration: "0:39" },
                    { title: "Las 7 C’s de la comunicación efectiva 3", duration: "0:25" },
                    { title: "Introducción a interactividad 2", duration: "0:10" },
                    { title: "Aplicando las 7 C's", duration: "0:25" },
                  ],
                },
                {
                  name: "Comunicaciones desafiantes",
                  lessons: [
                    { title: "¿Cómo comunicar malas noticias?", duration: "2:07" },
                    { title: "Introducción a interactividad 3", duration: "0:10" },
                    { title: "Ordena los pasos", duration: "1:00" },
                  ],
                },
                {
                  name: "Conclusión",
                  lessons: [{ title: "Conclusion", duration: "0:17" }],
                },
              ],
            },
            HD04: {
              library: { name: "Recursos Humanos", skuPrefix: "R" },
              subcategory: { name: "Habilidades directivas", skuPrefix: "HD" },
              title: "Inteligencia emocional para la gestión de conflictos",
              slug: "inteligencia-emocional-gestion-de-conflictos",
              thumbnail: ThumbnailHD04,
              identifier: { prefix: "R-HD-", courseNumber: "04" },
              duration: 15,
              description: [
                "Este curso está diseñado para líderes de equipo, gerentes y supervisores, y tiene como objetivo dar a conocer  la importancia de utilizar la Inteligencia Emocional para gestionar los conflictos en las organizaciones.",
                "Para comenzar, los usuarios podrán autoevaluar su forma de gestionar los conflictos, después aprenderán qué es la Inteligencia Emocional, cuáles son los dominios que la conforman, así como estrategias que les ayudarán a solucionar y prevenir los conflictos laborales. A través de casos de estudio con escenarios reales, podrán  reforzar y poner en práctica los conocimientos adquiridos.",
              ],
              topics: [
                "La inteligencia emocional en el trabajo",
                "Los dominios de la inteligencia emocional",
                "Autoconocimiento",
                "Autogestión",
                "Conciencia social",
                "Gestión de las relaciones",
                "Estrategias para solucionar conflictos",
                "Acuerdos justos y sostenibles",
              ],
              features: [
                { name: "Texto + Locucion", qt: 1, ICON: IcontxtLocucion },
                { name: "Autoevaluación", qt: 1, ICON: Iconautoeval },
                { name: "Video de Introducción", qt: 0, ICON: Iconvideo },
                { name: "Interactividades", qt: 0, ICON: Iconinteract },
                { name: "Cuestionario", qt: 3, ICON: Iconcuestionario },
              ],
              modules: [
                {
                  name: "Inteligencia emocional para la gestión de conflictos",
                  lessons: [],
                },
                {
                  name: "Autoevaluación",
                  lessons: [
                    { title: "Introducción a la autoevaluación", duration: "0:43" },
                    { title: "Autoevaluación de inteligencia emocional", duration: "2:17" },
                  ],
                },
                {
                  name: "¿Qué es la inteligencia emocional?",
                  lessons: [
                    { title: "¿Qué es la inteligencia emocional?", duration: "0:10" },
                    { title: "La inteligencia emocional", duration: "0:13" },
                    { title: "Introducción a escenario 1", duration: "0:10" },
                    { title: "IE en el trabajo", duration: "0:39" },
                    { title: "IE: Los 4 dominios", duration: "0:39" },
                    { title: "Introducción de interactividad 1", duration: "0:25" },
                    { title: "Pregunta 1", duration: "1:10" },
                    { title: "Pregunta 2", duration: "1:25" },
                    { title: "Estrategias para solucionar conflictos 1", duration: "2:07" },
                    { title: "Estrategias para solucionar conflictos 2", duration: "0:10" },
                    { title: "Introducción de interactividad 2", duration: "1:00" },
                    { title: "Pregunta 1", duration: "1:10" },
                    { title: "Pregunta 2", duration: "1:10" },
                    { title: "Mantener objetivos claros 1", duration: "0:40" },
                    { title: "Mantener objetivos claros 2", duration: "0:30" },
                    { title: "Introducción a escenario 2", duration: "0:10" },
                    { title: "Acuerdos justos y sostenibles", duration: "0:38" },
                    { title: "Introducción de interactividad 3", duration: "1:00" },
                    { title: "Pregunta 1", duration: "1:10" },
                    { title: "Pregunta 2", duration: "1:10" },
                    { title: "Pregunta 3", duration: "1:10" },
                    { title: "Pregunta 4", duration: "1:10" },
                  ],
                },
                {
                  name: "Conclusión",
                  lessons: [{ title: "Conclusion", duration: "0:17" }],
                },
              ],
            },
            HD05: {
              library: { name: "Recursos Humanos", skuPrefix: "R" },
              subcategory: { name: "Habilidades directivas", skuPrefix: "HD" },
              title: "Gestión del Tiempo",
              slug: "gestion-del-tiempo",
              thumbnail: ThumbnailHD04,
              identifier: { prefix: "R-HD-", courseNumber: "05" },
              duration: 12,
              description: [
                "Este curso está dirigido a supervisores, gerentes y líderes de equipo que busquen mejorar la forma en que gestionan el tiempo. Los estudiantes conocerán qué es la gestión del tiempo, sus beneficios, y los efectos negativos de una mala gestión.",
                "Asimismo, conocerán cómo desarrollar un proceso de planeación efectivo, así como diferentes estrategias para optimizarlo y lograr un equilibrio entre su vida profesional y familiar.",
                "A través de cuestionarios y ejercicios interactivos los usuarios podrán reforzar el conocimiento adquirido.",
              ],
              topics: [
                "Definición y beneficios",
                "Matriz de organización del tiempo",
                "¿Cómo organizarte?",
                "Estrategias y recomendaciones",
                "Equilibrio en la vida profesional y familiar",
              ],
              features: [
                { name: "Texto + Locucion", qt: 1, ICON: IcontxtLocucion },
                { name: "Autoevaluación", qt: 1, ICON: Iconautoeval },
                { name: "Video de Introducción", qt: 1, ICON: Iconvideo },
                { name: "Interactividades", qt: 2, ICON: Iconinteract },
                { name: "Cuestionario", qt: 1, ICON: Iconcuestionario },
              ],
              modules: [
                {
                  name: "Gestión del tiempo",
                  lessons: [{ title: "Introducción", duration: "0:43" }],
                },
                {
                  name: "Autoevaluación",
                  lessons: [
                    { title: "Introducción a la autoevaluación", duration: "2:17" },
                    { title: "Autoevaluación de gestión del tiempo", duration: "0:10" },
                  ],
                },
                {
                  name: "¿Cómo gestionar el tiempo?",
                  lessons: [
                    { title: "Caso de estudio: Conoce a Sam", duration: "0:10" },
                    { title: "Objetivos y tareas", duration: "0:39" },
                    { title: "¿Cómo priorizar las tareas?", duration: "0:39" },
                    { title: "Introducción de interactividad 1", duration: "0:25" },
                    { title: "Prioridades", duration: "1:10" },
                    { title: "¿Cómo organizarte?", duration: "1:25" },
                    { title: "Introducción de interactividad 2", duration: "2:07" },
                    { title: "Organízate", duration: "0:10" },
                    { title: "Recomendaciones para gestionar tu tiempo", duration: "1:00" },
                    { title: "Introducción de interactividad 3", duration: "1:10" },
                    { title: "Pregunta 1", duration: "1:10" },
                    { title: "Pregunta 2", duration: "1:10" },
                    { title: "Ordena los pasos", duration: "0:40" },
                  ],
                },
                {
                  name: "Conclusión",
                  lessons: [{ title: "Conclusion", duration: "0:17" }],
                },
              ],
            },
            HD06: {
              library: { name: "Recursos Humanos", skuPrefix: "R" },
              subcategory: { name: "Habilidades directivas", skuPrefix: "HD" },
              title: "Evaluación del Desempeño",
              slug: "evaluacion-del-desempeño",
              thumbnail: ThumbnailHD04,
              identifier: { prefix: "R-HD-", courseNumber: "06" },
              duration: 20,
              description: [
                "En este curso dirigido a supervisores, gerentes y líderes de equipo, los estudiantes conocerán el objetivo de las evaluaciones de desempeño y sus beneficios para los trabajadores y la organización en general.",
                "Asimismo, conocerán algunos de los modelos más utilizados en la actualidad, así como la metodología para implementar el modelo más conveniente para su organización.",
                "A través de cuestionarios y ejercicios interactivos, los usuarios podrán poner en práctica lo aprendido y reforzar sus conocimientos",
              ],
              topics: ["Evaluación del desempeño", "¿Quiénes son los responsables?", "Modelos de evaluación del desempeño", "Metodología de implementación "],
              features: [
                { name: "Texto + Locucion", qt: 1, ICON: IcontxtLocucion },
                { name: "Autoevaluación", qt: 0, ICON: Iconautoeval },
                { name: "Video de Introducción", qt: 1, ICON: Iconvideo },
                { name: "Interactividades", qt: 1, ICON: Iconinteract },
                { name: "Cuestionario", qt: 3, ICON: Iconcuestionario },
              ],
              modules: [
                {
                  name: "Evaluación del Desempeño",
                  lessons: [
                    { title: "Introducción", duration: "0:43" },
                    { title: "¿Qué es la evaluación de desempeño?", duration: "2:17" },
                    { title: "Introducción de interactividad 1", duration: "0:10" },
                    { title: "Pregunta 1", duration: "1:10" },
                    { title: "Pregunta 2", duration: "1:10" },
                    { title: "Pregunta 3", duration: "1:10" },
                  ],
                },
                {
                  name: "Responsables",
                  lessons: [
                    { title: "Supervisores", duration: "0:13" },
                    { title: "Autoevaluación", duration: "0:10" },
                    { title: "Colaboradores y subordinados", duration: "0:39" },
                    { title: "Recursos humanos y comisión de evaluación", duration: "0:39" },
                    { title: "Evaluación 360°", duration: "0:25" },
                    { title: "Evaluación 360° cont.", duration: "1:10" },
                    { title: "Introducción de interactividad 2", duration: "0:10" },
                    { title: "Pregunta 1", duration: "1:10" },
                    { title: "Pregunta 2", duration: "1:10" },
                    { title: "Pregunta 3", duration: "1:10" },
                  ],
                },
                {
                  name: "Modelos de evaluación del desempeño",
                  lessons: [
                    { title: "¿Cuáles son los modelos?", duration: "2:07" },
                    { title: "Evaluación por coste-beneficio ", duration: "0:10" },
                    { title: "Evaluación por incidentes críticos ", duration: "1:00" },
                    { title: "Evaluación por objetivos 1", duration: "1:10" },
                    { title: "Evaluación por objetivos 2", duration: "1:10" },
                    { title: "Elección forzosa 1", duration: "1:10" },
                    { title: "Elección forzosa 2", duration: "1:10" },
                    { title: "Elección forzosa 3", duration: "1:10" },
                    { title: "Con base en competencias laborales", duration: "1:10" },
                    { title: "Competencias laborales 1", duration: "0:30" },
                    { title: "Competencias laborales 2", duration: "0:40" },
                    { title: "Competencias laborales 3", duration: "0:28" },
                    { title: "Introducción de interactividad 3", duration: "0:40" },
                    { title: "Pregunta 1", duration: "1:10" },
                    { title: "Pregunta 2", duration: "1:10" },
                    { title: "Pregunta 3", duration: "1:10" },
                    { title: "Pregunta 4", duration: "1:10" },
                    { title: "Pregunta 5", duration: "1:10" },
                    { title: "Pregunta 6", duration: "1:10" },
                  ],
                },
                {
                  name: "Metodología de implementación",
                  lessons: [
                    { title: "¿Cómo implementar la evaluación? 1", duration: "0:40" },
                    { title: "¿Cómo implementar la evaluación? 2", duration: "0:30" },
                    { title: "¿Cómo implementar la evaluación? 3", duration: "0:32" },
                    { title: "Introducción de interactividad 4", duration: "0:10" },
                    { title: "Implementación", duration: "1:00" },
                  ],
                },
                {
                  name: "Conclusión",
                  lessons: [{ title: "Conclusion", duration: "0:17" }],
                },
              ],
            },
            HD07: {
              library: { name: "Recursos Humanos", skuPrefix: "R" },
              subcategory: { name: "Habilidades directivas", skuPrefix: "HD" },
              title: "¿Cómo dar retroalimentación?",
              slug: "como-dar-retroalimentacion",
              thumbnail: ThumbnailHD04,
              identifier: { prefix: "R-HD-", courseNumber: "07" },
              duration: 15,
              description: [
                "En este curso dirigido a supervisores, gerentes y líderes de equipo, los estudiantes conocerán los beneficios de la retroalimentación (feedback) como parte fundamental de un proceso de desarrollo continuo, tanto a nivel personal como organizacional.",
                "También comprenderán la necesidad de transformar la percepción de la retroalimentación y las evaluaciones de desempeño, de un evento incómodo que provoca incertidumbre y ansiedad, por uno que nos ofrece la posibilidad de crecer y mejorar.",
                "Se presentan las características de la retroalimentación positiva y negativa, así como estrategias y recomendaciones sobre cuándo y cómo proporcionar cada una.",
                "Para reforzar el aprendizaje, los estudiantes analizarán situaciones comunes que ocurren en los centros de trabajo, a través de escenarios e interactividades. ",
              ],
              topics: [
                "Beneficios de la retroalimentación",
                "Impactos negativos de una mala retroalimentación",
                "¿Cuándo dar retroalimentación?",
                "Tipos de retroalimentación",
                "Características de la retroalimentación efectiva",
                "Procedimiento para dar retroalimentación",
              ],
              features: [
                { name: "Texto + Locucion", qt: 1, ICON: IcontxtLocucion },
                { name: "Autoevaluación", qt: 0, ICON: Iconautoeval },
                { name: "Video de Introducción", qt: 1, ICON: Iconvideo },
                { name: "Interactividades", qt: 0, ICON: Iconinteract },
                { name: "Cuestionario", qt: 4, ICON: Iconcuestionario },
              ],
              modules: [
                {
                  name: "¿Cómo dar retroalimentación?",
                  lessons: [
                    { title: "Introducción", duration: "0:43" },
                    { title: "¿Cuándo se proporciona retroalimentación?", duration: "2:17" },
                    { title: "Impacto negativo", duration: "0:10" },
                    { title: "Beneficios de la retroalimentación 1", duration: "1:10" },
                    { title: "Beneficios de la retroalimentación 2", duration: "1:10" },
                    { title: "Tipos de retroalimentación", duration: "1:10" },
                    { title: "Introducción de interactividad 1", duration: "1:10" },
                    { title: "Pregunta 1", duration: "1:10" },
                    { title: "Pregunta 2", duration: "1:10" },
                    { title: "Pregunta 3", duration: "1:10" },
                    { title: "Pregunta 4", duration: "1:10" },
                  ],
                },
                {
                  name: "Características de la retroalimentación",
                  lessons: [
                    { title: "Objetiva", duration: "0:10" },
                    { title: "Específica y factual", duration: "0:39" },
                    { title: "Prioridades establecidas", duration: "0:39" },
                    { title: "Introducción de interactividad 2", duration: "0:25" },
                    { title: "Escenario 1", duration: "1:10" },
                    { title: "Escenario 2", duration: "1:10" },
                    { title: "Escenario 3", duration: "1:10" },
                  ],
                },
                {
                  name: "Procedimiento para dar retroalimentación",
                  lessons: [
                    { title: "Aprende a indagar", duration: "1:10" },
                    { title: "Dar seguimiento", duration: "0:10" },
                    { title: "Solicita retroalimentación", duration: "2:07" },
                    { title: "Introducción de interactividad 3", duration: "0:10" },
                    { title: "Pregunta 1", duration: "1:10" },
                    { title: "Pregunta 2", duration: "1:10" },
                    { title: "Pregunta 3", duration: "1:10" },
                    { title: "Pregunta 4", duration: "1:10" },
                  ],
                },
                {
                  name: "Conclusión",
                  lessons: [{ title: "Conclusion", duration: "0:17" }],
                },
              ],
            },
          },
        },
        HT: {
          name: "Habilidades Tecnológicas",
          slug: "habilidades-tecnologicas",
          curses: {
            TT101: { name: "Mejores prácticas para el teletrabajo", slug: "mejores-practicas-para-el-teletrabajo" },
            TT201: { name: "Teletrabajo Supervisores", slug: "teletrabajo-supervisores" },
          },
        },
        J: {
          name: "Jurídico",
          slug: "juridico",
          curses: {
            N35: { name: "Nom35", slug: "nom35" },
            VL101: { name: "Prevención de violencia laboral y acoso sexual", slug: "prevencion-de-violencia-laboral-y-acoso-sexual" },
            VL201: {
              name: "Prevención, atención y erradicación de la violencia laboral para supervisores.",
              slug: "prevencion-atencion-y-erradicacion-de-la-violencia-laboral",
            },
          },
        },
      },
    },
    S: {
      name: "Seguridad de la información",
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
};
export default DataCourseLibrarie;
