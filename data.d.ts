interface CourseFeatures {
  library: { name: string; skuPrefix: string }
  subcategory: { name: string; skuPrefix: string }
  title: string
  slug: string
  identifier: { prefix: string; courseNumber: string }
  duration: number
  description: string[]
  topics: string[]
  features: {
    id: number
    name: string
    qt: number
    ICON: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  }[]
  lessons: { title: string; duration: string }[]
}
interface Course {
  library: { name: string; skuPrefix: string }
  subcategory: { name: string; skuPrefix: string }
  title: string
  slug: string
  thumbnail: { src: StaticImageData; alt: string }
  cover: string
  identifier: { prefix: string; courseNumber: string }
  duration: number
  description: string[]
  topics: string[]
  features: Feature[]
  modules: Module[]
}

interface Module {
  name: string
  lessons: Lesson[]
}

interface Feature {
  name: string
  qt: number
  iconSrc: string
}

interface Lesson {
  title: string
  duration: string
}
interface Category {
  name: string
  slug: string
  subcategories: Subcategory[]
}

interface Subcategory {
  name: string
  slug: string
  colorid: string
  courses: Course[]
}

interface Categories extends Array<Category> {}

// Interfaces for meta data in pages
interface DataHead {
  twitterHandle: string
  siteName: string
  currentURL: string
}

interface HeadData {
  previewImage: string
  previewImageAlt: string
  pageTitle: string
  pageDescription: string
  slug: string
}
// Path: components/Section.tsx
// convert enum Colors to interface object freezed
type Colors = 'TropicalBlue' | 'MintGreen' | 'BrightGreen' | 'secondary'

interface SectionData {
  ColorSchemaDark: boolean
  layoutLeft: boolean
  colorClass: Colors //TropicalBlue | MintGreen | Bright Green | secondary
  MainImage: { src: StaticImageData; alt: string }
  link: { slug: string; text: string }
  excerpt: JSX.Element | string
  title: string
  sideImage?: { src: StaticImageData; alt: string }
}

// Post Schema
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
 * @property {string} imageAltSEO
 * @property {string} coverImageSrc
 * @property {string} coverImageAlt
 * @property {string} authorAvatar
 * @property {string} authorName
 * @property {number} readTime
 * @property {'noticias' | 'articulo'} articleType
 * @param {string} slug
 * @returns {Post}
 */

interface PostMeta {
  slug: string
  title: string
  tags: string[]
  date: string
  excerpt: string
  descriptionSEO: string
  imageSEO: string
  imageAltSEO: string
  coverImageSrc: string
  coverImageAlt: string
  authorAvatar: string
  authorName: string
  readTime: number
  articleType: 'noticias' | 'articulo'
}
interface Post {
  content: string
  meta: PostMeta
}

interface Values {
  [key: string]: string
}

interface InputProps {
  id: number
  name: string
  label: string
  placeholder: string
  type: string
  errorMessage: string
  pattern?: string
  required: boolean
  errors?: string
}
interface PreviewCardData {
  title?: string
  titleog?: string
  description?: string
  image?: string
  imageAlt?: string
  url?: string
  canonical?: string
  siteName?: string
}

interface CaptchaKeyProps {
  defaultCaptchaKey: string
}
