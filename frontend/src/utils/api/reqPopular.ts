import ky from "ky";
import { IPopularBrands, IPopularCategories, IComments, IPopularProducts, IPopularPromotions } from "../../interfaces/popular";

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