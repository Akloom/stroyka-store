
import ErrorPage from "@/components/PaymentComponents/404/Error404";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена | Stroyka Store",
  description: "Упс! Похоже, вы заблудились в нашем магазине",
};

const NotFound = () => {
  return <ErrorPage />;
};

export default NotFound;
