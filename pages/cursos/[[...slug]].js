import { data, getSubcategoryByName, getSubcategoriesNames, getCourseBySlug } from "../../components/helpers/library";
import CourseSpecs from "../../components/ui/CourseSpecs";

const subcategoriesnames = getSubcategoriesNames(data);
const allSubcategories = subcategoriesnames.map((subcategoryname) => getSubcategoryByName(subcategoryname, data));
const allCoursesBySubcategory = allSubcategories.map((subcategory) => subcategory.courses);
// get all courses slug from all subcategories
const allCoursesSlugs = allCoursesBySubcategory.map((courses) => courses.map((course) => course.slug)).flat();
//get all courses subcategory.skuPrefix.tolowercase
const allCoursesSkuPrefix = allCoursesBySubcategory.map((courses) => courses.map((course) => course.subcategory.skuPrefix.toLowerCase())).flat();
//get all courses.library.skuPrefix from all subcategories
const allCoursesLibrarySkuPrefix = allCoursesBySubcategory.map((courses) => courses.map((course) => course.library.skuPrefix.toLowerCase())).flat();
// build array [allCoursesLibrarySkuPrefix[i],allCoursesSkuPrefix[i],allCoursesSlugs[i]]
const allCourses = allCoursesLibrarySkuPrefix.map((librarySkuPrefix, i) => [librarySkuPrefix, allCoursesSkuPrefix[i], allCoursesSlugs[i]]);

export async function getStaticPaths() {
  // build paths as /allCoursesSkuPrefix/allCoursesSlugs
  const paths = allCourses.map((slug) => {
    return {
      params: {
        slug: [...slug],
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

//render the page
/**
 * @param {{params:import('next').GetStaticPaths , course:import('../../components/helpers/library').Course}} course
 * @returns
 */
function Cursos({ params, course }) {
  //get all lessos from the course modules
  const lessons = course.modules.map((module) => module.lessons).flat();
  console.log(lessons);
  if (!lessons) {
    return <div>loading...</div>;
  }

  return (
    <div className='pt-[68px]'>
      <CourseSpecs
        duration={course.duration}
        libraryName={course.library.name}
        slug={course.slug}
        subcategoryName={course.subcategory.name}
        title={course.title}
        description={course.description}
        features={course.features}
        topics={course.topics}
        lessons={lessons}
      />
    </div>
  );
}

export async function getStaticProps({ params }) {
  //from param get las item in the array
  const slug = params.slug[params.slug.length - 1];
  //get the course by slug
  const course = getCourseBySlug(slug, allCoursesBySubcategory.flat());
  // if not found trow an error
  if (!course) {
    throw new Error("No course found" + slug);
  }
  // Pass post data to the page via props
  return { props: { params, course } };
}

export default Cursos;
