import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "pages/posts");

/**
 * @returns {string[]}
 */
export const getSlugs = () => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const filename = parts[parts.length - 1];
    const slug = filename.replace(".mdx", "");
    return slug;
  });
};

/**
 * @typedef Post
 * @property {string} content
 * @property {PostMeta} meta
 * @typedef PostMeta
 * @property {string} slug
 * @property {string} title
 * @property {string[]} tags
 * @property {string} date
 * @property {string} excerpt
 * @property {string} descriptionSEO
 * @property {string} imageSEO
 * @property {string} coverImageSrc
 * @property {string} coverImageAlt
 * @property {string} authorAvatar
 * @property {string} authorName
 * @property {'noticias' | 'articulo'} articleType
 * @param {string} slug
 * @returns {Post}
 */
export const getPostBySlug = (slug) => {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    content,
    meta: {
      slug,
      title: data.title ?? "No title provided",
      tags: (data.tags ?? ['"No tags provided"']).sort(),
      // to local date string format yyyy-mm-dd
      date: (data.date ?? new Date()).toString(),
      excerpt: data.excerpt ?? "No excerpt provided",
      descriptionSEO: data.descriptionSEO ?? "No descriptionSEO provided",
      imageSEO: data.imageSEO ?? "socialCards/homeSocialCard", // if not src the default image
      coverImageSrc: data.coverImageSrc ?? "blogimage.jpg", // if not src the default Coverimage
      coverImageAlt: data.coverImageAlt ?? "imagen de un blog",
      authorAvatar: data.authorAvatar ?? "avatarProfile.jpg",
      authorName: data.authorName ?? "Anonimo",
      articleType: (data.articleType === "articulo" ? "articulo" : "noticias") ?? "articulo",
    },
  };
};

/**
 * @returns {Post[]}
 */
export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
  return posts;
};
