import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import { data, getSubcategoryByName, getSubcategoriesNames } from '../../lib/helpers/library'

import CardsCourse from './CardCourse'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function TabsCarousel() {
  const subcategoriesnames = getSubcategoriesNames(data)
  const allSubcategories = subcategoriesnames.map((subcategoryname) =>
    getSubcategoryByName(subcategoryname, data)
  )
  // all courses by subcategory
  const allCoursesBySubcategory = allSubcategories.map((subcategory) => subcategory!.courses)

  return (
    <Tab.Group>
      <Tab.List className="mdc-ui-container flex flex-wrap gap-4 xl:gap-x-8 justify-center items-center my-12 ">
        {subcategoriesnames.map((categoryName, index) => (
          <Tab key={index} as={Fragment}>
            {({ selected }) => (
              <button
                key={index}
                className={`py-1 px-6 rounded-full uppercase ${
                  selected
                    ? 'bg-brandBlue-100 text-gray-900'
                    : 'border-2 border-brandBlue-700 text-brandBlue-700'
                }`}
              >
                {categoryName}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="lg:mdc-ui-container">
        {/* Tab.Panels in array and CardCourse in element in the array  */}
        {allCoursesBySubcategory.map((courses, index) => (
          <Tab.Panel key={index + 'courses'} className="">
            {
              <div className="w-full">
                <Swiper
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10
                    },
                    1280: {
                      slidesPerView: 3,
                      spaceBetween: 0
                    }
                  }}
                  centerInsufficientSlides={true}
                  className="swiper"
                  modules={[Pagination, Navigation]}
                  navigation={true}
                  pagination={{
                    clickable: true
                  }}
                  slidesPerView={1}
                  spaceBetween={10}
                >
                  {courses.map((course, index) => (
                    <SwiperSlide
                      key={index + course.identifier.courseNumber + course.identifier.prefix}
                      className="swiper-slide"
                    >
                      <div>
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
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            }
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default TabsCarousel
