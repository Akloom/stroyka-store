import HomePage from "@/pages/HomePage/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная | Stroyka Store",
  description: "Добро пожаловать на главную страницу!",
};

export default function Home() {
  return <HomePage />;
}
