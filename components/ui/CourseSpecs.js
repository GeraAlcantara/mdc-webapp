import Image from "next/image";
import Link from "next/link";
import { DataSheet } from "../data/CoursesDataSheet";
import LogoSolid from "../svgs/logoSolid.svg";
import TimeIcon from "../svgs/time.svg";
import CCIcon from "../svgs/closecaption.svg";
import { RiArrowRightSFill, RiReactjsFill } from "react-icons/ri";
import CourseContent from "./CourseContent";

function CourseSpecs({
  slug,
  title,
  libraryName,
  subcategoryName,
  duration,
  description = [],
  topics = [],
  features = [],
  lessons = [{ title: "Introducción a la autoevaluación", duration: "0:17" }],
  cover,
  color,
}) {
  return (
    <div className=' mdc-ui-container'>
      <div className='grid w-full grid-cols-1 gap-5 mt-10 mb-4 md:grid-cols-5 md:gap-16'>
        <div className='flex flex-col w-full h-full mx-auto md:col-span-3 md:row-start-auto max-w-screen-2xl'>
          <header>
            <div className='flex items-center justify-center md:hidden my-4 flex-col'>
              <div className='min-w-[296px]  relative'>
                <Image src={cover} layout='responsive' objectFit='contain' width={296} height={320} alt='remotework'></Image>
              </div>
              <div className=' space-y-6 md:hidden '>
                <div className='flex justify-center mt-10 mb-4 '>
                  <Link href='#'>
                    <button className='inline-flex items-center justify-center px-6 py-4 font-semibold text-brandWhite transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 '>
                      <RiArrowRightSFill className='text-3xl mr-2 ' />
                      <span>Comienza</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* get the colorid and aplly style in line backgroundColor = colorid */}
            <div className='w-24 text-center py-1 rounded-full uppercase font-bold my-2 text-sm mx-auto md:m-0 md:mb-2' style={{ backgroundColor: color }}>
              Library
            </div>
            <h1 className='mt-4 font-bold text-2xl leading-tight text-center sm:text-3xl md:text-4xl md:leading-none md:text-left md:mt-0'>{title}</h1>
          </header>
          <div className='flex flex-col items-center my-6 space-y-2 md:items-start'>
            <div className='flex flex-shrink-0 '>
              <div className='sm:w-10 sm:h-10 w-8 h-8 rounded-full flex-shrink-0 text-lg text-secondary bg-white flex justify-center items-center '>
                <LogoSolid></LogoSolid>
              </div>
              <div className='sm:pl-2 pl-1 flex flex-col justify-center'>
                <h2 className='text-sm text-gray-400 leading-none '> {libraryName} </h2>
                <h3 className='font-bold'>{subcategoryName} </h3>
              </div>
            </div>
            <div className='flex flex-row items-center'>
              <div className='text-sm text-gray-400 mr-1 '>
                <TimeIcon />
              </div>
              <span className='text-brandWhite text-sm '>{duration}m </span>
              <div className='text-sm text-gray-400 ml-1 '>
                <CCIcon />
              </div>
            </div>
          </div>

          <div className='p-5 mt-8 border border-gray-100 rounded-md dark:border-gray-700'>
            <h4 className='text-3xl font-bold mb-3'>Descripción</h4>
            {description.map((paragrah, index) => (
              <p className='text-brandWhite md:prose-lg dark:text-gray-100 mb-2 md:mb-0 ' key={index}>
                {paragrah}
              </p>
            ))}
          </div>

          <div className='p-5 mt-8 border border-gray-100 rounded-md dark:border-gray-700'>
            <h4 className='text-3xl font-bold mb-3'>Contenidos</h4>
            <ul className='list-disc list-inside '>
              {topics.map((topic, index) => (
                <li className='text-brandWhite md:prose-lg dark:text-gray-100 mb-2 md:mb-0 ' key={index + topic.substring(0, 5)}>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className='p-5 mt-8 border border-gray-100 rounded-md dark:border-gray-700'>
            <h4 className='text-3xl font-bold mb-3'>Características</h4>
            <div className='flex flex-wrap flex-col md:flex-row justify-around'>
              {features.map(
                ({ id, iconSrc, name, qt }, index) =>
                  //check if qt is not 0
                  qt !== 0 && (
                    <div className=' flex flex-col justify-center items-center my-4 ' key={id + name.substring(0, 3)}>
                      <div className='w-10 h-10 relative'>
                        <Image layout='fill' src={iconSrc} alt='icon'></Image>
                      </div>
                      {qt > 1 ? (
                        <h5 className='text-center'>
                          <span>{qt}</span> {name}
                        </h5>
                      ) : (
                        <h5 className='text-center'>{name}</h5>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
        {/* right side */}
        <div className='flex flex-col items-center justify-start mb-4 md:col-span-2 md:mb-0'>
          <div className='hidden md:block'>
            <div className='min-w-[296px]  relative'>
              <Image src={cover} layout='responsive' objectFit='contain' width={296} height={350} alt='remotework'></Image>
            </div>
          </div>
          <div className='hidden space-y-6 md:block '>
            <div className='flex justify-center mt-10 mb-4 '>
              <Link href='#'>
                <button className='inline-flex items-center justify-center px-6 py-4 font-semibold text-brandWhite transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 '>
                  <RiArrowRightSFill className='text-3xl mr-2 ' />
                  <span>Comienza</span>
                </button>
              </Link>
            </div>
          </div>
          {/* course Content */}
          <CourseContent duration={duration} numLessons={lessons.length} lessons={lessons} />
        </div>
      </div>
    </div>
  );
}

export default CourseSpecs;
