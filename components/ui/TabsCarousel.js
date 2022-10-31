import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import TabsCarouselContent from "./TabsCarouselContent";

function TabsCarousel() {
  return (
    <Tab.Group>
      <Tab.List className='mdc-ui-container flex flex-wrap gap-4 justify-center items-center my-12'>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={`py-1 px-6 rounded-full uppercase ${selected ? "bg-brandBlue-100 text-gray-900" : "border-2 border-brandBlue-700 text-brandBlue-700"}`}
            >
              Seguridad de la informacion
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={`py-1 px-6 rounded-full uppercase ${selected ? "bg-brandBlue-100 text-gray-900" : "border-2 border-brandBlue-700 text-brandBlue-700"}`}
            >
              habilidades directivas
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={`py-1 px-6 rounded-full uppercase ${selected ? "bg-brandBlue-100 text-gray-900" : "border-2 border-brandBlue-700 text-brandBlue-700"}`}
            >
              Juridico
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={`py-1 px-6 rounded-full uppercase ${selected ? "bg-brandBlue-100 text-gray-900" : "border-2 border-brandBlue-700 text-brandBlue-700"}`}
            >
              Teletrabajo
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <TabsCarouselContent />
        </Tab.Panel>
        <Tab.Panel>
          <TabsCarouselContent />
        </Tab.Panel>
        <Tab.Panel>
          <TabsCarouselContent />
        </Tab.Panel>
        <Tab.Panel>
          <TabsCarouselContent />
        </Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default TabsCarousel;
