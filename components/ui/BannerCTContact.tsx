import Image, { StaticImageData } from 'next/image'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Link from 'next/link'

function BannerCTContact({ imgBanner, txtalt }: { imgBanner: StaticImageData; txtalt: string }) {
  return (
    <ParallaxBanner className="relative w-full xl:h-[800px] aspect-square lg:aspect-video">
      <div className="w-full h-full relative inset-0  filter mix-blend-overlay bg-black/50 z-[1] " />
      <ParallaxBannerLayer speed={-25}>
        <Image
          alt={txtalt}
          className="relative"
          draggable="false"
          layout="fill"
          objectFit="cover"
          src={imgBanner}
        />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <div className="absolute flex justify-end h-full w-full xl:m-auto 2xl:w-[90%] z-[2]">
          <div className="flex justify-end relative top-0 items-center xl:items-start xl:top-32 w-3/4 md:w-1/2 xl:w-1/3 p-5 lg:p-10 ">
            <div className="text-right ">
              <h2 className="text-xl md:text-4xl">Personaliza nuestra </h2>
              <h2 className="font-extrabold text-4xl md:text-7xl text-brandWhite ">librería</h2>
              <p className="xl:text-lg 2xl:text-xl">
                Todos nuestros cursos se pueden personalizar de acuerdo a los requerimientos y
                necesidades de tu empresa, ya sean textos, audios, imágenes o videos. Utiliza
                nuestros cursos como una plantilla y dinos qué necesitas agregar o editar para que
                cumplan tus objetivos y estándares.
              </p>
            </div>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  )
}

export default BannerCTContact
