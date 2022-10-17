import Image from "next/image";
import IberostarLogo from "../../public/clientes/iberostarLogo.png";
import MedixLogo from "../../public/clientes/medixLogo.png";
import CemexLogo from "../../public/clientes/cemexLogo.png";
import IbmLogo from "../../public/clientes/ibmLogo.png";
import LiverpoolLogo from "../../public/clientes/liverpoolLogo.png";

function Clients() {
  return (
    <section className='py-4 lg:py-8 xl:py-12'>
      <div className='mdc-ui-container flex flex-col gap-8 md:flex-row justify-around items-center'>
        <div className='w-24'>
          <Image src={IberostarLogo} alt='Iberostar Logo'></Image>
        </div>
        <div className='w-24'>
          <Image src={MedixLogo} alt='Medix Logo'></Image>
        </div>
        <div className='w-32'>
          <Image src={CemexLogo} alt='Cemex Logo'></Image>
        </div>
        <div className='w-24'>
          <Image src={IbmLogo} alt='IBM Logo'></Image>
        </div>
        <div className='w-32'>
          <Image src={LiverpoolLogo} alt='IBM Logo'></Image>
        </div>
      </div>
    </section>
  );
}

export default Clients;
