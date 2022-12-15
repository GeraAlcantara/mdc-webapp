import { data, getSubcategoryByName, getSubcategoriesNames, getCourseBySlug, getAllCourses } from "../../lib/helpers/library";
import CardsCourse from "../../components/ui/CardCourse";
import { GetStaticProps } from "next";
interface RutasAprendizajeProps {
  data: Categories;
}
function RutasAprendizaje({ data }: RutasAprendizajeProps) {
  const subcategoriesnames = getSubcategoriesNames(data);
  const allSubcategories = subcategoriesnames.map((subcategoryname) => getSubcategoryByName(subcategoryname, data));
  // all courses by subcategory
  const allCoursesBySubcategory = allSubcategories.map((subcategory) => subcategory!.courses);
  const courses = getAllCourses(data);
  return (
    <div className='pt-[68px]  '>
      <div className='mdc-ui-container '>
        {/* SubcategoryName and Card of al courses on that subcategory */}
        {allCoursesBySubcategory.map((courses, index) => (
          <div
            id={subcategoriesnames[index]
              .toString()
              .normalize("NFD")
              .replace(/\p{Diacritic}/gu, "")
              .replace(" ", "")
              .toLowerCase()}
            key={index + "courses"}
            className='my-8'
          >
            <h2 className='text-4xl font-bold text-brandWhite'>{subcategoriesnames[index]}</h2>
            <div className={`mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-start gap-6 `}>
              {courses.map((course, index) => (
                <div key={index + course.identifier.courseNumber + course.identifier.prefix} className='w-full'>
                  <CardsCourse
                    key={index + course.subcategory.skuPrefix}
                    coursename={course.title}
                    duration={course.duration}
                    //get the amount of lessons in the al the modules
                    numlessons={course.modules.reduce((acc, module) => acc + module.lessons.length, 0)}
                    numtopics={course.topics.length}
                    thumbnail={course.thumbnail.src}
                    thumbnailAlt={course.thumbnail.alt}
                    slug={`cursos/${course.library.skuPrefix.toLocaleLowerCase()}/${course.subcategory.skuPrefix.toLocaleLowerCase()}/${course.slug}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// get static props from course
export const getStaticProps: GetStaticProps = async (context) => {
  // get data from helper
  const dataProp: Categories = data;
  const props = {
    data: dataProp,
  };
  // return props
  return {
    props: props,
  };
};

export default RutasAprendizaje;
