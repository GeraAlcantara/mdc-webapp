import Head from "next/head";
import Image from "next/image";
import CheckMiddleImg from "../../public/heroProductosCheckbackMiddle.png";
import CheckBackImg from "../../public/heroProductosCheckback.png";
import CheckFrontImg from "../../public/heroProductosCheckbackFront.png";
import ProdHeroIconImg from "../../public/heroProductosIcon.png";
import ProdHeroGirlImg from "../../public/heroProductosGirl.png";
import { RiUserFill, RiPaypalFill, RiVisaLine, RiMastercardFill } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import ModalDemoReel from "../../components/ui/ModalDemoReel";
import TabsCarousel from "../../components/ui/TabsCourses";
import BoxOpen from "../../public/icons/boxOpen.png";
import ImgShopingCard from "../../public/icons/shoppingCard.png";
import BannerProd from "../../components/ui/BannerProd";
import PricesCard from "../../components/ui/PricesCard";

function Productos() {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          /* TODO: Describcion meta */
          content='Descripcion para pagina productos'
        />
        <title>Mexico Development Center | Productos</title>
      </Head>
      <div className='pt-[68px]  '>
        <div className='p-4 md:p-6 lg:p-10 container mb-20 flex flex-col-reverse lg:flex-row lg:gap-8 bg-gradient-to-b from-[#1c3d5c] via-[#1c3d5c]/30 to-bg_primary rounded-t-3xl mdc-ui-container min-h-[calc(100vh-70px)] lg:min-h-0 justify-around lg:items-center '>
          <div className='lg:w-1/2'>
            <h1 className='text-5xl lg:text-8xl text-accent font-extrabold'>
              <small className='text-white text-2xl lg:text-6xl font-bold'>Librería de</small>
              <br />
              Cursos
            </h1>
            <p className=' my-2 lg:my-8 text-lg lg:text-xl md:max-w-[40ch]'>
              Conoce nuestro catálogo de cursos con &quot;llave en mano&quot;, exportados en formato SCORM y listos para integrarse en cualquier plataforma LMS.
            </p>
            <div className='pt-2'>
              <ModalDemoReel btnTheme='btnBlue' />
            </div>
          </div>
          <div className='relative w-full xl:w-1/2'>
            <div className='relative top-0 left-0 grid grid-cols-7 grid-rows-3'>
              <div className='row-start-1 col-start-3 p-2 opacity-30 flex items-end'>
                <Image loading='eager' src={CheckBackImg} alt='icono de marca de verificacion ' />
              </div>
              <div className='row-start-2 col-span-2 row-span-2 col-end-8'>
                <Image src={ProdHeroIconImg} alt='empleado de construcion viendo su tableta ' />
              </div>
              <div className='row-start-1 col-start-2 row-span-2 pt-4 opacity-90 flex items-center'>
                <Image loading='eager' src={CheckMiddleImg} alt='icono de marca de verificacion ' />
              </div>
              <div className='col-start-1 row-start-1 row-end-4 col-end-7  '>
                <Image loading='eager' objectFit='cover' objectPosition='top center' src={ProdHeroGirlImg} alt='empleada de construcion viendo su tableta ' />
              </div>
              <div className='row-start-2 col-start-2 col-span-2 opacity-70 pl-3 pt-3'>
                <Image loading='eager' src={CheckFrontImg} alt='icono de marca de verificacion ' />
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className='flex mdc-ui-container justify-center items-end m-auto my-16 '>
          <div className='bg-brandBlue-400 h-[1px] w-1/2 flex-1'></div>
          <div className='mx-4 relative w-20 h-20'>
            <Image src={BoxOpen} width={171} layout='responsive' height={180} alt='icono de caja abierta' />
          </div>
          <div className='bg-brandBlue-400 h-[1px] flex-1'></div>
        </div>
        {/* Divider END */}
        {/* Section Libreria  */}
        <section className='lg:m-10'>
          <header>
            <hgroup className='text-center'>
              <p className='text-xl'>Conoce toda nuestra</p>
              <h2 className='text-4xl font-bold'>Librería lista para usarse.</h2>
            </hgroup>
          </header>
          {/* tabs filter carrousel */}
          <TabsCarousel />
          <div className='flex flex-col lg:flex-row gap-8'></div>
        </section>
        {/* parallaxBaner */}
        <div className='py-16 xl:py-24'>
          <BannerProd />
        </div>
        {/* Divider */}
        <div className='flex mdc-ui-container justify-center items-end m-auto xl:my-16 '>
          <div className='bg-brandBlue-400 h-[1px] w-1/2 flex-1'></div>
          <div className='mx-4 relative w-20 h-20'>
            <Image src={ImgShopingCard} width={171} layout='responsive' height={180} alt='icono de caja abierta' />
          </div>
          <div className='bg-brandBlue-400 h-[1px] flex-1'></div>
        </div>
        {/* Divider END */}
        {/* Card */}
        <div className=' my-10 mdc-ui-container  '>
          <div className='grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-2 lg:gap-0 justify-center '>
            <PricesCard title='Cursos' price={50} description='Lorem ipsum dolor sit amet, consectetur elit. ' />
            <PricesCard title='LMS' price={30} description='uisquam rerum aperiam id fugiat nemo tempora.' />
            <PricesCard title='Curso + LMS' price={70} description='Natus itaque iste rem sapiente maxime ullam alias?' selected={true} />
          </div>
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
        <div className='mdc-ui-container my-10 '>
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

        {/* Metodos de pagos  */}
        <section className='mdc-ui-container my-20 text-gray-700'>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10'>
            <div>
              <p className='text-gray-200 text-xl'>Precios en moneda local. Múltiples métodos de pago</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex flex-col items-center'>
                <RiVisaLine className='text-6xl ' />
              </div>
              <div className='flex flex-col items-center'>
                <RiPaypalFill className='text-4xl ' />
              </div>
              <div className='flex flex-col items-center'>
                <RiMastercardFill className='text-4xl ' />
              </div>
            </div>
          </div>
        </section>
        {/* Dudas Agenda llamada */}

        <section>
          <div className='mdc-ui-container my-20'>
            <div className='flex flex-col items-center gap-8'>
              <p className='text-3xl font-bold '>¿Dudas? Te llamamos ahora</p>
              <div className='w-full flex flex-col md:flex-row justify-center items-center gap-0 lg:gap-10'>
                {/* form with input phone number and must be a valid phone number country code México +52 and Llámame ahora button */}
                <form action='' className='w-3/4 md:w-3/5 xl:w-1/2 '>
                  <div className='flex flex-col lg:flex-row items-center gap-4 px-10 w-full'>
                    <label htmlFor='phone' className='sr-only'>
                      Ingresa tu número de teléfono
                    </label>
                    <div className='relative '>
                      <select name='phone' id='phone' className='absolute bg-transparent top-1 text-white rounded-md p-2 outline-none bg-brandBlue-400 '>
                        <option className='bg-brandBlue-500' value='+52'>
                          +52
                        </option>
                        <option className='bg-brandBlue-500' value='+1'>
                          +1
                        </option>
                        <option className='bg-brandBlue-500' value='+2'>
                          +2
                        </option>
                      </select>
                      <input
                        lang='es'
                        type='tel'
                        name='phone'
                        id='phone'
                        className='bg-transparent border border-secondary text-gray-200 text-xl focus:outline-none focus:border-brandBlue-400 rounded-lg pl-20 py-2 '
                      />
                    </div>
                    <button className='bg-brandBlue-400 text-white font-bold px-8 py-2 flex-shrink-0 rounded-lg '>Llámame ahora</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* TABS Detalles */}
      </div>
    </>
  );
}
export default Productos;
