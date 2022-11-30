import Image from "next/image";
import Link from "next/link";
import { DataHeadBlog } from "../../components/data/DataHeader";
import HelperHead from "../../components/helpers/HelperHead";
import BlogImage from "../../public/blog/blogimage.jpg";
import { RiNewspaperLine } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";

function Blog() {
  return (
    <>
      <HelperHead DataHead={DataHeadBlog} />
      <div className='pt-[68px]'>
        <div className='p-4 md:p-6 lg:p-10 mb-20 flex flex-col-reverse lg:flex-row lg:gap-8 bg-gradient-to-b from-[#1c3d5c] via-[#1c3d5c]/30 to-bg_primary rounded-t-3xl mdc-ui-container min-h-[calc(100vh-70px)] lg:min-h-0 justify-around lg:items-center '>
          <div className='lg:w-1/2'>
            <h1 className='text-5xl lg:text-8xl text-accent font-extrabold'>
              <small className='text-brandWhite text-2xl lg:text-6xl font-bold'>Noticias y</small>
              <br />
              Articulos
            </h1>
            <p className=' my-2 lg:my-8 text-lg lg:text-xl md:max-w-[40ch]'>
              Aquí encontrarás artículos que te serán de mucha ayuda para adentrarte en el mundo del elearning y el desarrollo organizacional.
            </p>
          </div>
          <div className='relative w-full xl:w-1/2'></div>
        </div>
        <section className='mdc-ui-container'>
          {/* articulos Links cards  */}
          <hr className='hidden md:block my-4 border-brandBlue-50/50' />
          <Link href='/blog/articulo'>
            <article className='flex flex-col md:flex-row w-full lg:w-full group hover:cursor-pointer gap-x-4'>
              <div className='relative h-[200px] md:h-[300px] lg:h-[300px] w-full md:w-10/12 '>
                <Image
                  src={BlogImage}
                  layout='fill'
                  objectFit='cover'
                  alt='imagen de un articulo'
                  className='group-hover:scale-105 transition-all duration-150 ease-out  '
                />
              </div>
              <div className='text-brandWhite py-4  md:p-4 flex flex-col gap-2 justify-between lg:gap-4 w-full '>
                <div className='flex flex-col md:flex-row items-start md:justify-between md:items-center gap-4 md:gap-0'>
                  <div className='rounded-full bg-lineGradient_1 px-3 py-[0.2rem] '>
                    <p className='text-sm'>Etiquetas</p>
                  </div>
                  <div className='text-brandWhite flex gap-2 md:gap-8'>
                    <div className='flex gap-1'>
                      <RiNewspaperLine className='text-xl text-white' /> <span className='text-sm'>Articulo</span>
                    </div>
                    <div className='flex gap-1'>
                      <HiOutlineEye className='text-xl' /> <span className='text-sm'>7min. </span>
                    </div>
                  </div>
                </div>
                <h2 className='text-4xl font-serif font-bold group-hover:text-accent '>Titulo del articulo</h2>
                <p className=' text-lg max-w-prose'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                  quod..
                </p>
                {/* avatar */}
                <div className='flex gap-4 items-center'>
                  <div className='relative w-12 h-12'>
                    <Image src={BlogImage} layout='fill' objectFit='cover' alt='imagen de un articulo' className='rounded-full' />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm'>Autor</p>
                    <p className='text-sm'>Fecha</p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
          <hr className='my-4 border-brandBlue-50/50' />
        </section>
        {/* banner divider */}
        <section className='mdc-ui-container'>
          <Image src={BlogImage} layout='responsive' objectFit='cover' alt='Imagen de un blog'></Image>
        </section>
      </div>
    </>
  );
}

export default Blog;
