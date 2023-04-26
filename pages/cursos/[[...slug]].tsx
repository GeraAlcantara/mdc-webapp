import { GetStaticProps } from 'next'

import HelperHead from '../../lib/helpers/HelperHead'
import {
  data,
  getSubcategoryByName,
  getSubcategoriesNames,
  getCourseBySlug
} from '../../lib/helpers/library'
import CourseSpecs from '../../components/ui/CourseSpecs'
import Breadcrumbs from '../../components/Breadcrumbs'
import CardCourse from '../../components/ui/CardCourse'

const subcategoriesnames = getSubcategoriesNames(data)
const allSubcategories = subcategoriesnames.map((subcategoryname) =>
  getSubcategoryByName(subcategoryname, data)
)
const allCoursesBySubcategory = allSubcategories.map((subcategory) => subcategory!.courses)
// get all courses slug from all subcategories
const allCoursesSlugs = allCoursesBySubcategory
  .map((courses) => courses.map((course) => course.slug))
  .flat()
//get all courses subcategory.skuPrefix.tolowercase
const allCoursesSkuPrefix = allCoursesBySubcategory
  .map((courses) => courses.map((course) => course.subcategory.skuPrefix.toLowerCase()))
  .flat()
//get all courses.library.skuPrefix from all subcategories
const allCoursesLibrarySkuPrefix = allCoursesBySubcategory
  .map((courses) => courses.map((course) => course.library.skuPrefix.toLowerCase()))
  .flat()
// build array [allCoursesLibrarySkuPrefix[i],allCoursesSkuPrefix[i],allCoursesSlugs[i]]
const allCourses = allCoursesLibrarySkuPrefix.map((librarySkuPrefix, i) => [
  librarySkuPrefix,
  allCoursesSkuPrefix[i],
  allCoursesSlugs[i]
])

export async function getStaticPaths() {
  // build paths as /allCoursesSkuPrefix/allCoursesSlugs
  const paths = allCourses.map((slug) => {
    return {
      params: {
        slug: [...slug]
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

interface CourseProps {
  params: {
    slug: string[]
  }
  course: Course
  similarCourses: Course[]
}
function Cursos({ params, course, similarCourses }: CourseProps) {
  //get all lessos from the course modules
  const lessons = course.modules.map((module) => module.lessons).flat()

  if (!lessons) {
    return <div>loading...</div>
  }
  const category = getSubcategoryByName(course.subcategory.name, data)

  const colorid = category!.colorid

  const breadcrumbs = [
    {
      name: 'Inicio',
      url: '/'
    },
    {
      name: 'Librería',
      url: '/libreria'
    },
    {
      name: params.slug![params.slug!.length - 1].replace(/-/g, ' '),
      url: `${params.slug.map((slug) => slug).join('/')}`
    }
  ]

  return (
    <>
      <HelperHead
        pageDescription={course.description.slice(0, 1).toString()}
        pageTitle={course.title}
        previewImage={'/socialCards/fichasTecnicas.jpg'}
        previewImageAlt="imagen social"
        slug={`cursos/${course.library.skuPrefix.toLocaleLowerCase()}/${course.subcategory.skuPrefix.toLocaleLowerCase()}/${
          course.slug
        }`}
      />
      <div className="pt-[68px]">
        <section className="mdc-ui-container lg:mt-10 lg:mb-10">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </section>
        <CourseSpecs
          color={colorid}
          cover={course.cover}
          description={course.description}
          duration={course.duration}
          features={course.features}
          lessons={lessons}
          libraryName={course.library.name}
          linkCourse={course.linkCourse}
          slug={course.slug}
          subcategoryName={course.subcategory.name}
          title={course.title}
          topics={course.topics}
        />
        {similarCourses.length > 0 && (
          <section className="mdc-ui-container py-14 ">
            <h2 className="text-4xl mb-4 font-bold text-brandWhite">Cursos Similares</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 w-full">
              {similarCourses.slice(0, 3).map((course, index) => (
                <CardCourse
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
          </section>
        )}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return { props: {} }
  }
  const { params } = context
  //from param get las item in the array
  const slug = params.slug![params.slug!.length - 1]
  //get the course by slug
  const course = getCourseBySlug(slug, allCoursesBySubcategory.flat())

  const similarCourses = getSubcategoryByName(course!.subcategory.name, data)!.courses.filter(
    (course) => course.slug !== slug
  )

  return { props: { params, course, similarCourses } }
}

export default Cursos
