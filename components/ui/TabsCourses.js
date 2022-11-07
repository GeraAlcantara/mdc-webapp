import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import TabsCarouselContent from "./TabsCarouselContent";
import { data, getCategoriesNames, getCategoriesSlugs, getCategoryByName, getSubcategoriesNames } from "../helpers/library";

function TabsCarousel() {
  const categoriesSlugs = getCategoriesSlugs(data);
  const category = getCategoryByName("Recursos Humanos", data);
  const subcategoriesnames = getSubcategoriesNames(data);
  // subcategories slugs
  // subcategories courses
  console.log(subcategoriesnames);
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
