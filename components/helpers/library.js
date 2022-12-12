import { DataCourseLibrarie } from "../data/DataCourseLibrarie";

export const data = DataCourseLibrarie;

/**
 * get all categories names
 * @typedef {import('../data/DataCourseLibrarie').Categories} CourseCategories
 * @param {CourseCategories} categories
 * @returns {Array<string>}
 */
export const getCategoriesNames = (categories) => {
  return categories.map((category) => category.name);
};

/**
 * get all categories slugs
 * @param {CourseCategories} categoriesSlugs
 * @returns {Array<string>}
 */
export const getCategoriesSlugs = (categoriesSlugs) => {
  return categoriesSlugs.map((categorySlug) => categorySlug.slug);
};

/**
 * get category by name
 * @typedef {import('../data/DataCourseLibrarie').Category} Category
 * @param {string} name
 * @param {CourseCategories} categories
 * return {Category} or Error
 * @returns {Category}
 */
export const getCategoryByName = (name, categories) => {
  return categories.find((category) => category.name === name);
};

// get subcategories names
/**
 * get all subcategories names
 * @param {CourseCategories} categories
 * @returns {Array<string>}
 */
export const getSubcategoriesNames = (categories) => {
  return categories.map((category) => category.subcategories.map((subcategory) => subcategory.name)).flat();
};

// get subcategories slugs
/**
 * get all subcategories slugs
 * @param {CourseCategories} categories
 * @returns {Array<string>}
 */
export const getSubcategoriesSlugs = (categories) => {
  return categories.map((category) => category.subcategories.map((subcategory) => subcategory.slug)).flat();
};

/**
 * get subcategory by name
 * @typedef {import('../data/DataCourseLibrarie').Subcategory} Subcategory
 * @param {string} name
 * @param {Array<Category>} categories
 * @returns {Subcategory}
 */
export const getSubcategoryByName = (name, categories) => {
  // iterate over categories and find the subcategory by the name
  for (let category of categories) {
    const subcategory = category.subcategories.find((subcategory) => subcategory.name.toLowerCase().trim() === name.toLowerCase().trim());
    if (subcategory) {
      return subcategory;
    }
  }
  console.log(`Subcategory with name ${name} not found`);
};

// courses
export const coursesHB = getSubcategoryByName("Habilidades Blandas", data).courses;
export const coursesHD = getSubcategoryByName("Habilidades Directivas", data).courses;
export const coursesTT = getSubcategoryByName("Habilidades Tecnológicas", data).courses;
export const coursesRJ = getSubcategoryByName("Jurídico", data).courses;
export const coursesSE = getSubcategoryByName("Esenciales", data).courses;
export const coursesMM = getSubcategoryByName("Micro Módulos", data).courses;
export const coursesPV = getSubcategoryByName("Micro Módulos", data).courses;

// get all courses course and find course by slug and return course
/**
 * get all courses course and find course by slug and return course
 * @typedef {import('../data/DataCourseLibrarie').Course} Course
 * @param {string} slug
 * @param {Array<Course>} courses
 * @returns {Course}
 */
export const getCourseBySlug = (slug, courses) => {
  return courses.find((course) => course.slug === slug);
};

export const getAllCourses = (DataCourseLibrarie) => {
  return DataCourseLibrarie.map((category) => category.subcategories.map((subcategory) => subcategory.courses))
    .flat()
    .flat();
};
