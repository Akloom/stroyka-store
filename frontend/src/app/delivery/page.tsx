import DeliveryPage from "@/pages/DeliveryPage/DeliveryPage";
import { getFaq } from "@/utils/api/reqFaq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Доставка | Stroyka Store",
  description: "Информация о доставке",
};

export default async function Delivery() {
  const faqData = await getFaq();

  return (
    <>
      <DeliveryPage faqData={faqData.data} />
    </>
  );
}
