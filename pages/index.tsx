import Image from 'next/image'
import { NextPage } from 'next/types'
import { withIronSessionSsr } from 'iron-session/next'

import HelperHead from '../lib/helpers/HelperHead'
import { DataHeadHome } from '../lib/data/DataHeader'
import { SectionsData } from '../lib/data/SectionTimeLineData'
import Capacite from '../public/icons/capacitePersonal.svg'
import Clients from '../components/Clients'
import Timeline from '../components/Timeline/Timeline'
import BannerParallax from '../components/ui/BannerParallax'
import SectionTimeline from '../components/SectionTimeline'
import ModalDemoReel from '../components/ui/ModalDemoReel'
import MonitorVideoReel from '../public/videoreel.png'
import FormContact from '../components/FormContact/FormContact'
import { carouselData } from '../components/Carousel/Carousel.constanst'
import Carousel from '../components/Carousel/Carousel'

import { newCaptchaImages } from './api/captcha-image'

const Home: NextPage<CaptchaKeyProps> = ({ defaultCaptchaKey }) => {
  return (
    <>
      <HelperHead {...DataHeadHome} />

      <Carousel SlidesData={carouselData} />

      <Clients />
      <div className="lg:text-lg md:text-center bg-white text-gray-900 py-4 lg:py-8 xl:py-12">
        <div className="mdc-ui-container">
          <Capacite className="text-8xl m-auto mb-4" />
          <h2 className="text-3xl font-extrabold pb-8 text-center">¿Por qué e-learning?</h2>
          <p className="w-4/5 m-auto pb-8">
            En la actualidad el e-learning se ha convertido en una de las mejores herramientas para
            cumplir los objetivos de formación de las empresas. Nuestras soluciones le permitirán
            <strong> reducir su inversión</strong> de tiempo y dinero,
            <strong> ofrecer flexibilidad</strong> de ubicación y horario a los usuarios, además de
            facilitar el <strong>seguimiento de métricas</strong> y logros alcanzados.
          </p>
        </div>
        <div className="mdc-ui-container text-left my-6 lg:my-10 xl:my-14">
          <ul className="flex flex-col lg:flex-row justify-between ">
            <li className="p-4 xl:p-6">
              <h2 className="font-extrabold text-xl xl:text-2xl flex gap-x-1 ">
                <span>✔</span>
                <span>Servicio completo de producción de cursos</span>
              </h2>
              <p className="pl-8 mt-2 ">
                Crea una capacitación personalizada para tu empresa. Cuéntanos qué necesitas y
                nosotros lo desarrollamos.
              </p>
            </li>

            <li className="p-4 xl:p-6">
              <h2 className="font-extrabold text-xl xl:text-2xl flex gap-x-1 ">
                <span>✔</span>
                <span>E-learning de las más alta calidad en tiempo récord</span>
              </h2>
              <p className="pl-8 mt-2 self-end">
                Con más de 15 años de experiencia, nuestro equipo trabaja de forma ágil para
                entregar los mejores resultados en el menor tiempo posible.
              </p>
            </li>
            <li className="p-4 xl:p-6">
              <h2 className="font-extrabold text-xl xl:text-2xl flex gap-x-1 ">
                <span>✔</span> <span>Diseño gráfico ganador de premios</span>
              </h2>
              <p className="pl-8 mt-2">
                Apariencia profesional y estimulante que fortalece el aprendizaje e impulsa la
                identidad corporativa de tu empresa.
              </p>
            </li>
          </ul>
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
