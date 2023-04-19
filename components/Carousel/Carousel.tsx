import Link from 'next/dist/client/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/* import swipe svg from svg componets */
import SwipeIcon from '../svgs/swipe.svg'

import { CarouselDATA } from './Carousel.constanst'

function Carousel({ SlidesData }: { SlidesData: CarouselDATA[] }): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [initialTouchPosition, setInitialTouchPosition] = useState<number | null>(null)
  const [currentTouchPosition, setCurrentTouchPosition] = useState<number | null>(null)

  const trackRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setInitialTouchPosition(e.touches[0].clientX)
  }

  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    if (initialTouchPosition === null) {
      return
    }
    setCurrentTouchPosition(event.touches[0].clientX)
  }
  const handleTouchEnd = () => {
    if (initialTouchPosition === null || currentTouchPosition === null) {
      return
    }
    const distance = currentTouchPosition - initialTouchPosition
    const trackElement = trackRef.current

    if (trackElement) {
      if (distance > 0) {
        setCurrentIndex(Math.max(0, currentIndex - 1))
      } else if (distance < 0) {
        setCurrentIndex(Math.min(SlidesData.length - 1, currentIndex + 1))
      }
    }
    setInitialTouchPosition(null)
    setCurrentTouchPosition(null)
  }

  useEffect(() => {
    const trackElement = trackRef.current

    if (trackElement) {
      trackElement.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  useEffect(() => {
    const maxSlidesLength = SlidesData.length
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((pevidx) => (pevidx + 1) % maxSlidesLength)
    }, 5000) // Change this value to adjust the autoplay speed (in milliseconds)

    return () => clearInterval(autoplayInterval)
  }, [currentIndex, SlidesData.length])

  return (
    /* Wrapper contenedor carusel */
    <section className=" carousel relative w-full overflow-hidden ">
      <div
        ref={trackRef}
        className={`flex touch-pan-y transition-all duration-500   ${
          currentIndex === 0 ? 'md:transition-none' : ''
        }  `}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        {SlidesData.map((banner, i) => (
          /* Carrusel slide */
          <div key={i} className="w-full flex-grow-0 flex-shrink-0 basis-full ">
            <div className="pb-8 md:grid md:grid-cols-2 landscape:grid landscape:grid-cols-2">
              {/* cover images  */}
              <div className="-z-10 md:col-span-2 md:row-start-1 md:col-start-1 landscape:col-span-2 landscape:row-start-1 landscape:col-start-1 flex justify-end">
                <Image priority alt={banner.alt} objectFit="fill" src={banner.src} />
              </div>
              {/* cover text */}
              <div className="md:col-span-2 md:col-start-1 md:row-start-1 landscape:col-span-2 landscape:col-start-1 landscape:row-start-1 mdc-ui-container -mt-5 md:mt-0 md:self-center landscape:mt-[68px] md:landscape:mt-0 ">
                <h2 className=" portrait:text-center md:portrait:text-left md:text-left text-6xl md:text-7xl xl:text-9xl leading-[60px] text-accent font-extrabold md:pb-8">
                  <span className="text-brandWhite text-xl md:text-3xl xl:text-5xl leading-normal flex-1">
                    {banner.content.title.small}
                  </span>
                  <br />
                  {banner.content.title.highlight}
                </h2>
                <div className="my-4 pb-4 w-full sm:landscape:w-1/2 md:w-2/4">
                  <p className="text-center md:text-left xl:text-xl max-w-prose ">
                    {banner.content.text}
                  </p>
                </div>
                <div className="flex justify-around md:justify-start sm:landscape:w-1/2">
                  <Link href="/libreria">
                    <a className=" flex justify-center items-center uppercase rounded-full bg-secondary px-8 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-[.98] hover:contrast-150 transition-all  ">
                      {banner.cta}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center md:hidden">
        <div className="w-8 h-8 mb-2 ">
          <SwipeIcon className="text-white animate-swipeIcon h-full w-full origin-bottom rotate-[20deg] " />
        </div>
      </div>
      <div className="hidden md:block pagination absolute bottom-0 w-full h-10 lg:mb-6 2xl:mb-16">
        <div className=" flex justify-center">
          <div className="w-1/4 xl:w-1/12 flex justify-between">
            {SlidesData.map((_, i) => (
              <button
                key={i}
                className={`w-4 h-4 rounded-full  ${
                  currentIndex === i ? 'bg-brightGreen ' : 'border-brandWhite border-2 '
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel
