import Image from 'next/image'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Link from 'next/link'

import ImgBanner from '../../public/banner.jpg'

function BannerParallax() {
  return (
    <ParallaxBanner className="relative w-full xl:h-[800px] aspect-square lg:aspect-video">
      <ParallaxBannerLayer speed={-20}>
        <Image alt="employee" layout="fill" objectFit="cover" src={ImgBanner} />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <div className="absolute flex justify-end h-full w-full xl:m-auto 2xl:w-[90%]">
          <div className="flex justify-end relative top-0 items-center xl:items-start xl:top-32 w-1/2 md:w-1/2 xl:w-1/2 pr-5 md:p-5 lg:p-10 ">
            <div className="text-right">
              <h1 className="text-xl md:text-3xl">Aprende a gamificar tus </h1>
              <h2 className="font-extrabold text-4xl md:text-8xl text-accent ">Cursos</h2>
              <p className=" text-lg md:text-xl ">y transforma la forma en que tus</p>
              <span className=" md:text-xl ">estudiantes aprenden.</span>
              <Link href="/blog/posts/aprender-jugando">
                <div className="flex justify-end rounded-lg pt-6 hover:cursor-pointer hover:scale-[.98] hover:contrast-150 transition-all uppercase">
                  <div className="flex rounded-full bg-secondary px-4 py-2 md:px-6 md:py-4 align-middle leading-none">
                    <span>Saber más</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  )
}

export default BannerParallax
