import { Metadata } from "next";
import WithoutDesign from "../../components/WithoutDesign/WithoutDesign";

export const metadata: Metadata = {
  title: "Окна | Stroyka Store",
  description: "Добро пожаловать на страницу окон",
};

export default function Windows() {
  return <WithoutDesign />;
}
