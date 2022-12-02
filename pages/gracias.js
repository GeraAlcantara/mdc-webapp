import ImgMessagePhone from "../public/sendMessage.jpg";
import Image from "next/image";
import IconSend from "../public/icons/iconSent.svg";
import HelperHead from "../components/helpers/HelperHead";
import { DataHeadGracias } from "../components/data/DataHeader";

function Gracias() {
  return (
    <>
      <HelperHead {...DataHeadGracias} />
      <div className='pt-[68px] '>
        <div className='mdc-ui-container py-10  flex justify-center items-center min-h-screen '>
          <section className='grid grid-cols-2 md:grid-cols-2  md:grid-rows-2 w-screen md:max-w-[800px] gap-x-10 animate-FadeInSlidein '>
            <div className='col-start-1 col-span-2 row-start-1 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-2 self-start justify-self-start rounded-[2.5rem] overflow-hidden max-h-[310px] md:max-h-[320px]'>
              <Image
                src={ImgMessagePhone}
                priority
                objectFit='cover'
                width={500}
                height={479}
                alt='persona enviando un mensaje atravez de su telefono mobile'
              />
            </div>

            <IconSend className='col-start-1 row-start-1 md:row-start-1 md:row-span-2 col-span-2 self-end justify-self-start md:ml-8 z-10 mt-8 md:mb-5 w-full h-3/6 md:w-3/6 md:h-3/6 sm:landscape:w-3/6  ' />

            <header className='col-start-1 col-end-3  md:col-start-2 md:row-start-1 pt-7'>
              <h1 className='text-5xl font-bold text-secondary'>¡Mensaje Enviado!</h1>
              <p className='text-gray-50 text-lg mt-4'>
                Gracias por contactarnos, en breve uno de nuestros representantes se pondrá en contacto con usted o su empresa.
              </p>
            </header>
          </section>
        </div>
      </div>
    </>
  );
}

export default Gracias;
