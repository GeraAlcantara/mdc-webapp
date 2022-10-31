import Head from "next/head";
import Image from "next/image";
import Employee from "../../public/employeetablet.png";
import { RiUserFill } from "react-icons/ri";
import ModalDemoReel from "../../components/ui/ModalDemoReel";
import TabsCarousel from "../../components/ui/TabsCarousel";

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
      <div className='pt-[68px] mdc-ui-container'>
        <div className='p-10 mb-20 flex flex-col lg:flex-row gap-8 bg-gradient-to-b from-[#1c3d5c] via-[#1c3d5c]/30 to-bg_primary rounded-t-3xl'>
          <div>
            <h1 className='text-7xl text-secondary font-extrabold'>
              <small className='text-white text-4xl font-normal'>Librería de</small>
              <br />
              Cursos
            </h1>
            <p className='my-8 text-lg max-w-[40ch]'>
              Conoce nuestro catálogo de cursos con &quot;llave en mano&quot;, exportados en formato SCORM y listos para integrarse en cualquier plataforma LMS.
            </p>
            <div>
              <ModalDemoReel btnTheme='btnRingGreen' />
            </div>
          </div>
          <div className='m-auto'>
            <Image className='pb-4' src={Employee} alt='empleado de construcion viendo su tableta ' />
          </div>
        </div>
        {/* Section Libreria  */}
        <section className='m-10'>
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
        {/* Card */}
        <div className=' mb-10 '>
          <div className='borderAnimated  '>
            <i className='opacity-0 transition-all'></i>
            <div className='p-6 border-cyan-800/20 rounded-xl border-[1px] flex flex-col gap-4 relative'>
              <header>
                <h1 className='font-RobotoCondense font-bold text-3xl uppercase mb-2'>Cursos</h1>
                <hr className='border-cyan-800' />
                <div className='pt-4'>
                  <p className='text-accent text-5xl font-bold mb-2'>
                    $50 <small className='uppercase text-2xl'>mxn</small>
                  </p>
                  <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </header>
              <div className='text-gray-200 flex gap-2 items-end '>
                <RiUserFill className='text-lg' />
                <span className='text-sm leading-none text-gray-400 '>1 Usuario</span>
              </div>
              <div>
                <button className='border-accent border-2 rounded-lg py-1 w-full'> Comprar plan</button>
              </div>
              <div className='text-gray-600 text-center'>
                <p>Regala este plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Productos;
