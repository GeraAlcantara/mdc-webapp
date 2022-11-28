import Head from "next/head";
import ImgMessagePhone from "../public/sendMessage.jpg";
import ImgMessageSend from "../public/messageSend.png";
import Image from "next/image";

function Gracias() {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='servicios'
          /* TODO: Descripcion meta */
          content='Descripcion para pagina gracias por contactarnos'
        />
        <title>Recibimos su Mensaje gracias!</title>
      </Head>
      <div className='pt-[68px] '>
        <div className='mdc-ui-container py-10  flex justify-center items-center min-h-screen '>
          <section className='grid grid-cols-2 md:grid-cols-2  md:grid-rows-2 w-screen md:max-w-[800px] gap-x-10 '>
            <div className='col-start-1 col-span-2 row-start-1 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-2 self-start justify-self-start rounded-[2.5rem] overflow-hidden max-h-[310px] md:max-h-[320px]'>
              <Image src={ImgMessagePhone} objectFit='cover' width={500} height={479} alt='persona enviando un mensaje atravez de su telefono mobile' />
            </div>
            <div className='col-start-1 row-start-1 md:row-start-1 md:row-span-2 col-span-2 self-end ml-8 mt-8 md:mb-5 '>
              <Image src={ImgMessageSend} alt='ilustracion de un sobre en movimiento' />
            </div>
            <header className='md:col-start-2 md:row-start-1 pt-7'>
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
