import { Metadata } from "next";
import WithoutDesign from "../../components/WithoutDesign/WithoutDesign";

export const metadata: Metadata = {
  title: "Обои | Stroyka Store",
  description: "Добро пожаловать на страницу обои",
};

export default function Wallpapers() {
  return <WithoutDesign />;
}
