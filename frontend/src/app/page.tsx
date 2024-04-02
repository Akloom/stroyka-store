import HomePage from "@/pages/HomePage/HomePage";
import {
  getBrands,
  getCategories,
  getComments,
  getProducts,
  getPromotions,
} from "@/utils/api/reqPopular";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная | Stroyka Store",
  description: "Добро пожаловать на главную страницу!",
};

export default async function Home() {
  const getPopularPromotions = await getPromotions();
  const getPopularCategories = await getCategories();
  const getPopularProducts = await getProducts();
  const getPopularBrands = await getBrands();
  const getPopularComments = await getComments();

  return (
    <HomePage
      promotions={getPopularPromotions}
      categories={getPopularCategories}
      products={getPopularProducts}
      brands={getPopularBrands}
      comments={getPopularComments}
    />
  );
}
