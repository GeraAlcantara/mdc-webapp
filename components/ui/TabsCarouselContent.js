import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import CardsCarousel from "./CardCourse";
import ImageHolder from "../../public/videoreel.jpg";
function TabsCarouselContent() {
  return (
    <>
      <div className='w-full flex flex-shrink-0 gap-8 justify-center '>
        {/* card Carusell tabs  */}
        <CardsCarousel coursename='string' duration={5} numlessons={12} numtopics={6} thumbnail={ImageHolder} thumbnailAlt='string' />
        <CardsCarousel coursename='lorem' numlessons={5} numtopics={5} thumbnail={ImageHolder} thumbnailAlt='string' duration={20} />
        <CardsCarousel coursename='lorem' numlessons={5} numtopics={5} thumbnail={ImageHolder} thumbnailAlt='string' duration={20} />
        <CardsCarousel coursename='lorem' numlessons={5} numtopics={5} thumbnail={ImageHolder} thumbnailAlt='string' duration={20} />
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
