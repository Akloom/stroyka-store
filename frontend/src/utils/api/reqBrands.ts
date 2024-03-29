import { IBrandsResponse } from "@/interfaces/brands";
import ky from "ky";

const strapi = ky.create({
  prefixUrl: `http://localhost:1337/api/`,
});

export const getBrandsList = (): Promise<IBrandsResponse> => {
  return strapi.get("brand-items/").json();
};