import { ProductResponse } from "@/interfaces/Product";
import ky from "ky";

const strapi = ky.create({
  prefixUrl: `http://localhost:1337/api/`,
});

export const fatchProductPageList = (id: number): Promise<ProductResponse> => {
    return strapi.get(`products/${id}/?populate=Image,content`).json();
  };
