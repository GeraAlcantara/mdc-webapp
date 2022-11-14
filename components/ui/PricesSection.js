import { Fragment, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import PriceCard from "./PriceCard";

function PricesSection() {
  // set state for mobile
  const [isMobile, setIsMobile] = useState(false);
  //funcion check if is mobile and useit as effect
  const checkIfMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // setstate for tabs title
  const [tabsTitle, setTabsTitle] = useState([]);
  // define one state to know wich card is selected and update the state when a card is clicked
  const [selectedCard, setSelectedCard] = useState(2);
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

  // useEffect
  useEffect(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

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
      {/* Detalles en TABS si es mobile else detlles expandido */}
      {isMobile ? (
        <div>
          <Tab.Group selectedIndex={selectedCard} onChange={setSelectedCard}>
            <h1 className='text-center text-secondary text-2xl font-bold my-6 '>Detalles</h1>
            <Tab.List className=' w-full py-2 px-2 rounded-lg flex justify-between md:justify-evenly gap-1 items-center border-2 border-brandBlue-400 '>
              {/* map tabData */}
              {tabsTitle.map((tab, index) => (
                <Tab as={Fragment} key={index}>
                  {({ selected = selectedCard }) => (
                    <button
                      key={index}
                      className={`py-1 px-4 rounded-lg  uppercase text-sm  ${
                        selected
                          ? "bg-secondary text-gray-50  focus:border-white focus:outline-white focus-visible:outline-none"
                          : "border-2 border-brandBlue-700 "
                      }`}
                    >
                      {tab.title}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <table className='w-full  '>
                  <thead>
                    <tr className='text-white font-bold text-lg h-4 text-left '>
                      <th className='text-secondary text-2xl font-bold text-left sr-only'>Detalles</th>
                    </tr>
                  </thead>
                  <tbody className='h-40'>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Lorem ipsum dolor sit amet</td>
                      <td>✔️</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Consectetur adipiscing elit</td>
                      <td>Mattis lorem</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Praesent massa sem</td>
                      <td>Máx. 1</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Fermentum ac ullamcorper non</td>
                      <td>-</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Blandit quis risus</td>
                      <td>✔️</td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Panel>
              <Tab.Panel>
                <table className='w-full  '>
                  <thead>
                    <tr className='text-white font-bold text-lg h-4 text-left '>
                      <th className='text-secondary text-2xl font-bold text-left sr-only'>Detalles</th>
                      <th className='sr-only'>LMS</th>
                    </tr>
                  </thead>
                  <tbody className='h-40'>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Lorem ipsum dolor sit amet</td>
                      <td>-</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Consectetur adipiscing elit</td>
                      <td>Pretium</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Praesent massa sem</td>
                      <td>Máx. 1</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Fermentum ac ullamcorper non</td>
                      <td>-</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Blandit quis risus</td>
                      <td>✔️</td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Panel>
              <Tab.Panel>
                <table className='w-full  '>
                  <thead>
                    <tr className='text-white font-bold text-lg h-4 text-left'>
                      <th className='text-secondary text-2xl font-bold text-left sr-only'>Detalles</th>
                      <th className='sr-only'>Cursos + LMS</th>
                    </tr>
                  </thead>
                  <tbody className='h-40'>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Lorem ipsum dolor sit amet</td>
                      <td>✔️</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Consectetur adipiscing elit</td>
                      <td>Lorem sit</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Praesent massa sem</td>
                      <td>Ilimatadas</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Fermentum ac ullamcorper non</td>
                      <td>✔️</td>
                    </tr>
                    <tr className='text-gray-300 odd:bg-bg_secondary even:bg-none'>
                      <td>Blandit quis risus</td>
                      <td>✔️</td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      ) : (
        /* Detalles */
        /* table Html titulos de columnas Detalles, Cursos, LMS, Cursos + LMS
        Detalles | Cursos | LMS | Cursos + LMS
        Lorem ipsum dolor sit amet| ✔️ | - | ✔️
        Consectetur adipiscing elit | Mattis lorem | Pretium | Lorem sit
        Praesent massa sem | Máx. 1 | Máx. 1 | Ilimatadas
        Fermentum ac ullamcorper non | - | - | ✔️
        Blandit quis risus | ✔️ | ✔️ | ✔️
        */
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
      )}
    </div>
  );
}

export default PricesSection;
