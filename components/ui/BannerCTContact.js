import Image from "next/image";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Link from "next/link";

/**
 *
 * @param {{imgBanner:string, txtalt:string}} param0
 * @returns
 */
function BannerCTContact({ imgBanner, txtalt }) {
  return (
    <ParallaxBanner className='relative w-full xl:h-[800px] aspect-square lg:aspect-video'>
      <ParallaxBannerLayer speed={-25}>
        <Image src={imgBanner} objectFit='cover' draggable='false' layout='fill' alt={txtalt}></Image>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <div className='absolute flex justify-end h-full w-full xl:m-auto 2xl:w-[90%]'>
          <div className='flex justify-end relative top-0 items-center xl:items-start xl:top-32 w-3/4 md:w-1/2 xl:w-1/3 p-5 lg:p-10 '>
            <div className='text-right'>
              <h2 className='text-xl md:text-4xl'>Agenda una</h2>
              <h2 className='font-extrabold text-4xl md:text-7xl text-brandWhite '>Reunión</h2>
              <Link href='contactanos'>
                <div className='flex justify-end rounded-lg pt-6 hover:cursor-pointer hover:scale-[.98]  transition-all'>
                  <a className='flex rounded-full bg-accent text-gray-900 px-4 py-2 md:px-12 md:py-4 align-middle leading-none uppercase font-bold '>
                    <span className='select-none'>Contactanos</span>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}

export default BannerCTContact;
