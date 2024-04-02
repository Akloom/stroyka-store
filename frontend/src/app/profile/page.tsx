import WithoutDesign from "@/components/WithoutDesign/WithoutDesign";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет | Stroyka Store",
  description: "Ваш личный кабинет",
};

export default function Profile() {
  return (
    <>
      <WithoutDesign />
    </>
  );
}
