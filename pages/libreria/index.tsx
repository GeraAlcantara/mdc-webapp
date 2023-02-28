import Image from 'next/image'
import Link from 'next/link'
import { withIronSessionSsr } from 'iron-session/next'

import HelperHead from '../../lib/helpers/HelperHead'
import { DataHeadProd } from '../../lib/data/DataHeader'
import CheckMiddleImg from '../../public/heroProductosCheckbackMiddle.png'
import CheckBackImg from '../../public/heroProductosCheckback.png'
import CheckFrontImg from '../../public/heroProductosCheckbackFront.png'
import ProdHeroIconImg from '../../public/heroProductosIcon.png'
import ProdHeroGirlImg from '../../public/heroProductosGirl.png'
import ModalDemoReel from '../../components/ui/ModalDemoReel'
import IconLibreria from '../../public/icons/libreria.svg'
import BannerCTContact from '../../components/ui/BannerCTContact'
import ImgBannerProd from '../../public/bannerProds.jpg'
import TabletImg from '../../public/tablet_card.png'
import WomanMobileImg from '../../public/woman_mobile.jpg'
import { newCaptchaImages } from '../api/captcha-image'
import FormContact from '../../components/FormContact/FormContact'
import LibreriaCursos from '../../components/LibreriaCursos'
import { getAllCourses } from '../../lib/helpers/library'
import { DataCourseLibrarie } from '../../lib/data/DataCourseLibrarie'

interface LibreriaProps {
  defaultCaptchaKey: string
  courses: Course[]
}

