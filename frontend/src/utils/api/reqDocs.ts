import { IDocsResponse } from "@/interfaces/docs";
import ky from "ky";

const strapi = ky.create({
  prefixUrl: `http://localhost:1337/api/`,
});

export const getDocs = (): Promise<IDocsResponse> => {
  return strapi.get("documentations/?populate=file").json();
};