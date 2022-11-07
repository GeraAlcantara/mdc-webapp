import Image from "next/image";
import ImageHolder from "../../public/videoreel.jpg";

function CardsCarousel() {
  return (
    <div className='flex flex-col w-[290px] h-[380px] rounded-2xl bg-brandBlue-500 overflow-hidden flex-shrink-0 flex-grow-0 '>
      <div className='h-[230px] w-full relative'>
        <Image src={ImageHolder} layout='fill' objectFit='cover' alt='some alt text' />
      </div>
      <div className='p-8'>
        <h3 className='text-2xl text-gray-100'>Prácticas escenciales</h3>
        <p className='text-gray-300 text-sm mt-2'>
          <span>8</span> Temas, <span>35</span> Lecciones
        </p>
        <p className='text-gray-300 text-sm'>Duracion: 30 minutos (Aprox.)</p>
      </div>
    </div>
  );
}

export default CardsCarousel;
