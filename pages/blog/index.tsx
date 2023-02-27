import { GetStaticProps } from 'next'

import { DataHeadBlog } from '../../lib/data/DataHeader'
import HelperHead from '../../lib/helpers/HelperHead'
import ArticleCard from '../../components/ArticleCard'
import { getAllPosts } from '../api/blogApi'

interface BlogProps {
  posts: PostMeta[]
}
export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <HelperHead {...DataHeadBlog} />
      <div className="pt-[68px]">
        <div className="p-4 md:p-6 lg:p-10 mb-20 flex flex-col-reverse lg:flex-row lg:gap-8 bg-gradient-to-b from-[#1c3d5c] via-[#1c3d5c]/30 to-bg_primary rounded-t-3xl mdc-ui-container min-h-[calc(100vh-70px)] lg:min-h-0 justify-around lg:items-center ">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-8xl text-accent font-extrabold">
              <small className="text-brandWhite text-2xl lg:text-6xl font-bold">Noticias y</small>
              <br />
              Artículos
            </h1>
            <p className=" my-2 lg:my-8 text-lg lg:text-xl md:max-w-[40ch]">
              Aquí encontrarás artículos que te serán de mucha ayuda para adentrarte en el mundo del
              elearning y el desarrollo organizacional.
            </p>
          </div>
          <div className="relative w-full xl:w-1/2" />
        </div>
      </div>
      <section className="mdc-ui-container">
        {posts.map((post) => (
          <ArticleCard key={post.slug} {...post} />
        ))}
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (_context) => {
  // get the latest 9 posts from the api only the meta data
  const postsMDXMeta = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta)

  return {
    props: {
      posts: postsMDXMeta
    }
  }
}
