import Image from "next/image";
import Link from "next/link";
import { DataSheet } from "../data/CoursesDataSheet";
import LogoSolid from "../svgs/logoSolid.svg";
import TimeIcon from "../svgs/time.svg";
import CCIcon from "../svgs/closecaption.svg";

function CourseSpecs() {
  return (
    <div className=' mdc-ui-container'>
      <div className='grid w-full grid-cols-1 gap-5 mt-10 mb-4 md:grid-col-5 md:gap-16'>
        <div className='flex flex-col w-full h-full mx-auto md:col-span-3 md:row-start-auto max-w-screen-2xl'>
          <header>
            <div className='flex items-center justify-center md:hidden my-4'>
              <Link href={DataSheet.slug}>
                <a>
                  <Image src='/ilustracion.png' width={260} height={260} alt='remotework' objectFit='contain'></Image>
                </a>
              </Link>
            </div>
            <div className='bg-secondary w-24 text-center py-1 rounded-full uppercase font-bold my-2 text-sm mx-auto md:m-0 md:mb-2'>Library</div>
            <h1 className='mt-4 font-bold text-2xl leading-tight text-center sm:text-3xl md:text-4xl md:leading-none md:text-left md:mt-0'>
              {DataSheet.title}
            </h1>
          </header>
          <div className='flex flex-col items-center my-6 space-y-2 md:items-start'>
            <div className='flex flex-shrink-0 '>
              <div className='sm:w-10 sm:h-10 w-8 h-8 rounded-full flex-shrink-0 text-lg text-secondary bg-white flex justify-center items-center '>
                <LogoSolid></LogoSolid>
              </div>
              <div className='sm:pl-2 pl-1 flex flex-col justify-center'>
                <h2 className='text-sm text-gray-400 leading-none '> {DataSheet.library.name} </h2>
                <h3 className='font-bold'>{DataSheet.subcategory.name} </h3>
              </div>
            </div>
            <div className='flex flex-row items-center'>
              <div className='text-sm text-gray-400 mr-1 '>
                <TimeIcon />
              </div>
              <span className='text-white text-sm '>{DataSheet.duration}m </span>
              <div className='text-sm text-gray-400 ml-1 '>
                <CCIcon />
              </div>
            </div>
          </div>

          <div className='p-5 mt-8 border border-gray-100 rounded-md dark:border-gray-700'>
            <h4 className='text-3xl font-bold mb-3'>Descripción</h4>
            {DataSheet.description.map((paragrah, index) => (
              <p className='text-white md:prose-lg dark:text-gray-100 mb-2 md:mb-0 ' key={index}>
                {paragrah}
              </p>
            ))}
          </div>

          <div className='p-5 mt-8 border border-gray-100 rounded-md dark:border-gray-700'>
            <h4 className='text-3xl font-bold mb-3'>Contenidos</h4>
            <ul className='list-disc list-inside '>
              {DataSheet.topics.map((topics, index) => (
                <li className='text-white md:prose-lg dark:text-gray-100 mb-2 md:mb-0 ' key={index + topics.substring(0, 5)}>
                  {topics}
                </li>
              ))}
            </ul>
          </div>

          <div className='p-5 mt-8 border border-gray-100 rounded-md dark:border-gray-700'>
            <h4 className='text-3xl font-bold mb-3'>Características</h4>
            <div className='flex flex-wrap flex-col md:flex-row justify-around'>
              {DataSheet.features.map(({ id, ICON, name, qt }, index) => (
                <div className=' flex flex-col justify-center items-center my-4 ' key={id + name.substring(0, 3)}>
                  <ICON className='text-7xl'></ICON>
                  {qt > 1 ? (
                    <h5 className='text-center'>
                      <span>{qt}</span> {name}
                    </h5>
                  ) : (
                    <h5 className='text-center'>{name}</h5>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSpecs;
