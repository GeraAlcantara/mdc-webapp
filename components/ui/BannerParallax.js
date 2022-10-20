import Image from "next/image";
import ImgBanner from "../../public/banner.jpg";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Link from "next/link";

function BannerParallax() {
  return (
    <ParallaxBanner className='h-[800px] w-full relative aspect-video'>
      <ParallaxBannerLayer image='/banner.jpg' speed={-20}></ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <div className='absolute flex justify-end w-full'>
          <div className='flex w-1/3 p-10 '>
            <div className='text-right'>
              <h1 className='text-4xl'>Cursos a partir de</h1>
              <h2 className='font-extrabold text-7xl text-accent '>$60 pesos</h2>
              <p className='font-extrabold text-5xl '>por usuario</p>
              <span className='font-light text-lg '>-POR CADA CURSO-</span>
              <Link href={"#"}>
                <a className='flex justify-center items-center rounded-lg bg-secondary px-4 py-2 md:px-12 md:py-2 mx-2 align-middle leading-none'>
                  Planes y precios
                </a>
              </Link>
            </div>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}

export default BannerParallax;
