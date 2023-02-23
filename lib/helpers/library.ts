import { DataCourseLibrarie } from '../data/DataCourseLibrarie'

export const data = DataCourseLibrarie

export const getCategoriesNames = (categories: Categories): string[] => {
  return categories.map((category) => category.name)
}

export const getCategoriesSlugs = (categoriesSlugs: Categories) => {
  return categoriesSlugs.map((categorySlug) => categorySlug.slug)
}

export const getCategoryByName = (name: string, categories: Categories) => {
  return categories.find((category) => category.name === name)
}

export const getSubcategoriesNames = (categories: Categories) => {
  return categories
    .map((category) => category.subcategories.map((subcategory) => subcategory.name))
    .flat()
}

export const getSubcategoriesSlugs = (categories: Categories) => {
  return categories
    .map((category) => category.subcategories.map((subcategory) => subcategory.slug))
    .flat()
}

export const getSubcategoryByName = (name: string, categories: Categories): Subcategory | null => {
  const normalizedSearchName = name.toLowerCase().trim()

  const foundSubcategory = categories
    .flatMap(({ subcategories }) => subcategories)
    .find(({ name }) => name.toLowerCase().trim() === normalizedSearchName)

  return foundSubcategory || null
}

// courses
export const coursesHB = getSubcategoryByName('Habilidades Blandas', data)!.courses
export const coursesHD = getSubcategoryByName('Habilidades Directivas', data)!.courses
export const coursesTT = getSubcategoryByName('Habilidades Tecnológicas', data)!.courses
export const coursesRJ = getSubcategoryByName('Jurídico', data)!.courses
export const coursesSE = getSubcategoryByName('Seguridad Esenciales', data)!.courses
export const coursesMM = getSubcategoryByName('Seguridad Micro Módulos', data)!.courses
export const coursesPV = getSubcategoryByName('Capacitación Ventas', data)!.courses

export const getCourseBySlug = (slug: string, courses: Course[]) => {
  return courses.find((course) => course.slug === slug)
}

export const getAllCourses = (DataCourseLibrarie: Categories) => {
  return DataCourseLibrarie.map((category) =>
    category.subcategories.map((subcategory) => subcategory.courses)
  )
    .flat()
    .flat()
}
