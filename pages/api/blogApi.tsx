import path from 'path'
import fs from 'fs'

import { sync } from 'glob'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), 'pages/posts')

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`)

  return paths.map((path) => {
    const parts = path.split('/')
    const filename = parts[parts.length - 1]
    const slug = filename.replace('.mdx', '')

    return slug
  })
}

export const getPostBySlug = (slug: string): Post => {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    content,
    meta: {
      slug,
      title: data.title ?? 'No title provided',
      tags: (data.tags ?? ['"No tags provided"']).sort(),
      // to local date string format yyyy-mm-dd
      date: data.date.toString() ?? new Date().toISOString(),
      excerpt: data.excerpt ?? 'No excerpt provided',
      descriptionSEO: data.descriptionSEO ?? 'No descriptionSEO provided',
      imageSEO: data.imageSEO ?? 'socialCards/homeSocialCard', // if not src the default image
      imageAltSEO: data.imageAltSEO ?? 'No imageAltSEO provided', // if not src the default image
      coverImageSrc: data.coverImageSrc ?? 'blogimage.jpg', // if not src the default Coverimage
      coverImageAlt: data.coverImageAlt ?? 'imagen de un blog',
      authorAvatar: data.authorAvatar ?? 'avatarProfile.jpg',
      authorName: data.authorName ?? 'Anonimo',
      articleType: (data.articleType === 'articulo' ? 'articulo' : 'noticias') ?? 'articulo',
      readTime: data.readTime ?? 5
    }
  }
}

export const getAllPosts = (): Post[] => {
  const posts = getSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    })

  return posts
}
