import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";

function TabsPriceDetailsMobile() {
  return (
    <div>
      <Tab.Group>
        <Tab.List className='mdc-ui-container flex flex-wrap gap-4 xl:gap-x-8 justify-center items-center my-12 '>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-1 px-6 rounded-full uppercase ${
                  selected ? "bg-brandBlue-100 text-gray-900" : "border-2 border-brandBlue-700 text-brandBlue-700"
                }`}
              >
                Tab 1
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TabsPriceDetailsMobile;
