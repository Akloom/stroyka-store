import { Metadata } from "next";
import WithoutDesign from "../../components/WithoutDesign/WithoutDesign";

export const metadata: Metadata = {
  title: "Инструменты | Stroyka Store",
  description: "Добро пожаловать на страницу инструментов",
};

export default function Tools() {
  return <WithoutDesign />;
}
