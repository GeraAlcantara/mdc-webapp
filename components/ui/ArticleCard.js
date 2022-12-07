import Image from "next/image";
import { RiNewspaperLine } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import React from "react";
import Link from "next/link";
import AuthorPostInfo from "./AuthorPostInfo";

/*  
1- imagen de un articulo 
2- etiqueta
3- tipo de articulo (articulo, noticia, etc)
4- tiempo de lectura
5- titulo del articulo
6- resumen del articulo
7- avatar del autor
8- nombre del autor
9- fecha de publicacion
*/
// define props por recibir en JS docs
/**
 *@typedef {{slug: string, coverImageSrc: string, tags: string[], articleType: string, readTime: number, title: string, excerpt: string, authorAvatar: string, authorName: string, date: string}} ArticleCardProps
 * @param {ArticleCardProps} props
 * @returns {JSX.Element}
 */
function ArticleCard({ slug, coverImageSrc, tags, articleType, readTime, title, excerpt, authorAvatar, authorName, date }) {
  return (
    <div className='pb-4'>
      <hr className='hidden md:block my-8 border-brandBlue-50/50' />
      <Link href={`blog/posts/${slug}`}>
        <article className='flex flex-col xl:flex-row w-full lg:w-full group hover:cursor-pointer gap-x-4'>
          <div className='relative h-[200px]  xl:h-auto w-full xl:w-10/12 rounded-xl overflow-hidden  '>
            <Image
              src={`/blog/images/${coverImageSrc}`}
              layout='fill'
              width={1920}
              height={576}
              objectFit='cover'
              alt='imagen de un articulo'
              className='group-hover:scale-105 transition-all duration-150 ease-out  '
            />
          </div>
          <div className='text-brandWhite py-4  md:p-4 flex flex-col gap-2 justify-between lg:gap-4 w-full '>
            <div className='flex flex-col md:flex-row items-start md:justify-between md:items-center gap-4 md:gap-0'>
              {/* iterate tags to create pills */}
              <div className='flex gap-2'>
                {tags.map((tag, index) => (
                  <div
                    key={tag + title + index}
                    className='rounded-full bg-lineGradient_1 text-gray-900 font-bold capitalize px-2 py-[0.2rem] flex justify-center items-center '
                  >
                    <span className='text-sm leading-relaxed'>{tag}</span>
                  </div>
                ))}
              </div>
              <div className='text-brandWhite flex gap-2 md:gap-8'>
                <div className='flex gap-1'>
                  <RiNewspaperLine className='text-xl text-white ' /> <span className='text-sm group-hover:text-accent capitalize'>{articleType}</span>
                </div>
                <div className='flex gap-1'>
                  <HiOutlineEye className='text-xl' /> <span className='text-sm group-hover:text-accent'>{readTime}min. </span>
                </div>
              </div>
            </div>
            <h2 className='text-3xl xl:text-4xl font-bold group-hover:text-accent '>{title}</h2>
            <p className=' text-lg max-w-prose'>{excerpt}</p>
            {/* avatar */}
            <AuthorPostInfo authorAvatar={authorAvatar} authorName={authorName} date={date} />
          </div>
        </article>
      </Link>
      {/* <hr className='my-8 border-brandBlue-50/50' /> */}
    </div>
  );
}

export default ArticleCard;
