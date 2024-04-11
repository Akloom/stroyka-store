import BannerOrder from "@/components/OrderComponents/Banner/Banner";
import NotOrders from "@/components/OrderComponents/NotOrders/NotOrders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заказы | Stroyka Store",
  description: "Здесь находятся товары, которые вы заказали",
};

export default function Orders() {
  return (
    <div>
    <BannerOrder />
    <NotOrders />
  </div>
  )
 
}
