import NotFoundPage from "@/components/NotFoundPage/NotFoundPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена | Stroyka Store",
  description: "Упс! Похоже, вы заблудились в нашем магазине",
};

const NotFound = () => {
  return <NotFoundPage />;
};

export default NotFound;
