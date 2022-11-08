import Image from "next/image";
import ImageHolder from "../../public/videoreel.jpg";

/**
 *@author Gerardo Alcantara
 * @typedef {{coursename: string, numtopics: number, thumbnail: string, thumbnailAlt: string, numlessons: number, duration: number }} CardCourseProps
 * @param {CardCourseProps} props
 * @example
 * <CardCourse coursename={data.title:string} numlessons={data.lessons.lenght:number} numtopics={data.topics.lenght:number} thumbnail={data.thumbnail.src:string} thumbnailAlt={data.thumbnail.alt:string} duration={data.duration:number} />
 */
function CardsCarousel({ coursename, numtopics, thumbnail, thumbnailAlt, numlessons, duration }) {
  return (
    <div className='flex flex-col w-[290px] h-[450px] rounded-2xl bg-brandBlue-500 overflow-hidden justify-between'>
      <div className='min-h-[230px] w-full relative'>
        <Image src={thumbnail} layout='fill' objectFit='cover' alt={thumbnailAlt} />
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
  );
}

export default CardsCarousel;
