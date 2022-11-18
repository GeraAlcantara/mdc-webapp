import React from "react";
import FormContact from "./FormContact";

function ContactForm() {
  return (
    <div className='py-5 px-7 xl:py-10 xl:px-14 bg-slate-200 rounded-3xl h-full'>
      <div className='flex flex-col justify-center items-center gap-4 pt-4'>
        <h1 className='text-secondary text-4xl font-bold '>Escríbenos</h1>
        <p className='text-gray-900 font-light text-xl'>Envianos tu nombre y datos de contacto.</p>
      </div>
      <div className='pt-8'>
        <FormContact />
      </div>
    </div>
  );
}

export default ContactForm;
