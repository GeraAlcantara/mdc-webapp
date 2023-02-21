import Image from 'next/image'
import React, { useEffect, useState, useMemo } from 'react'

import imgHero1 from '../../public/hero1.png'
import imgHero2 from '../../public/hero2.png'
import imgHero3 from '../../public/hero3.png'
import imgHero4 from '../../public/hero4.png'

function Hero({ children }: { children: React.ReactNode }): JSX.Element {
  const initImagesData = [
    {
      id: 'hero1',
      alt: 'mujer con semblante positivo esta sonriendo ',
      src: imgHero1
    },
    {
      id: 'hero2',
      alt: 'hombre concentrado trabajando en su laptop',
      src: imgHero2
    },
    {
      id: 'hero3',
      alt: 'empleada joven sonriendo ',
      src: imgHero3
    },
    {
      id: 'hero4',
      alt: 'mujer trigeña sonriendo en su area de trabajo',
      src: imgHero4
    }
  ]
  const [imageData, setImageData] = useState(initImagesData)
  const [currImgData, setcurrImgData] = useState(imageData[0])

  const updateImageData = useMemo(
    () => imageData[Math.floor(Math.random() * imageData.length)],
    [imageData]
  )

  useEffect(() => {
    setcurrImgData(updateImageData)

    return () => {
      setcurrImgData(updateImageData)
    }
  }, [updateImageData])

  return (
    <section className="pb-8 md:grid md:grid-cols-2 landscape:grid landscape:grid-cols-2 ">
      {/* cover images  */}
      <div className="-z-10 md:col-span-2 md:row-start-1 md:col-start-1 landscape:col-span-2 landscape:row-start-1 landscape:col-start-1 flex justify-end">
        <Image alt={currImgData.alt} loading="lazy" objectFit="fill" src={currImgData.src} />
      </div>
      {/* cover text */}
      <div className="md:col-span-2 md:col-start-1 md:row-start-1 landscape:col-span-2 landscape:col-start-1 landscape:row-start-1 mdc-ui-container -mt-5 md:mt-0 md:self-center landscape:mt-[68px] md:landscape:mt-0 ">
        {children}
      </div>
    </section>
  )
}

export default Hero
