import Image from "next/image";
import ImgBanner from "../../public/banner.jpg";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Link from "next/link";

function BannerParallax() {
  return (
    <ParallaxBanner className='relative w-full xl:h-[800px] aspect-square lg:aspect-video'>
      <ParallaxBannerLayer speed={-20}>
        <Image src={ImgBanner} objectFit='cover' layout='fill' alt='employee'></Image>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <div className='absolute flex justify-end h-full w-full xl:m-auto 2xl:w-[90%]'>
          <div className='flex justify-end relative top-0 items-center xl:items-start xl:top-32 w-3/4 md:w-1/2 xl:w-1/3 p-5 lg:p-10 '>
            <div className='text-right'>
              <h1 className='text-xl md:text-4xl'>Cursos a partir de</h1>
              <h2 className='font-extrabold text-4xl md:text-7xl text-accent '>$60 pesos</h2>
              <p className='font-extrabold text-3xl md:text-5xl '>por usuario</p>
              <span className='font-light md:text-lg '>- POR CADA CURSO -</span>
              <Link href='libreria#precios'>
                <div className='flex justify-end rounded-lg pt-6 hover:cursor-pointer hover:scale-[.98] hover:contrast-150 transition-all uppercase'>
                  <div className='flex rounded-full bg-secondary px-4 py-2 md:px-6 md:py-4 align-middle leading-none'>
                    <span>Planes y precios</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}

export default BannerParallax;