function Libreria({ defaultCaptchaKey, courses }: LibreriaProps) {
  return (
    <>
      <HelperHead {...DataHeadProd} />
      <div className="pt-[68px]  ">
        <div className="p-4 md:p-6 lg:p-10 container mb-20 flex flex-col-reverse lg:flex-row lg:gap-8 bg-gradient-to-b from-[#1c3d5c] via-[#1c3d5c]/30 to-bg_primary rounded-t-3xl mdc-ui-container min-h-[calc(100vh-70px)] lg:min-h-0 justify-around lg:items-center ">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-8xl text-accent font-extrabold">
              <small className="text-brandWhite text-2xl lg:text-6xl font-bold">Librería de</small>
              <br />
              Cursos
            </h1>
            <p className=" my-2 lg:my-8 text-lg lg:text-xl md:max-w-[40ch]">
              Conoce nuestro catálogo de cursos con &quot;llave en mano&quot;, exportados en formato
              SCORM y listos para integrarse en cualquier plataforma LMS.
            </p>
            <div className="pt-2">
              <ModalDemoReel btnTheme="btnBlue" />
            </div>
          </div>
          <div className="relative w-full xl:w-1/2">
            <div className="relative top-0 left-0 grid grid-cols-7 grid-rows-3">
              <div className="row-start-1 col-start-3 p-2 opacity-30 flex items-end">
                <Image alt="icono de marca de verificacion " loading="eager" src={CheckBackImg} />
              </div>
              <div className="row-start-2 col-span-2 row-span-2 col-end-8">
                <Image alt="empleado de construcion viendo su tableta " src={ProdHeroIconImg} />
              </div>
              <div className="row-start-1 col-start-2 row-span-2 pt-4 opacity-90 flex items-center">
                <Image alt="icono de marca de verificacion " loading="eager" src={CheckMiddleImg} />
              </div>
              <div className="col-start-1 row-start-1 row-end-4 col-end-7  ">
                <Image
                  alt="empleada de construcion viendo su tableta "
                  loading="eager"
                  objectFit="cover"
                  objectPosition="top center"
                  src={ProdHeroGirlImg}
                />
              </div>
              <div className="row-start-2 col-start-2 col-span-2 opacity-70 pl-3 pt-3">
                <Image alt="icono de marca de verificacion " loading="eager" src={CheckFrontImg} />
              </div>
            </div>
          </div>
        </div>

        {/* Section Libreria  */}

        {/* Divider */}
        <div
          className="flex mdc-ui-container justify-center items-end m-auto my-16 "
          id="catalogoCursos"
        >
          <div className="bg-brandBlue-400 h-[1px] w-1/2 flex-1" />
          <div className="mx-4 relative ">
            <IconLibreria className="w-20 h-auto" />
          </div>
          <div className="bg-brandBlue-400 h-[1px] flex-1" />
        </div>
        {/* Divider END */}
        <section className="lg:m-10">
          <header>
            <div className="text-center">
              <p className="text-xl">Conoce toda nuestra</p>
              <h2 className="text-4xl font-bold">Librería lista para usarse.</h2>
            </div>
          </header>

          <LibreriaCursos courses={courses} />
        </section>

        {/* Big Cards  */}
        <section className="mdc-ui-container py-10">
          {/* Big Card with Text */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-10 h-full lg:min-h-[350px] xl:min-h-[600px] transition-all duration-300">
            <div className="flex flex-col md:flex-row xl:gap-10 w-full md:w-4/6 ">
              <div className="bg-gradient-to-br from-[#386fdd] via-[#439dc0] to-[#67dd80] rounded-3xl flex flex-col-reverse md:grid md:grid-cols-3 px-4 md:px-8 pt-4 ">
                <div className="relative md:row-start-1 md:col-start-1 md:col-span-2 h-[350px] md:h-auto w-full mt-4 md:mt-0">
                  <Image
                    alt="Tablet con estadisticas"
                    draggable="false"
                    layout="fill"
                    loading="eager"
                    objectFit="contain"
                    placeholder="blur"
                    src={TabletImg}
                  />
                </div>
                <div className="md:col-start-2 col-span-2 md:row-start-1 text-center md:text-right flex flex-col gap-2 md:gap-6 md:justify-center">
                  <p className="text-brandWhite  xl:text-2xl lg:pl-8 xl:pl-16">
                    Cursos exportados en formato SCORM y listos para integrarse en cualquier
                  </p>

                  <h3 className="text-4xl xl:text-6xl 2xl:text-7xl font-extrabold text-bg_primary">
                    Plataforma <br />
                    <span className="text-6xl xl:text-8xl 2xl:text-9xl ">LMS</span>
                  </h3>
                  <div className="flex justify-center md:justify-end">
                    <Link href="/contactanos">
                      <span className="text-gray-900 uppercase py-2 px-4 cursor-pointer bg-white rounded-full inline-flex hover:bg-slate-50 transition-all will-change-transform hover:scale-105 duration-150 ease-in">
                        Contáctanos
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full md:w-2/6 rounded-3xl overflow-hidden shrink-0 min-h-[350px] ">
              <Image
                alt="woman"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
                src={WomanMobileImg}
              />
            </div>
          </div>
        </section>
        {/* parallaxBaner */}
        <div className="py-16 xl:py-24">
          <BannerCTContact
            imgBanner={ImgBannerProd}
            txtalt="grupo de colaboradores reunidos en su area de trabajo"
          />
        </div>
        {/* Divider */}

        <section className="mdc-ui-container py-10" id="contacto">
          <header className="mb-10">
            <hgroup className="text-center">
              <h2 className="text-xl mb-2">Ponte en contacto</h2>
              <h3 className="text-4xl xl:text-5xl font-bold">¿Cómo podemos ayudarte?</h3>
            </hgroup>
          </header>
          <FormContact defaultCaptchaKey={defaultCaptchaKey} />
        </section>
      </div>
    </>
  )
}
export default Libreria

export const getServerSideProps = withIronSessionSsr(
  async function getIronSession({ req }) {
    {
      if (!req.session.captchaImages) {
        req.session.captchaImages = newCaptchaImages()
        await req.session.save()
      }
      const courses = getAllCourses(DataCourseLibrarie)

      return {
        props: {
          defaultCaptchaKey: new Date().getTime(),
          courses: courses
        }
      }
    }
  },
  {
    cookieName: 'MDC_SESSION',
    password: process.env.SESSION_SECRET as string
  }
)
