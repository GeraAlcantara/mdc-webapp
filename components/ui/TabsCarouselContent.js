import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import CardsCarousel from "./CardsCarousel";

function TabsCarouselContent() {
  return (
    <>
      <div className='w-full flex flex-shrink-0 gap-8 justify-center '>
        {/* card Carusell tabs  */}
        <CardsCarousel />
        <CardsCarousel />
        <CardsCarousel />
        <CardsCarousel />
      </div>
      {/* Pagination */}
      <div className='p-8 text-center'>
        <nav className='flex items-center w-1/3 m-auto justify-between'>
          {/* prev */}
          <button>
            <dl>
              <dt className='sr-only'>Previous</dt>
              <dd>
                <RiArrowLeftSLine className='text-white text-5xl' />
              </dd>
            </dl>
          </button>
          {/* dots pages */}
          <div className='flex justify-around w-2/5'>
            <button>
              <dl>
                <dt className='sr-only'>page 1</dt>
                <dd>
                  <div className='p-2 rounded-full bg-accent '></div>
                </dd>
              </dl>
            </button>
            <button>
              <dl>
                <dt className='sr-only'>page 2</dt>
                <dd>
                  <div className='p-2 rounded-full bg-brandBlue-700 '></div>
                </dd>
              </dl>
            </button>
            <button>
              <dl>
                <dt className='sr-only'>page 3</dt>
                <dd>
                  <div className='p-2 rounded-full bg-brandBlue-700 '></div>
                </dd>
              </dl>
            </button>
            <button>
              <dl>
                <dt className='sr-only'>page 4</dt>
                <dd>
                  <div className='p-2 rounded-full bg-brandBlue-700 '></div>
                </dd>
              </dl>
            </button>
          </div>
          {/* next */}
          <button>
            <dl>
              <dt className='sr-only'>Next</dt>
              <dd>
                <RiArrowRightSLine className='text-white text-5xl' />
              </dd>
            </dl>
          </button>
        </nav>
      </div>
    </>
  );
}

export default TabsCarouselContent;
