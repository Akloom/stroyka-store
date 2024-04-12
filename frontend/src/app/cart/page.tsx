import BannerPay from "@/components/PaymentComponents/Banner/BannerPay";
import styles from "./Payment.module.scss"

import { Metadata } from "next";
import SidebarCart from "@/components/CartComponents/Sidebar/SidebarCart";
import BannerCart from "@/components/CartComponents/BannerCart/BannerCart";
import ListCart from "@/components/CartComponents/List/List";
import NotProductBasket from "@/components/CartComponents/NotProductBasket/NotProductBasket";


export const revalidate = 10;

export const metadata: Metadata = {
  title: "Корзина | Stroyka Store",
  description: "Здесь находятся товары, добавленные в корзину",
};

export default function Cart() {
  return (
      
      <div >
        <BannerCart />
        <main className={styles.main}>
    
        <ListCart />
        </main>
      
      </div>

  );
}
