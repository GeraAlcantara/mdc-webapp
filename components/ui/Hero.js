import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import imgHero1 from "../../public/hero1.png";
import imgHero2 from "../../public/hero2.png";
import imgHero3 from "../../public/hero3.png";
import imgHero4 from "../../public/hero4.png";

/* TODO: #1 
 Find a better way to handle the source of the randomze images array
*/
const initimages = [imgHero1, imgHero2, imgHero3, imgHero4];
const initImagesData = [
  {
    id: "hero1",
    alt: "alt text image 1",
    src: imgHero1,
  },
  {
    id: "hero2",
    alt: "alt text image 2",
    src: imgHero2,
  },
  {
    id: "hero3",
    alt: "alt text image 3",
    src: imgHero3,
  },
  {
    id: "hero4",
    alt: "alt text image 4",
    src: imgHero4,
  },
];

function Hero() {
  /* obj logic */
  const [imageData, setImageData] = useState(initImagesData);
  const [currImgData, setcurrImgData] = useState(imageData[0]);

  const updateImageData = useMemo(() => imageData[Math.floor(Math.random() * imageData.length)], [imageData]);

  useEffect(() => {
    setcurrImgData(updateImageData);
  }, [currImgData, updateImageData]);

  return (
    <section className='pb-8 md:grid md:grid-cols-2 landscape:grid landscape:grid-cols-2 max-h-screen'>
      {/* cover images  */}
      <div className='-z-10 md:col-span-2 md:row-start-1 md:col-start-1 landscape:col-span-2 landscape:row-start-1 landscape:col-start-1 flex justify-end'>
        <Image src={currImgData.src} alt={currImgData.alt} placeholder='blur' loading='lazy' objectFit='fill' />
      </div>
      {/* cover text */}
      <div className='md:col-span-2 md:col-start-1 md:row-start-1 landscape:col-span-2 landscape:col-start-1 landscape:row-start-1 mdc-ui-container mt-[70px] md:mt-0 md:self-center '>
        <div>
          <h1 className=' text-6xl md:text-7xl xl:text-9xl leading-[60px] text-accent font-extrabold md:pb-8'>
            <small className='text-white text-2xl md:text-4xl xl:text-6xl leading-normal flex-1'>Concientización de</small>
            <br></br>Seguridad{" "}
          </h1>
          <div className='my-4 pb-4 w-full sm:landscape:w-1/2 md:w-2/4'>
            <p>Sus empleados podrían ser el punto más debil en la infrestructura de seguridad en su empresa. !Hágalos más fuertes!</p>
          </div>
          <div className='flex justify-around md:justify-start sm:landscape:w-1/2'>
            <div className='flex justify-center items-center rounded-lg bg-secondary px-4 py-2 md:px-12 md:py-2 mx-2'>
              <Link href='soluciones'>
                <a className=' align-middle leading-none'>Soluciones</a>
              </Link>
            </div>
            <Link href='https://vimeo.com/425231198'>
              <a className='underline px-2 md:ml-8'>Vea Nuestro Demo Reel</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
