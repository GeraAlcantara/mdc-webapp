import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next/types'
import { withIronSessionSsr } from 'iron-session/next'

import HelperHead from '../lib/helpers/HelperHead'
import { DataHeadHome } from '../lib/data/DataHeader'
import Hero from '../components/Hero'
import { SectionsData } from '../lib/data/SectionTimeLineData'
import Capacite from '../public/icons/capacitePersonal.svg'
import Clients from '../components/Clients'
import Timeline from '../components/ui/inicio/Timeline'
import BannerParallax from '../components/ui/BannerParallax'
import SectionTimeline from '../components/ui/inicio/SectionTimeline'
import ModalDemoReel from '../components/ui/ModalDemoReel'
import MonitorVideoReel from '../public/videoreel.png'
import FormContact from '../components/ui/FormContact'

import { newCaptchaImages } from './api/captcha-image'

const Home: NextPage<CaptchaKeyProps> = ({ defaultCaptchaKey }) => {
  return (
    <>
      <HelperHead {...DataHeadHome} />
      <Hero>
        <h1 className=" portrait:text-center md:portrait:text-left md:text-left text-6xl md:text-7xl xl:text-9xl leading-[60px] text-accent font-extrabold md:pb-8">
          <small className="text-brandWhite text-2xl md:text-4xl xl:text-6xl leading-normal flex-1">
            Concientización de
          </small>
          <br />
          Seguridad
        </h1>
        <div className="my-4 pb-4 w-full sm:landscape:w-1/2 md:w-2/4">
          <p className="text-center md:text-left xl:text-xl max-w-prose ">
            Sus colaboradores podrían ser el punto más débil en la infraestructura de seguridad en
            su empresa. ¡Hágalos más fuertes!
          </p>
        </div>
        <div className="flex justify-around md:justify-start sm:landscape:w-1/2">
          <div className="">
            <Link href="/libreria">
              <a className=" flex justify-center items-center uppercase rounded-full bg-secondary px-8 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-[.98] hover:contrast-150 transition-all  ">
                Soluciones
              </a>
            </Link>
          </div>
        </div>
      </Hero>
      <Clients />
      <div className="lg:text-lg md:text-center bg-white text-gray-900 py-4 lg:py-8 xl:py-12">
        <div className=" p-10">
          <Capacite className="text-8xl m-auto mb-4" />
          <h2 className="text-3xl font-extrabold  pb-8 text-center">Capacite a su personal</h2>
          <p className="max-w-prose m-auto pb-8">
            En la actualidad, la educación a distancia es la mejor herramienta para cumplir los
            objetivos de formación de las empresas. Nuestras soluciones de e-learning le permitirán
            reducir su inversión de tiempo y dinero, al mismo tiempo que otorgan flexibilidad sobre
            la ubicación y horario de las capacitaciones, y posibilitan un mejor seguimiento de las
            métricas y los logros alcanzados.
          </p>
        </div>
      </div>
      {/* Section Timeline */}
      <section className="relative ">
        {/* timeline  */}
        <div className="flex justify-center">
          <Timeline />
        </div>

        {SectionsData.map((section, i) => (
          <SectionTimeline
            key={i}
            ColorSchemaDark={section.ColorSchemaDark}
            MainImage={section.MainImage}
            colorClass={section.colorClass}
            excerpt={section.excerpt}
            layoutLeft={section.layoutLeft}
            link={section.link}
            sideImage={section.sideImage}
            title={section.title}
          />
        ))}
      </section>

      {/* video reel Section */}
      <section className="flex items-center pb-8 md:pt-28 md:pb-[8.5rem] ">
        <div className="mdc-ui-container">
          <div className="flex flex-col md:flex-row justify-between bg-gradient-to-br from-[#386fdd] via-[#439dc0] to-[#67dd80] rounded-3xl relative xl:py-12">
            <div className="px-10 py-6 xl:px-20 w-full lg:w-1/2 lg:text-left">
              <div className="pb-8">
                <h3 className="text-6xl md:text-6xl lg:text-8xl font-extrabold">
                  <small className="text-2xl md:text-4xl xl:text-[2.75rem] text-gray-900">
                    Una Muestra de
                  </small>
                  <br />
                  Nuestro <br /> Trabajo
                </h3>
                <p className="mb-10 tetx-lg md:text-xl font-semibold text-gray-900 mt-4 md:w-[34ch]">
                  Esta es una pequeña muestra de nuestro trabajo. Dé clic en la pantalla para ver el
                  video.
                </p>
                <div className="md:pb-20">
                  <ModalDemoReel btnTheme="btnDark" />
                </div>
              </div>
            </div>
            <div className="hidden w-1/3 lg:w-[48%] md:flex items-center justify-center absolute top-0 right-0 h-full overflow-hidden my-4 ">
              <div className=" absolute w-full h-[90%]">
                <Image
                  alt="Monitor computadora de escritorio"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  src={MonitorVideoReel}
                />
              </div>
            </div>
            <div className="md:hidden flex justify-center p-4">
              <div className="relative md:absolute w-[90%] h-[90%] ">
                <Image
                  alt="Monitor computadora de escritorio"
                  layout="responsive"
                  objectFit="contain"
                  src={MonitorVideoReel}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-16 xl:py-24">
          <BannerParallax />
        </div>
      </section>

      <section className="mdc-ui-container py-10">
        <header className="mb-10">
          <hgroup className="text-center">
            <h2 className="text-xl mb-2">Ponte en contacto</h2>
            <h3 className="text-4xl xl:text-5xl font-bold">¿Cómo podemos ayudarte?</h3>
          </hgroup>
        </header>
        <FormContact defaultCaptchaKey={defaultCaptchaKey} />
      </section>
    </>
  )
}

export default Home

export const getServerSideProps = withIronSessionSsr(
  async function getIronSession({ req }) {
    {
      if (!req.session.captchaImages) {
        req.session.captchaImages = newCaptchaImages()
        await req.session.save()
      }

      return {
        props: {
          defaultCaptchaKey: new Date().getTime()
        }
      }
    }
  },
  {
    cookieName: 'MDC_SESSION',
    password: process.env.SESSION_SECRET as string
  }
)
