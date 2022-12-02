import HelperHead from "../../components/helpers/HelperHead";
import { DataHeadProd } from "../../components/data/DataHeader";
import Image from "next/image";
import Link from "next/link";
import CheckMiddleImg from "../../public/heroProductosCheckbackMiddle.png";
import CheckBackImg from "../../public/heroProductosCheckback.png";
import CheckFrontImg from "../../public/heroProductosCheckbackFront.png";
import ProdHeroIconImg from "../../public/heroProductosIcon.png";
import ProdHeroGirlImg from "../../public/heroProductosGirl.png";
import { RiPaypalFill, RiVisaLine, RiMastercardFill } from "react-icons/ri";
import ModalDemoReel from "../../components/ui/ModalDemoReel";
import TabsCarousel from "../../components/ui/TabsCourses";
import IconLibreria from "../../public/icons/libreria.svg";
import IconShopingCard from "../../public/icons/planePrecios.svg";
import BannerCTContact from "../../components/ui/BannerCTContact";
import ImgBannerProd from "../../public/bannerProds.jpg";
import PricesSection from "../../components/ui/PricesSection";
import TabletImg from "../../public/tablet_card.png";
import WomanMobileImg from "../../public/woman_mobile.jpg";

function Productos() {
  return (
    <>
      <HelperHead {...DataHeadProd} />
      <div className='pt-[68px]  '>
        <div className='p-4 md:p-6 lg:p-10 container mb-20 flex flex-col-reverse lg:flex-row lg:gap-8 bg-gradient-to-b from-[#1c3d5c] via-[#1c3d5c]/30 to-bg_primary rounded-t-3xl mdc-ui-container min-h-[calc(100vh-70px)] lg:min-h-0 justify-around lg:items-center '>
          <div className='lg:w-1/2'>
            <h1 className='text-5xl lg:text-8xl text-accent font-extrabold'>
              <small className='text-brandWhite text-2xl lg:text-6xl font-bold'>Librería de</small>
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
          <div className='mx-4 relative '>
            <IconLibreria className='w-20 h-auto' />
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
          <BannerCTContact imgBanner={ImgBannerProd} txtalt='grupo de colaboradores reunidos en su area de trabajo' />
        </div>
        {/* Divider */}
        <div className='flex mdc-ui-container justify-center items-end m-auto xl:my-16 '>
          <div className='bg-brandBlue-400 h-[1px] w-1/2 flex-1'></div>
          <div className='mx-4 relative'>
            <IconShopingCard className='w-20 h-auto' />
          </div>
          <div className='bg-brandBlue-400 h-[1px] flex-1'></div>
        </div>
        {/* Divider END */}
        {/* Cards Prices */}
        <PricesSection />
        {/* Metodos de pagos  */}
        <section className='mdc-ui-container my-20 text-gray-700'>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10'>
            <div>
              <p className='text-gray-200 text-xl text-center md:text-left'>Precios en moneda local. Múltiples métodos de pago</p>
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
              <p className='text-3xl font-bold text-center md:text-left'>¿Dudas? Te llamamos ahora</p>
              <div className='w-full flex flex-col md:flex-row justify-center items-center gap-0 lg:gap-10'>
                {/* form with input phone number and must be a valid phone number country code México +52 and Llámame ahora button */}
                <form action='' className='w-full md:w-3/5 xl:w-1/2 '>
                  <div className='flex flex-col lg:flex-row items-center gap-4 px-10 w-full'>
                    <label htmlFor='phone' className='sr-only'>
                      Ingresa tu número de teléfono
                    </label>
                    <div className='relative '>
                      <select name='phone' id='phone' className='absolute bg-transparent top-1 text-brandWhite rounded-md p-2 outline-none bg-brandBlue-400 '>
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
                    {/* submit button */}
                    <button type='submit' className='bg-brandBlue-400 text-brandWhite font-bold px-8 py-2 md:flex-shrink-0 rounded-lg '>
                      Llámame ahora
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Big Cards  */}
        <section className='mdc-ui-container py-10'>
          {/* Big Card with Text */}
          <div className='flex flex-col md:flex-row gap-4 lg:gap-10 h-full lg:min-h-[350px] xl:min-h-[600px] transition-all duration-300'>
            <div className='flex flex-col md:flex-row xl:gap-10 w-full md:w-4/6 '>
              <div className='bg-gradient-to-br from-[#386fdd] via-[#439dc0] to-[#67dd80] rounded-3xl flex flex-col-reverse md:grid md:grid-cols-3 px-4 md:px-8 pt-4 '>
                <div className='relative md:row-start-1 md:col-start-1 md:col-span-2 h-[350px] md:h-auto w-full mt-4 md:mt-0'>
                  <Image src={TabletImg} layout='fill' loading='eager' objectFit='contain' draggable='false' placeholder='blur' alt='Tablet con estadisticas' />
                </div>
                <div className='md:col-start-2 col-span-2 md:row-start-1 text-center md:text-right flex flex-col gap-2 md:gap-6 md:justify-center'>
                  <p className='text-brandWhite  xl:text-2xl lg:pl-8 xl:pl-16'>Cursos exportados en formato SCORM y listos para integrarse en cualquier</p>

                  <h3 className='text-4xl xl:text-6xl 2xl:text-7xl font-extrabold text-bg_primary'>
                    Plataforma <br />
                    <span className='text-6xl xl:text-8xl 2xl:text-9xl '>LMS</span>
                  </h3>
                  <div className='flex justify-center md:justify-end'>
                    <Link href='/contacto'>
                      <a className='text-gray-900 uppercase py-2 px-4 bg-white rounded-full inline-flex'>Contactanos</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative w-full md:w-2/6 rounded-3xl overflow-hidden shrink-0 min-h-[350px] '>
              <Image src={WomanMobileImg} objectFit='cover' objectPosition='right' layout='fill' alt='woman' />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Productos;
