import Link from 'next/dist/client/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/* import swipe svg from svg componets */
import SwipeIcon from '../svgs/swipe.svg'

import { CarouselDATA } from './Carousel.constanst'

// [0123[4][01234][0]1234]

function Carousel({ SlidesData }: { SlidesData: CarouselDATA[] }): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(1)
  const [initialTouchPosition, setInitialTouchPosition] = useState<number | null>(null)
  const [currentTouchPosition, setCurrentTouchPosition] = useState<number | null>(null)

  const slides = [SlidesData[SlidesData.length - 1], ...SlidesData, SlidesData[0]]
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
        setTimeout(() => {
          setCurrentIndex(Math.max(0, currentIndex - 1))
        }, 300)
      } else if (distance < 0) {
        setTimeout(() => {
          setCurrentIndex(Math.min(slides.length - 1, currentIndex + 1))
        }, 300)
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
    const trackElement = trackRef.current

    if (!trackElement) {
      return
    }

    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        trackElement.classList.add('transition-none')
        setCurrentIndex(1)
      }, 490)
    } else if (currentIndex === 0) {
      setTimeout(() => {
        trackElement.classList.add('transition-none')
        setCurrentIndex(slides.length - 2)
      }, 490)
    } else if (currentIndex !== 0 && currentIndex !== slides.length - 1) {
      setTimeout(() => {
        trackElement.classList.remove('transition-none')
      }, 490)
    }
  }, [currentIndex, slides.length])

  useEffect(() => {
    const maxSlidesLength = slides.length
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((pevidx) => (pevidx + 1) % maxSlidesLength)
    }, 5000) // Change this value to adjust the autoplay speed (in milliseconds)

    return () => clearInterval(autoplayInterval)
  }, [currentIndex, slides.length])

  return (
    /* Wrapper contenedor carusel */
    <section className="relative w-full landscape:h-screen md:h-full overflow-hidden ">
      <div
        ref={trackRef}
        className={`flex touch-pan-y transition-all duration-500 h-full `}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        {slides.map((banner, i) => (
          /* Carrusel slide */
          <div key={i} className="w-full flex-grow-0 flex-shrink-0 basis-full relative">
            <div className=" w-full h-full flex flex-col sm:landscape:flex-row md:mdc-ui-container items-center  ">
              {/* cover images  */}
              <div className="-z-10 landscape:absolute sm:landscape:inset-0 lg:absolute max-h-screen w-full flex justify-end lg:inset-0">
                <Image
                  priority
                  alt={banner.alt}
                  objectFit="cover"
                  objectPosition="top"
                  src={banner.src}
                />
              </div>
              {/* cover text */}
              <div className="pb-6 md:pb-16 sm:landscape:pl-6 lg:landscape:pl-0 ">
                <h2 className=" portrait:text-center md:text-left text-6xl md:text-7xl xl:text-9xl leading-[60px] text-accent font-extrabold md:pb-8">
                  <span className="text-brandWhite text-xl md:text-3xl xl:text-5xl leading-normal flex-1">
                    {banner.content.title.small}
                  </span>
                  <br />
                  {banner.content.title.highlight}
                </h2>
                <div className="my-4 pb-4 w-full sm:landscape:w-1/2 md:w-2/4 portrait:m-auto">
                  <p className="text-center sm:landscape:text-left portrait:text-center md:text-left xl:text-xl max-w-prose ">
                    {banner.content.text}
                  </p>
                </div>
                <div className="flex justify-around sm:landscape:justify-start md:justify-center sm:landscape:w-1/2">
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
        <div className="w-8 h-8 mb-2 landscape:hidden ">
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
                  currentIndex === i + 1 ? 'bg-brightGreen ' : 'border-brandWhite border-2 '
                }`}
                onClick={() => setCurrentIndex(i + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel
