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
 * @returns {Category | Error } or notfound
 */
export const getCategoryByName = (name, categories) => {
  if (!categories.find((category) => category.name === name)) {
    return new Error("Category not found");
  }
  return categories.find((category) => category.name === name);
};

// get all subcategories names  of categories

export const getSubcategoriesNames = (categories) => {
  return categories.map((category) => category.subcategories.map((subcategory) => subcategory.name)).flat();
};
