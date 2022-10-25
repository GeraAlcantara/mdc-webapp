import ImgLaptop from "../../public/laptop.jpg";
import ImgTrofeo from "../../public/trofeo.png";
import ImgTimeline2 from "../../public/timeline2.jpg";

export const SectionsData = [
  {
    title: "Cursos Multipremiados",
    excerpt:
      "En México DC lo visual es tan importante como el contenido, diseñamos cursos con video y animaciones personalizadas para impulsar el aprendizaje. Este tipo de factores generan entusiasmo y aumenta el interes en sus empleados a la hora de tomar un curso.",
    link: {
      slug: "Casos-de-exito",
      text: "Casos de exito",
    },
    MainImage: {
      src: ImgLaptop,
      alt: "Laptop abierta, en la pantalla se muestra un curso de capacitacion de México development center.",
    },
    sideImage: {
      src: ImgTrofeo,
      alt: "trofeo",
    },
    colorSufix: "secondary",
    layoutLeft: false,
    ColorSchemaDark: false,
  },
  {
    title: "Interactividad",
    excerpt:
      "Nuestros productos han tenido reconocimiento internacional ganando más de 40 premios como MarCom Awards, Davey Awards, W³ Awards, Golden Bridge Awards, Summit Creative Awards, Network Products Guide IT World Awards, Omni Awards, Interactive Media Awards.",
    link: {
      slug: "ver-demos",
      text: "Ver demos",
    },
    MainImage: {
      src: ImgTimeline2,
      alt: "chica frente a la pantalla de una laptop",
    },
    sideImage: {
      src: "",
      alt: "",
    },
    colorSufix: "[#00bec6]",
    layoutLeft: true,
    ColorSchemaDark: true,
  },
];
