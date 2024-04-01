import ky from "ky";
import { IPopularBrands, IPopularCategories, IComments, IPopularProducts, IPopularPromotions } from "../../../interfaces/popular";
import { BrandsResponse, SidebarBrandsResponse } from "../../../interfaces/brands";
import {  CardCategoryResponse, CategoriesResponse } from "../../../interfaces/category";
import { SubCategoryResponse } from "../../../interfaces/subcategory";

const strapi = ky.create({
  prefixUrl: `http://localhost:1337/api/`,
});

export const getPromotions = (): Promise<IPopularPromotions> => {
  return strapi.get("popular-promotions/?populate=image").json();
};

export const getCategories = (): Promise<IPopularCategories> => {
  return strapi.get("popular-categories/?populate=image").json();
};

export const getProducts = (): Promise<IPopularProducts> => {
  return strapi.get("popular-products/?populate=image").json();
};

export const getBrands = (): Promise<IPopularBrands> => {
  return strapi.get("popular-brands/?populate=image").json();
};

export const getComments = (): Promise<IComments> => {
  return strapi.get("comments/?populate=image").json();
};

export const fatchtBrandsList = (): Promise<BrandsResponse> => {
  return strapi.get("brands").json();
};

export const fatchCategoryCardList = (): Promise<CategoriesResponse> => {
  return strapi.get("categories/?populate=image,subcategories").json();
};
export const fatchSubCategoryCardList = (): Promise<SubCategoryResponse > => {
  return strapi.get("subcategories").json();
};
export const fatchCategoryPageList = (id: number): Promise<CardCategoryResponse> => {
  return strapi.get(`subcategories/${id}/?populate[products][populate]=Image`).json();
};
export const fatchBrandSidebarList = (id: number): Promise<SidebarBrandsResponse> => {
  return strapi.get(`subcategories/${id}/?populate[products][populate]`).json();
};