import Image from "next/image";
import { useEffect, useState } from "react";

function Captcha({ onChange, captchaKey, ...props }) {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const imageLocation = new Array(9).fill(null).map((value, index) => {
    return `/api/captcha-image?index=${index}&key=${captchaKey}`;
  });
  /* when selectedIndexes change run onChanges that will pass to parent */
  useEffect(() => {
    console.log(selectedIndexes);
    onChange(selectedIndexes);
  }, [selectedIndexes, onChange]);
  // if captchaKey change clear selectedIndexes
  useEffect(() => {
    setSelectedIndexes([]);
  }, [captchaKey]);

  /* toggle index en el array de selectedIndexes  */
  function toggleIndex(index) {
    /* setiamos un nuevo estado tomando el estado anterior y lo filtramos para saber si el index que le pasamos ya esta en el array si es asi lo va ha excluir logrando que en cada click si no esta en la lista lo incluya y si ya estava lo excluya */
    setSelectedIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((value) => value !== index);
      } else {
        return [...prev, index];
      }
    });
  }

  return (
    <div className='flex flex-col flex-1'>
      <div className='bg-secondary p-4 '>
        <p className='text-lg'>Seleccione las personas con un</p>
        <p className='text-4xl '>
          <strong className='font-extrabold'>smartphone</strong>
        </p>
      </div>
      <div className=' bg-white w-full  grid grid-cols-3 gap-1 '>
        {imageLocation.map((imageUrl, idx) => (
          <div
            key={idx + "imagewrapper"}
            className={` ${selectedIndexes.includes(idx) ? "relative after:absolute after:inset-0 after:bg-brandBlue-400/60" : ""}`}
            onClick={() => toggleIndex(idx)}
          >
            <picture>
              <source srcSet={imageUrl} type='image/jpg' />
              <img src={imageUrl} draggable='false' alt='captcha image' className='w-full' />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Captcha;
