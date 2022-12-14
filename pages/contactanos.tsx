import HelperHead from "../lib/helpers/HelperHead";
import { DataHeadContact } from "../lib/data/DataHeader";
import { withIronSessionSsr } from "iron-session/next";
import Address from "../components/ui/Address";
import FormContact from "../components/ui/FormContact";
import IconContacto from "../public/icons/contacto.svg";
import { newCaptchaImages } from "./api/captcha-image";

export default function contactanos({ defaultCaptchaKey }: { defaultCaptchaKey: string }) {
  return (
    <>
      <HelperHead {...DataHeadContact} />
      <div className='pt-[68px]'>
        {/* Divider */}
        <div className='flex mdc-ui-container justify-center items-end m-auto xl:my-16 my-8 '>
          <div className='bg-brandBlue-400 h-[1px] w-1/2 flex-1'></div>
          <div className='mx-4 relative'>
            <IconContacto className='w-20 h-auto' />
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
          <div className=''>
            <div className=''>
              <FormContact defaultCaptchaKey={defaultCaptchaKey} />
            </div>
            <div className='py-10 '>
              <Address />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getIronSession({ req }) {
    {
      if (!req.session.captchaImages) {
        req.session.captchaImages = newCaptchaImages();
        await req.session.save();
      }
      return {
        props: {
          defaultCaptchaKey: new Date().getTime(),
        },
      };
    }
  },
  {
    cookieName: "MDC_SESSION",
    password: process.env.SESSION_SECRET as string,
  }
);
