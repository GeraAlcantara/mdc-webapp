import { RiPaypalFill, RiVisaLine, RiMastercardFill } from 'react-icons/ri'

import IconShopingCard from '../../public/icons/planePrecios.svg'

import PricesSection from './PricesSection'

function backupsectionPrices() {
  return (
    <>
      <section className="xl:py-16" id="precios">
        <div className="flex mdc-ui-container justify-center items-end m-auto  ">
          <div className="bg-brandBlue-400 h-[1px] w-1/2 flex-1" />
          <div className="mx-4 relative">
            <IconShopingCard className="w-20 h-auto" />
          </div>
          <div className="bg-brandBlue-400 h-[1px] flex-1" />
        </div>
        {/* Divider END */}
        {/* Cards Prices */}
        <PricesSection />
      </section>
      {/* Metodos de pagos  */}
      <section className="mdc-ui-container my-20 text-gray-700">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10">
          <div>
            <p className="text-gray-200 text-xl text-center md:text-left">
              Precios en moneda local. Múltiples métodos de pago.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <RiVisaLine className="text-6xl " />
            </div>
            <div className="flex flex-col items-center">
              <RiPaypalFill className="text-4xl " />
            </div>
            <div className="flex flex-col items-center">
              <RiMastercardFill className="text-4xl " />
            </div>
          </div>
        </div>
      </section>
      {/* Dudas Agenda llamada */}
      <section>
        <div className="mdc-ui-container my-20">
          <div className="flex flex-col items-center gap-8">
            <p className="text-3xl font-bold text-center md:text-left">¿Dudas? Te llamamos ahora</p>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-0 lg:gap-10">
              {/* form with input phone number and must be a valid phone number country code México +52 and Llámame ahora button */}
              <form action="" className="w-full md:w-3/5 xl:w-1/2 ">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-center px-10 w-full">
                  <div className="relative ">
                    <select
                      className="absolute bg-transparent top-1 text-brandWhite rounded-md p-2 outline-none bg-brandBlue-400 "
                      id="phone"
                      name="phone"
                    >
                      <option className="bg-brandBlue-500" value="+52">
                        +52
                      </option>
                      <option className="bg-brandBlue-500" value="+1">
                        +1
                      </option>
                      <option className="bg-brandBlue-500" value="+2">
                        +2
                      </option>
                    </select>
                    <label className="sr-only" htmlFor="phone">
                      Ingresa tu número de teléfono
                    </label>
                    <input
                      className="bg-transparent border border-secondary text-gray-200 text-xl focus:outline-none focus:border-brandBlue-400 rounded-lg pl-20 py-2 "
                      id="phone"
                      lang="es"
                      name="phone"
                      type="tel"
                    />
                  </div>
                  {/* submit button */}
                  <button
                    className="bg-brandBlue-400 text-brandWhite font-bold px-8 py-2 md:flex-shrink-0 rounded-lg "
                    type="submit"
                  >
                    Llámame ahora
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default backupsectionPrices
