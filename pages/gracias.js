import Head from "next/head";
import React from "react";

function gracias() {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='servicios'
          /* TODO: Descripcion meta */
          content='Descripcion para pagina gracias por contactarnos'
        />
        <title>Mexico Development Center | Gracias</title>
      </Head>
      <div className='pt-[68px] h-[600px] flex justify-center items-center'>
        <div>
          <h1 className='text-4xl font-bold text-center'>Gracias por contactarnos</h1>
        </div>
      </div>
    </>
  );
}

export default gracias;
