import { Metadata } from "next";
import WithoutDesign from "../../components/WithoutDesign/WithoutDesign";

export const metadata: Metadata = {
  title: "Строительные материалы | Stroyka Store",
  description: "Добро пожаловать на страницу строительных материалов",
};

export default function ConstructionMaterials() {
  return <WithoutDesign />;
}
