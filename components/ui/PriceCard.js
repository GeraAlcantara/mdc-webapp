import React from "react";
import { RiUserFill } from "react-icons/ri";
import clsx from "clsx";

/**
 * title:string, price:number, description:string, make param slected optional boolean
 * @param {object} props
 * @param {string} props.title - title of the card
 * @param {number} props.price - price of the card
 * @param {string} props.description - description of the card
 * @param {boolean} [props.selected] - if the card is selected
 * @param {any} props.handleisSelected - function to handle the selected state
 * @returns {JSX.Element}
 */
function PriceCard({ title, price, description, selected = false, handleisSelected, ...props }) {
  return (
    <div
      onClick={handleisSelected}
      className={clsx("", {
        "bg-secondary pt-8 rounded-xl ": selected === true,
        "pt-8 rounded-xl bg-bg_primary": selected === false,
      })}
    >
      <div
        className={clsx("", {
          "borderAnimated__blue rounded-b-xl bg-bg_primary": selected === true,
          "borderAnimated ": selected === false,
        })}
      >
        <i
          className={clsx({
            " hidden opacity-0": selected === true,
            "opacity-0 transition-all": selected === false,
          })}
        ></i>
        <div
          className={clsx("p-6 flex flex-col gap-8 relative h-full justify-between", {
            "": selected === true,
            "border-cyan-800/20 rounded-xl border-[1px]": selected === false,
          })}
        >
          <header>
            <h1 className='font-RobotoCondense font-bold text-3xl uppercase mb-2'>{title}</h1>
            <hr className='border-cyan-800' />
            <div className='pt-4'>
              <p className='text-accent text-5xl font-bold mb-2'>
                {`$${price}`} <small className='uppercase text-2xl'>mxn</small>
              </p>
              <p className='text-gray-600 h-full'>{description} </p>
            </div>
          </header>
          <div className='text-gray-200 flex gap-2 items-end '>
            <RiUserFill className='text-lg' />
            <span className='text-sm leading-none text-gray-400 '>1 Usuario</span>
          </div>
          <div>
            <button
              className={clsx(" w-full", {
                "bg-accent py-2 rounded-full text-gray-900 text-xl font-bold box-content": selected === true,
                "py-1 border-accent border-2 rounded-lg": selected === false,
              })}
            >
              Comprar plan
            </button>
          </div>
          <div className='text-gray-600 text-center'>
            <button>Regala este plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
