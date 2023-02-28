import CardCourse from '../ui/CardCourse'

interface LibreriaCursosProps {
  courses: Course[]
}
function LibreriaCursos({ courses }: LibreriaCursosProps) {
  return (
    <section className="mdc-ui-container my-12 flex justify-center ">
      <div className="grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
        {courses.map((course, id) => {
          return (
            <CardCourse
              key={id}
              coursename={course.title}
              duration={course.duration}
              numlessons={course.modules.reduce((acc, module) => acc + module.lessons.length, 0)}
              numtopics={course.topics.length}
              slug={`cursos/${course.library.skuPrefix.toLocaleLowerCase()}/${course.subcategory.skuPrefix.toLocaleLowerCase()}/${
                course.slug
              }`}
              thumbnail={course.thumbnail.src}
              thumbnailAlt={course.thumbnail.alt}
            />
          )
        })}
      </div>
    </section>
  )
}

export default LibreriaCursos
