import Head from "next/head";
import { withIronSessionSsr } from "iron-session/next";
import { newCaptchaImages } from "./api/captcha-image";
import Address from "../components/ui/Address";
// @ts-ignore
import CaptchaForm from "../components/ui/CaptchaForm";
import FormContact from "../components/ui/FormContact";
import IconShopingCard from "../public/icons/planePrecios.svg";

export default function contactanos({ defaultCaptchaKey }) {
  console.log("defaultCaptchaKey", defaultCaptchaKey);
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='servicios'
          /* TODO: Descripcion meta */
          content='Descripcion para pagina contactanos'
        />
        <title>Mexico Development Center | Gracias</title>
      </Head>
      <div className='pt-[68px]'>
        {/* Divider */}
        <div className='flex mdc-ui-container justify-center items-end m-auto xl:my-16 my-8 '>
          <div className='bg-brandBlue-400 h-[1px] w-1/2 flex-1'></div>
          <div className='mx-4 relative'>
            <IconShopingCard className='w-20 h-auto' />
          </div>
          <div className='bg-brandBlue-400 h-[1px] flex-1'></div>
        </div>
        {/* Divider END */}
        {/* contacto */}
        <section className='mdc-ui-container '>
          <header className='mb-10'>
            <hgroup className='text-center'>
              <h1 className='text-xl'>Ponte en contacto</h1>
              <h2 className='text-4xl font-bold'>¿Cómo podemos ayudarte?</h2>
            </hgroup>
          </header>
          <div className='py-10'>
            <div className=''>
              <Address />
            </div>
            <div className='py-10 '>
              <FormContact defaultCaptchaKey={defaultCaptchaKey} />
            </div>
          </div>
        </section>
        {/* <div className='mt-[68px] h-[calc(100vh-68px)]  '>
          <CaptchaForm defaultCaptchaKey={defaultCaptchaKey} />
        </div> */}
      </div>
    </>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    /* using iron session check if captchaImages are in session */
    try {
      if (!req.session.captchaImages) {
        req.session.captchaImages = newCaptchaImages();
        await req.session.save();
      }
    } catch (error) {
      console.log("error", error);
    }
    return {
      props: {
        defaultCaptchaKey: new Date().getTime(),
      },
    };
  },
  {
    cookieName: "MDC_SESSION",
    password: process.env.SESSION_SECRET,
  }
);
