import Image from 'next/image'
import Link from 'next/link'
import { StaticImageData } from 'next/image'

interface CardCourseProps {
  coursename: string
  numtopics: number
  thumbnail: StaticImageData
  thumbnailAlt: string
  numlessons: number
  duration: number
  slug: string
}
/**
 *@author Gerardo Alcantara
 *@description Componente de tarjeta de curso
 * @example
 * <CardCourse coursename={data.title:string} numlessons={data.lessons.lenght:number} numtopics={data.topics.lenght:number} thumbnail={data.thumbnail.src:string} thumbnailAlt={data.thumbnail.alt:string} duration={data.duration:number} slug={data.slug} />
 */
function CardCourse({
  coursename,
  numtopics,
  thumbnail,
  thumbnailAlt,
  numlessons,
  duration,
  slug
}: CardCourseProps) {
  return (
    <Link href={slug}>
      <div className="group flex flex-col min-h-[450px] min-w-[250px] rounded-2xl bg-[#0d2237] hover:bg-brandBlue-500 overflow-hidden justify-between  hover:cursor-pointer ">
        <div className="min-h-[230px] w-full relative  ">
          <Image
            alt={thumbnailAlt}
            className="group-hover:scale-110 transition-all duration-300 ease-out "
            layout="fill"
            loading="lazy"
            objectFit="cover"
            objectPosition={'top center'}
            src={thumbnail}
          />
        </div>
        <div className="flex flex-col gap-y-2 p-6">
          <h3 className="text-lg text-gray-100">{coursename}</h3>
          <div className="">
            <p className="text-gray-300 text-sm mt-2">
              <span>{numtopics}</span> Temas, <span>{numlessons}</span> Lecciones
            </p>
            <p className="text-gray-300 text-sm">{`Duración: ${duration} minutos (Aprox.)`}</p>
          </div>
          <a
            className={`self-start mt-4 hover:cursor-pointer uppercase rounded-full bg-secondary text-brandWhite py-2 px-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-[.98] hover:contrast-150 transition-all`}
          >
            Más información
          </a>
        </div>
      </div>
    </Link>
  )
}

export default CardCourse
