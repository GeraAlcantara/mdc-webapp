import Image from 'next/image'
import { useEffect, useState, useMemo } from 'react'

import { initImagesData } from './Hero.constanst'

function Hero({ children }: { children: React.ReactNode }): JSX.Element {
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
