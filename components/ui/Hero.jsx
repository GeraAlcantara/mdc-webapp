import Link from "next/link";

function Hero() {
  return (
    <div className='w-1/2 h-[80vh] py-20'>
      <header>
        <h1 className='text-[6.4rem] leading-[.6] text-accent font-extrabold '>
          <small className='text-white text-5xl leading-normal'>Concientización de</small>
          <br></br>Seguridad{" "}
        </h1>
      </header>
      <div className='py-10'>
        <p>Sus empleados podrían ser el punto más debil en la infrestructura de seguridad en su empresa. !Hágalos más fuertes!</p>
      </div>
      <div className='flex flex-wrap  justify-between '>
        <div className='flex  justify-center items-center rounded-lg bg-secondary px-12 py-2 mb-3'>
          <Link href='soluciones'>
            <a className=' align-middle leading-none'>Soluciones</a>
          </Link>
        </div>
        <Link href='https://vimeo.com/425231198'>
          <a className='underline'>Vea Nuestro Demo Reel</a>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
