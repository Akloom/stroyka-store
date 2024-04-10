
import Address from "@/components/PaymentComponents/Address/Address";
import BannerPay from "@/components/PaymentComponents/Banner/BannerPay";
import SidebarPay from "@/components/PaymentComponents/Sidebar/SidebarPay";
import { fatchProductPageList } from "@/utils/api/reqProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Доставка и оплата | Stroyka Store",
  description: "Спасибо за ваше доверие",
};
interface PaymentType {
  params: {
    id: string;
  }
}
export default async function Payment({params: {id}}: PaymentType) {
  
  const PaymentComponents = await fatchProductPageList(+id)
  console.log(PaymentComponents);
  return (
<div>
  <BannerPay />
  <SidebarPay />
  <Address />
  </div>
  )
  
}
