import React from "react";
import HelperHead from "../../../components/helpers/HelperHead";
import Image from "next/image";
import YouTube from "../../../components/ui/YouTube";
import { getSlugs, getPostBySlug } from "../../api/blogApi";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import AuthorPostInfo from "../../../components/ui/AuthorPostInfo";
import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";

/**
 *@typedef {import('../../api/blogApi').PostMeta} PostMeta
 * @param {{post: {source:import('next-mdx-remote').MDXRemoteSerializeResult<Record<string, unknown>>, meta:PostMeta}}} post
 * @returns {JSX.Element}
 */
export default function PostPage({ post }) {
  const postsHead = {
    previewImage: "/socialCards/homeSocialCard.jpg",
    previewImageAlt: "Mexico development center",
    pageTitle: "MDC | Blog",
    pageDescription: "Descripcion blog",
  };
  return (
    <>
      <HelperHead {...postsHead} />
      <div className='pt-[68px] '>
        <div>
          <Image src={`/blog/images/${post.meta.coverImageSrc}`} alt={post.meta.coverImageAlt} width={1920} height={576} />
        </div>
        <div className='mdc-ui-container py-5 md:py-10 flex flex-col gap-4 '>
          <nav>
            <Link href={`/blog`}>
              <div className='inline-flex gap-x-2 items-center hover:cursor-pointer group '>
                <RiArrowLeftLine className='text-2xl text-brandWhite  group-hover:animate-heartbeat group-hover:text-brandBlue-50 will-change-transform ' />
                <span className='group-hover:text-brandBlue-100 text-xl transition-all duration-150'>Blog</span>
              </div>
            </Link>
          </nav>
          <AuthorPostInfo authorAvatar={post.meta.authorAvatar} authorName={post.meta.authorName} date={post.meta.date} />
          <h1 className='text-4xl md:text-6xl text-accent font-bold '>{post.meta.title}</h1>
        </div>
        <div className='mdc-ui-container prose prose-headings:text-brandBlue-50 prose-lime prose-code:text-brandBlue-50 md:py-10 md:prose-headings:text-5xl prose-lg'>
          <MDXRemote {...post.source} components={{ YouTube, Image }} />
        </div>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

/**
 * @param {{ params: { slug: string } }} params
 * @returns
 */
export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, meta } = await getPostBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  });
  return {
    props: {
      post: {
        source: mdxSource,
        meta,
      },
    },
  };
}
