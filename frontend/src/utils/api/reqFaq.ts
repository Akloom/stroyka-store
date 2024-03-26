import { IFaq, IFaqResponse } from "@/interfaces/faq";
import ky from "ky";

const strapi = ky.create({
  prefixUrl: `http://localhost:1337/api/`,
});

export const getFaq = (): Promise<IFaqResponse> => {
  return strapi.get("faq-items/").json();
};