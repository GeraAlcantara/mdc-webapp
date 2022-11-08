import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import TabsCarouselContent from "./TabsCarouselContent";
import { data, getSubcategoryByName, getSubcategoriesNames } from "../helpers/library";

function TabsCarousel() {
  const subcategoriesnames = getSubcategoriesNames(data);
  const allSubcategories = subcategoriesnames.map((subcategoryname) => getSubcategoryByName(subcategoryname, data));
  // all courses by subcategory
  const allCoursesBySubcategory = allSubcategories.map((subcategory) => subcategory.courses);

  // courses HB
  const coursesHB = getSubcategoryByName("Habilidades Blandas", data).courses;
  return (
    <Tab.Group>
      <Tab.List className='mdc-ui-container flex flex-wrap gap-4 justify-center items-center my-12'>
        {subcategoriesnames.map((categoryName, index) => (
          <Tab as={Fragment} key={index}>
            {({ selected }) => (
              <button
                key={index}
                className={`py-1 px-6 rounded-full uppercase ${
                  selected ? "bg-brandBlue-100 text-gray-900" : "border-2 border-brandBlue-700 text-brandBlue-700"
                }`}
              >
                {categoryName}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <p>content1</p>
        </Tab.Panel>
        <Tab.Panel>
          <p>content2</p>
        </Tab.Panel>
        <Tab.Panel>
          <p>content3</p>
        </Tab.Panel>
        <Tab.Panel>
          <p>content4</p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default TabsCarousel;
