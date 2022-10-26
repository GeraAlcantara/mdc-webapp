import ImgLaptop from "../../public/laptop.jpg";
import ImgTrofeo from "../../public/trofeo.png";
import ImgTimeline2 from "../../public/timeline2.jpg";
import ImgTimeline3 from "../../public/timeline3.jpg";
import ImgTimeline4 from "../../public/timeline4.jpg";

export const claseNames = () => {
  return (
    <>
      <div className='bg-[#00bec6]  text-[#00bec6]'></div>
      <div className='bg-[#4cff91]  text-[#4cff91]'></div>
      <div className='bg-[#02e239]  text-[#02e239]'></div>
    </>
  );
};

export const SectionsData = [
  {
    title: "Cursos Multipremiados",
    excerpt:
      "En México DC lo visual es tan importante como el contenido, diseñamos cursos con video y animaciones personalizadas para impulsar el aprendizaje. Este tipo de factores generan entusiasmo y aumenta el interes en sus empleados a la hora de tomar un curso.",
    link: {
      slug: "casos-de-exito",
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
    colorClass: "secondary",
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
    colorClass: "[#00bec6]",
    layoutLeft: true,
    ColorSchemaDark: true,
  },
  {
    title: "Mobile Ready",
    excerpt:
      "Creamos cursos fácilmente accesibles en tabletas o dispositivos móviles. Estos materiales no solo son aptos para dispositivos móviles. Cada aspecto de la capacitación se diseñó cuidadosamente, desde el contenido hasta la pantalla, para proporcionar los materiales más efectivos y de fácil acceso.",
    link: {
      slug: "catalogos-de-cursos",
      text: "Catalogos de cursos",
    },
    MainImage: {
      src: ImgTimeline3,
      alt: "mano tocando una pantalla con el indice",
    },
    colorClass: "[#4cff91]",
    layoutLeft: false,
    ColorSchemaDark: true,
  },
  {
    title: "Plataforma LMS Intuitiva",
    excerpt:
      "Nuestros productos han tenido reconocimiento internacional ganando más de 40 premios como MarCom Awards, Davey Awards, W³ Awards, Golden Bridge Awards, Summit Creative Awards, Network Products Guide IT World Awards, Omni Awards, Interactive Media Awards.",
    link: {
      slug: "planes-precios",
      text: "Planes y precios",
    },
    MainImage: {
      src: ImgTimeline4,
      alt: "Hombre pensativo viendo graficas de datos en la pantalla de su computadora",
    },
    colorClass: "[#02e239]",
    layoutLeft: true,
    ColorSchemaDark: true,
  },
];
