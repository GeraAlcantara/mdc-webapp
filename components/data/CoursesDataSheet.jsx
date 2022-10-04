import Iconinteract from "../svgs/interact.svg";
import Iconvideo from "../svgs/video.svg";
import IcontxtLocucion from "../svgs/txtLocucion.svg";
import Iconautoeval from "../svgs/autoeval.svg";
import Iconcuestionario from "../svgs/cuestionario.svg";

export const DataSheet = {
  library: { name: "Recursos Humanos", skuPrefix: "R" },
  subcategory: { name: "Habilidades directivas", skuPrefix: "HD" },
  title: "Liderazgo Efectivo",
  slug: "liderazgo-efectivo",
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
    { id: 1, name: "Texto + Locucion", qt: 1, ICON: IcontxtLocucion },
    { id: 2, name: "Autoevaluación", qt: 1, ICON: Iconautoeval },
    { id: 3, name: "Video de Introducción", qt: 1, ICON: Iconvideo },
    { id: 3, name: "Interactividades", qt: 2, ICON: Iconinteract },
  ],
};
