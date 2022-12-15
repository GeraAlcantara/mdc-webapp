import { MdPlayLesson } from "react-icons/md";

/**
 *
 * @typedef {{duration:number, numLessons:number, lessons:Array<Lesson>}} CourseContent
 * @typedef {{title:string, duration:string,}} Lesson
 * @param {CourseContent} props
 */
interface CourseContentProps {
  duration: number;
  numLessons: number;
  lessons: Array<Lesson>;
}
function CourseContent({
  duration = 30,
  numLessons = 8,
  lessons = [
    { title: "Introducción a la autoevaluación", duration: "0:17" },
    { title: "Autoevaluación de Escucha Activa", duration: "0:32" },
  ],
}: CourseContentProps) {
  return (
    <section className='mt-8 h-full flex flex-col bg-brandBlue-500  rounded-xl select-none '>
      <div className='flex flex-col mb-2 space-y-2 p-4'>
        <h2 className='text-2xl lg:text-3xl font-bold'>Contenido del Curso</h2>
        <div className='text-sm font-normal text-gray-400'>
          <p>
            {duration} min • {numLessons} Lecciones
          </p>
        </div>
      </div>
      <hr />
      <ul className='p-4 md:max-h-[700px] lg:max-h-[590px] md:pr-4 lg:pr-6 overflow-y-scroll '>
        {lessons.map((lesson, idx) => (
          <li key={idx + lesson.title}>
            <div className='flex py-2 font-semibold leading-tight select-none'>
              <div className='flex items-center mr-2 space-x-2'>
                <div className='text-gray-400 font-normal w-4 text-sm '>
                  <span>{idx + 1}</span>
                </div>
                <div className='flex items-center flex-shrink-0 w-8 '>
                  <MdPlayLesson className='text-secondary text-2xl' />
                </div>
              </div>
              <div className='flex flex-col '>
                <p className='text-lg font-semibold  text-gray-100'>
                  <span>{lesson.title}</span>
                </p>

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
