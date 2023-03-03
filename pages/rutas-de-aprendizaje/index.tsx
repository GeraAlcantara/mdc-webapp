import { GetStaticProps } from 'next'

import { data, getSubcategoryByName, getSubcategoriesNames } from '../../lib/helpers/library'
import CardsCourse from '../../components/ui/CardCourse'
interface RutasAprendizajeProps {
  data: Categories
}
function RutasAprendizaje({ data }: RutasAprendizajeProps) {
  const subcategoriesnames = getSubcategoriesNames(data)
  const allSubcategories = subcategoriesnames.map((subcategoryname) =>
    getSubcategoryByName(subcategoryname, data)
  )
  // all courses by subcategory
  const allCoursesBySubcategory = allSubcategories.map((subcategory) => subcategory!.courses)

  return (
    <div className="pt-[68px]  ">
      <div className="mdc-ui-container ">
        {/* SubcategoryName and Card of al courses on that subcategory */}
        {allCoursesBySubcategory.map((courses, index) => (
          <div
            key={index + 'courses'}
            className="my-8"
            id={subcategoriesnames[index]
              .toString()
              .normalize('NFD')
              .replace(/\p{Diacritic}/gu, '')
              .replace(' ', '')
              .toLowerCase()}
          >
            <h2 className="text-4xl mb-4 font-bold text-brandWhite">{subcategoriesnames[index]}</h2>
            <div className="grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 w-full">
              {courses.map((course, index) => (
                <CardsCourse
                  key={index + course.subcategory.skuPrefix}
                  coursename={course.title}
                  duration={course.duration}
                  numlessons={course.modules.reduce(
                    (acc, module) => acc + module.lessons.length,
                    0
                  )}
                  numtopics={course.topics.length}
                  slug={`cursos/${course.library.skuPrefix.toLocaleLowerCase()}/${course.subcategory.skuPrefix.toLocaleLowerCase()}/${
                    course.slug
                  }`}
                  thumbnail={course.thumbnail.src}
                  thumbnailAlt={course.thumbnail.alt}
                  //get the amount of lessons in the al the modules
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// get static props from course
export const getStaticProps: GetStaticProps = async (_context) => {
  // get data from helper
  const dataProp: Categories = data
  const props = {
    data: dataProp
  }

  // return props
  return {
    props: props
  }
}

export default RutasAprendizaje
