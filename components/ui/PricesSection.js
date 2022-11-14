import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import PriceCard from "./PriceCard";
import TabsPriceDetailsMobile from "./TabsPriceDetailsMobile";

function PricesSection() {
  // setstate for tabs title
  const [tabsTitle, setTabsTitle] = useState([]);
  // define one state to know wich card is selected and update the state when a card is clicked
  const [selectedCard, setSelectedCard] = useState(0);
  // define a function to handle the selected state
  const handleisSelected = (index) => {
    console.log(index);
    setSelectedCard(index);
  };

  const tabsdata = [
    {
      id: 1,
      title: "Cursos",
      price: 50,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      title: "LMS",
      price: 30,
      description: "uisquam rerum aperiam id fugiat nemo tempora.",
    },
    {
      id: 3,
      title: "Curso + LMS",
      price: 70,
      description: "Natus itaque iste rem sapiente maxime ullam alias?",
    },
  ];
  //set state of tabs title on component mount
  useState(() => {
    setTabsTitle(tabsdata);
  });

  return (
    <div className=' my-10 mdc-ui-container  '>
      <div className='grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-2 lg:gap-0 justify-center '>
        {/* iterate tabData with PriceCard */}
        {tabsTitle.map((tab, index) => (
          <PriceCard
            key={tab.id}
            title={tab.title}
            price={tab.price}
            description={tab.description}
            selected={selectedCard === index ? true : false}
            handleisSelected={() => handleisSelected(index)}
          />
        ))}
      </div>
      {/* TABS Detalles mobile */}
      <div>
        <Tab.Group selectedIndex={selectedCard} onChange={setSelectedCard}>
          <Tab.List className='mdc-ui-container flex flex-wrap gap-4 xl:gap-x-8 justify-center items-center my-12 '>
            {/* map tabData */}
            {tabsTitle.map((tab, index) => (
              <Tab as={Fragment} key={index}>
                {({ selected = selectedCard }) => (
                  <button
                    key={index}
                    className={`py-1 px-6 rounded-full uppercase ${
                      selected ? "bg-brandBlue-100 text-gray-900" : "border-2 border-brandBlue-700 text-brandBlue-700"
                    }`}
                  >
                    {tab.title}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Detalles */}
      {/* table Html titulos de columnas Detalles, Cursos, LMS, Cursos + LMS
        Detalles | Cursos | LMS | Cursos + LMS
        Lorem ipsum dolor sit amet| ✔️ | - | ✔️
        Consectetur adipiscing elit | Mattis lorem | Pretium | Lorem sit
        Praesent massa sem | Máx. 1 | Máx. 1 | Ilimatadas
        Fermentum ac ullamcorper non | - | - | ✔️
        Blandit quis risus | ✔️ | ✔️ | ✔️
        */}
      <div className='my-10 '>
        <div className='m-auto'>
          <table className='w-full  '>
            <thead>
              <tr className='text-white font-bold text-lg h-10 text-left'>
                <th className='text-secondary text-2xl font-bold text-left'>Detalles</th>
                <th>Cursos</th>
                <th>LMS</th>
                <th>Cursos + LMS</th>
              </tr>
            </thead>
            <tbody className='h-40'>
              <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                <td>Lorem ipsum dolor sit amet</td>
                <td>✔️</td>
                <td>-</td>
                <td>✔️</td>
              </tr>
              <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                <td>Consectetur adipiscing elit</td>
                <td>Mattis lorem</td>
                <td>Pretium</td>
                <td>Lorem sit</td>
              </tr>
              <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                <td>Praesent massa sem</td>
                <td>Máx. 1</td>
                <td>Máx. 1</td>
                <td>Ilimatadas</td>
              </tr>
              <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                <td>Fermentum ac ullamcorper non</td>
                <td>-</td>
                <td>-</td>
                <td>✔️</td>
              </tr>
              <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                <td>Blandit quis risus</td>
                <td>✔️</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PricesSection;
