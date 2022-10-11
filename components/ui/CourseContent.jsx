import Link from "next/link";
import { RiReactjsFill } from "react-icons/ri";
import { DataSheet } from "../data/CoursesDataSheet";
function CourseContent() {
  return (
    <section className='mt-8'>
      <div className='flex flex-col mb-2 space-y-4'>
        <h2 className='text-3xl font-bold'>Course Content</h2>
        <div className='text-sm font-normal text-gray-400'>
          <p>30m • 8 lessons</p>
        </div>
      </div>
      <ul>
        {DataSheet.lessons.map((lesson, idx) => (
          <li key={idx + lesson.title}>
            <div className='flex py-2 font-semibold leading-tight '>
              <div className='flex items-center mr-2 space-x-2'>
                <div className='text-gray-400 font-normal w-4 text-sm '>
                  <span>{idx + 1}</span>
                </div>
                <div className='flex items-center flex-shrink-0 w-8 '>
                  <RiReactjsFill className='text-sky-400 text-2xl' />
                </div>
              </div>
              <div className='flex flex-col'>
                <Link href='#'>
                  <a className='text-lg font-semibold hover:underline hover:text-blue-600 text-gray-100'>
                    <span>{lesson.title}</span>
                  </a>
                </Link>
                <div className='text-xs text-gray-500'>
                  <span>{`${lesson.duration}m`}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CourseContent;
