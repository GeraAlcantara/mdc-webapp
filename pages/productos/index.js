import Head from "next/head";
import Image from "next/image";
import CheckMiddleImg from "../../public/heroProductosCheckbackMiddle.png";
import CheckBackImg from "../../public/heroProductosCheckback.png";
import CheckFrontImg from "../../public/heroProductosCheckbackFront.png";
import ProdHeroIconImg from "../../public/heroProductosIcon.png";
import ProdHeroGirlImg from "../../public/heroProductosGirl.png";
import { RiUserFill } from "react-icons/ri";
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
      </div>
    </>
  );
}
export default Productos;
