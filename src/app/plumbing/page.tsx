import { Metadata } from "next";
import WithoutDesign from "../../components/WithoutDesign/WithoutDesign";

export const metadata: Metadata = {
  title: "Сантехника | Stroyka Store",
  description: "Добро пожаловать на страницу сантехники",
};

export default function Plumbing() {
  return <WithoutDesign />;
}
