import Link from 'next/dist/client/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { CarouselDATA } from './Carousel.constanst'

function Carousel({ SlidesData }: { SlidesData: CarouselDATA[] }): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const trackElement = trackRef.current

    if (trackElement) {
      trackElement.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  return (
    /* Wrapper contenedor carusel */
    <section className="carousel relative w-full overflow-hidden">
      <div ref={trackRef} className="carousel__track flex h-full transition-all duration-500">
        {SlidesData.map((banner, i) => (
          /* Carrusel slide */
          <div key={i} className="w-full flex-grow-0 flex-shrink-0 basis-full ">
            <div className="pb-8 md:grid md:grid-cols-2 landscape:grid landscape:grid-cols-2">
              {/* cover images  */}
              <div className="-z-10 md:col-span-2 md:row-start-1 md:col-start-1 landscape:col-span-2 landscape:row-start-1 landscape:col-start-1 flex justify-end">
                <Image alt={banner.alt} loading="lazy" objectFit="fill" src={banner.src} />
              </div>
              {/* cover text */}
              <div className="md:col-span-2 md:col-start-1 md:row-start-1 landscape:col-span-2 landscape:col-start-1 landscape:row-start-1 mdc-ui-container -mt-5 md:mt-0 md:self-center landscape:mt-[68px] md:landscape:mt-0 ">
                <h2 className=" portrait:text-center md:portrait:text-left md:text-left text-6xl md:text-7xl xl:text-9xl leading-[60px] text-accent font-extrabold md:pb-8">
                  <small className="text-brandWhite text-2xl md:text-3xl xl:text-5xl leading-normal flex-1">
                    {banner.content.title.small}
                  </small>
                  <br />
                  {banner.content.title.highlight}
                </h2>
                <div className="my-4 pb-4 w-full sm:landscape:w-1/2 md:w-2/4">
                  <p className="text-center md:text-left xl:text-xl max-w-prose ">
                    {banner.content.text}
                  </p>
                </div>
                <div className="flex justify-around md:justify-start sm:landscape:w-1/2">
                  <div className="">
                    <Link href="/libreria">
                      <a className=" flex justify-center items-center uppercase rounded-full bg-secondary px-8 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-[.98] hover:contrast-150 transition-all  ">
                        {banner.cta}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {SlidesData.map((_, i) => (
          <button
            key={i}
            className={`pagination__button w-3 h-3 rounded-full bg-red-500 ${
              currentIndex === i ? 'pagination__button--active' : ''
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default Carousel
