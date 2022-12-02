import { DataHeadBlog } from "../../components/data/DataHeader";
import HelperHead from "../../components/helpers/HelperHead";
/* import { Posts } from "../../components/data/DataPosts"; */
import ArticleCard from "../../components/ui/ArticleCard";
import { getAllPosts } from "../api/blogApi";

// props posts will be PostMeta[]
/**
 * @param {{posts:import('../api/blogApi').PostMeta[]}} props
 * @returns
 */
export default function Blog({ posts }) {
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
      </div>
      <section className='mdc-ui-container'>
        {posts.map((post) => (
          <ArticleCard
            key={post.title}
            slug={post.slug}
            coverImageSrc={post.coverImageSrc}
            articleType={post.articleType}
            tags={post.tags}
            readTime={5} // TODO: calculate readTime
            title={post.title}
            excerpt={post.excerpt}
            authorAvatar={post.authorAvatar}
            authorName={post.authorName}
            date={post.date}
          />
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  // get the latest 9 posts from the api only the meta data
  const postsMDXMeta = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);
  return {
    props: {
      posts: postsMDXMeta,
    },
  };
}

/* <section className='mdc-ui-container'>
          {Posts.posts.map((post) => (
            <ArticleCard
              key={post.id + post.tag}
              slug={post.slug}
              articleImg={post.articleImg}
              articleType={post.articleType}
              tag={post.tag}
              readTime={post.readTime}
              title={post.title}
              excerpt={post.excerpt}
              authorAvatar={post.author.avatar}
              authorName={post.author.name}
              date={post.date}
            />
          ))}
        </section> */

/* banner divider */
/* <section className='mdc-ui-container'>
  <Image src={BlogImage} layout='responsive' objectFit='cover' alt='Imagen de un blog'></Image>
</section> */
