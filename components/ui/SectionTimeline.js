import Image from "next/image";
import TimelineCheckmark from "./TimelineCheckmark";
import ImgLaptop from "../../public/laptop.jpg";
import ImgTrofeo from "../../public/trofeo.png";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const ColorSchema = Object.freeze({
  dark: Symbol("dark"),
  light: Symbol("light"),
});

const articlesData = [
  {
    title: "Cursos Multipremiados",
    excerpt:
      "Nuestros productos han tenido reconocimiento internacional ganando más de 40 premios como MarCom Awards, Davey Awards, W³ Awards, Golden Bridge Awards, Summit Creative Awards, Network Products Guide IT World Awards, Omni Awards, Interactive Media Awards.",
    link: {
      slug: "Casos-de-exito",
      text: "Casos de exito",
    },
    MainImage: {
      src: "",
      alt: "",
    },
    sideImage: {
      src: "",
      alt: "",
    },
    colorSufix: "[#00bec6]",
    layoutLeft: false,
    ColorSchemaDark: false,
  },
];

function SectionTimeline({
  ColorSchemaDark = false,
  layoutLeft = false,
  colorSufix = "secondary",
  MainImage = { src: ImgLaptop, alt: "text alt" },
  link = { slug: "#", text: "Dommy route" },
  excerpt = "Lorem ipsum dolor sit amet",
  title = "title",
  sideImage = { src: "", alt: "" },
}) {
  const [isInViewport, setisInViewport] = useState(false);
  const articleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const articleCurr = articleRef.current;
      const rect = articleCurr.getBoundingClientRect();
      const rectY = articleCurr.getBoundingClientRect().y;
      const condition =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      setisInViewport(condition || rectY <= 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderlayout = layoutLeft ? (
    <section className={`py-4 md:py-8 ${ColorSchemaDark ? "" : "bg-white text-gray-900"}`}>
      <div ref={articleRef} className='mdc-ui-container flex flex-col-reverse gap-4 md:gap-8 md:flex-row '>
        <div className={`md:w-1/2 flex flex-col md:items-end md:justify-center py-4 ${isInViewport ? "animate-FadeInSlidein" : "animate-FadeOutSlideout"}   `}>
          <h2 className={`font-bold text-4xl mb-8 capitalize text-${colorSufix}`}>{title}</h2>
          <p className='max-w-prose md:text-right mb-8'>{excerpt}</p>
          <Link href={link.slug}>
            <a
              className={`place-self-start md:place-self-auto py-2 px-10 bg-${colorSufix} rounded-full text-bg_primary uppercase hover:bg-${colorSufix} hover:scale-[.98] hover:contrast-150 transition-all`}
            >
              <span className={` ${ColorSchemaDark ? "text-gray-900" : "text-white"}  `}>{link.text}</span>
            </a>
          </Link>
        </div>
        <TimelineCheckmark bgColor={`bg-${colorSufix} `} />
        <div className={`md:w-1/2 opacity-0 ${isInViewport ? "animDelay animate-FadeInSlidein " : " animate-FadeOutSlideout "}`}>
          <Image src={MainImage.src} alt={MainImage.alt}></Image>
        </div>
      </div>
    </section>
  ) : (
    <section className={`py-4 md:py-8 ${ColorSchemaDark ? "" : "bg-white text-gray-900"}`}>
      <div
        ref={articleRef}
        className={`mdc-ui-container flex flex-col gap-4 md:gap-8 md:flex-row ${isInViewport ? "animate-FadeInSlidein" : "animate-FadeOutSlideout"} `}
      >
        <div className=' md:w-1/2 relative'>
          <Image src={MainImage.src} alt={MainImage.alt}></Image>
          {sideImage.src ? (
            <div className='absolute top-[7%] left-[15%] w-[25%]'>
              <Image src={sideImage.src} alt={sideImage.alt}></Image>
            </div>
          ) : null}
        </div>
        <TimelineCheckmark bgColor={`bg-${colorSufix} `} />
        <div className='md:w-1/2 flex flex-col md:items-start md:justify-center'>
          <h2 className={`font-bold text-4xl mb-8 capitalize text-${colorSufix} `}>{title}</h2>
          <p className='max-w-prose md:text-left mb-8'>{excerpt}</p>
          <Link href={link.slug}>
            <a
              className={`place-self-start py-2 px-10 bg-${colorSufix}  rounded-full text-white uppercase hover:bg-${colorSufix} hover:scale-[.98] hover:contrast-150 transition-all`}
            >
              <span className={` ${ColorSchemaDark ? "text-gray-900" : "text-white"}  `}>{link.text}</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
  return renderlayout;
}

export default SectionTimeline;
