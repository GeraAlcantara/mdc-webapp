import Image from "next/image";
import Link from "next/link";

/**
 *@author Gerardo Alcantara
 * @typedef {{coursename: string, numtopics: number, thumbnail: string, thumbnailAlt: string, numlessons: number, duration: number, slug: string }} CardCourseProps
 * @param {CardCourseProps} props
 * @example
 * <CardCourse coursename={data.title:string} numlessons={data.lessons.lenght:number} numtopics={data.topics.lenght:number} thumbnail={data.thumbnail.src:string} thumbnailAlt={data.thumbnail.alt:string} duration={data.duration:number} slug={data.slug} />
 */
function CardsCarousel({ coursename, numtopics, thumbnail, thumbnailAlt, numlessons, duration, slug }) {
  return (
    <Link href={slug}>
      <div className='group flex flex-col w-[250px] md:w-[300px] lg:w-[250px] m-auto xl:w-[300px] h-[450px] rounded-2xl bg-brandBlue-600 hover:bg-brandBlue-500 overflow-hidden justify-between hover:cursor-pointer '>
        <div className='min-h-[230px] w-full relative  '>
          <Image
            className='group-hover:scale-110 transition-all duration-300 ease-out'
            src={thumbnail}
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            loading='lazy'
            alt={thumbnailAlt}
          />
        </div>
        <div className='pt-6 px-6 '>
          <h3 className='text-xl text-gray-100'>{coursename}</h3>
        </div>
        <div className='p-6 mb-4 flex-0'>
          <p className='text-gray-300 text-sm mt-2'>
            <span>{numtopics}</span> Temas, <span>{numlessons}</span> Lecciones
          </p>
          <p className='text-gray-300 text-sm'>{`Duracion: ${duration} minutos (Aprox.)`}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardsCarousel;
