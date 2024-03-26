import DeliveryPage from "@/pages/DeliveryPage/DeliveryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Доставка | Stroyka Store",
  description: "Информация о доставке",
};

export default function Delivery() {
  return (
    <>
      <DeliveryPage />
    </>
  );
}
