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
import { claseNames } from "../../../components/data/SectionTimeLineData";
// import highlight from "highlight.js"; // this is for the code highlight

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
      <HelperHead DataHead={postsHead} />
      <div className='pt-[68px] '>
        <div>
          <Image src={`/blog/images/${post.meta.coverImageSrc}`} alt={post.meta.coverImageAlt} width={1920} height={576} />
        </div>
        <div className='mdc-ui-container py-10 text-accent font-bold '>
          <h1 className='text-6xl'>{post.meta.title}</h1>
        </div>
        <div className='mdc-ui-container prose prose-headings:text-brandBlue-50 prose-lime prose-code:text-brandBlue-50 py-10 prose-headings:text-5xl prose-lg'>
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
