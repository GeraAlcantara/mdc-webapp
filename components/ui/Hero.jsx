import Image from 'next/image';
import Link from "next/link";
// @ts-ignore
import imgHero from '../../public/7250d493.webp'

function Hero() {
  return (
    <section>
      <div className='mdc-ui-container'>
        <div className="flex flex-wrap sm:landscape:flex-wrap md:portrait:justify-center">
          <div className=' md:w-1/2 py-2 mb-8 md:py-8  ' >
            <h1 className='text-center md:text-left md:portrait:text-center text-7xl md:text-7xl xl:text-9xl leading-[60px] text-accent font-extrabold pb-8'>
              <small className='text-white text-2xl md:text-4xl xl:text-6xl leading-normal flex-1'>Concientización de</small>
              <br></br>Seguridad{" "}
            </h1>
            <div className='my-4 pb-4 w-4/5 text-center  md:landscape:text-left  mx-auto sm:mx-auto md:mx-0 md:portrait:mx-auto'>
              <p>Sus empleados podrían ser el punto más debil en la infrestructura de seguridad en su empresa. !Hágalos más fuertes!</p>
            </div>
            <div className='flex justify-between md:justify-start'>
              <div className='flex justify-center items-center rounded-lg bg-secondary px-12 py-2 mx-2'>
                <Link href='soluciones'>
                  <a className=' align-middle leading-none'>Soluciones</a>
                </Link>
              </div>
              <Link href='https://vimeo.com/425231198'>
                <a className='underline px-2 md:ml-8'>Vea Nuestro Demo Reel</a>
              </Link>
            </div>
          </div>
          <div className='mx-auto mb-8 md:my-4 md:flex md:items-center' >
            <div className='relative h-[300px] w-[300px] ' >
            <Image src={imgHero} alt="test images" priority placeholder='blur' layout='responsive' objectFit='contain' ></Image>

            </div>
          </div>

        </div>
        
      </div>

    </section>
  );
}

export default Hero;
