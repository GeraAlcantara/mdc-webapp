interface CourseFeatures {
  library: { name: string; skuPrefix: string };
  subcategory: { name: string; skuPrefix: string };
  title: string;
  slug: string;
  identifier: { prefix: string; courseNumber: string };
  duration: number;
  description: string[];
  topics: string[];
  features: { id: number; name: string; qt: number; ICON: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }[];
  lessons: { title: string; duration: string }[];
}
interface Course {
  library: { name: string; skuPrefix: string };
  subcategory: { name: string; skuPrefix: string };
  title: string;
  slug: string;
  thumbnail: { src: StaticImageData; alt: string };
  cover: string;
  identifier: { prefix: string; courseNumber: string };
  duration: number;
  description: string[];
  topics: string[];
  features: Feature[];
  modules: Module[];
}

interface Module {
  name: string;
  lessons: Lesson[];
}

interface Feature {
  name: string;
  qt: number;
  iconSrc: string;
}

interface Lesson {
  title: string;
  duration: string;
}
interface Category {
  name: string;
  slug: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  name: string;
  slug: string;
  colorid: string;
  courses: Course[];
}

interface Categories extends Array<Category> {}

// Interfaces for meta data in pages
interface DataHead {
  twitterHandle: string;
  siteName: string;
  currentURL: string;
}

interface HeadData {
  previewImage: string;
  previewImageAlt: string;
  pageTitle: string;
  pageDescription: string;
  slug: string;
}
// Path: components/Section.tsx
// convert enum Colors to interface object freezed
type Colors = "TropicalBlue" | "MintGreen" | "BrightGreen" | "secondary";

interface SectionData {
  ColorSchemaDark: boolean;
  layoutLeft: boolean;
  colorClass?: Colors; //TropicalBlue | MintGreen | Bright Green | secondary
  MainImage: { src: StaticImageData; alt: string };
  link: { slug: string; text: string };
  excerpt: string;
  title: string;
  sideImage?: { src: StaticImageData; alt: string };
}
