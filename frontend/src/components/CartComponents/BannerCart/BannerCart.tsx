import Image from "next/image"
import styles from "./BannerCart.module.scss"
import { ArrowCatalog } from "@/components/Icons/Icons"
export default function BannerCart() {
    return (
        <div className={styles.bannerCatalog}>
        <Image src="/img/BannerBasket.png" alt="" width={1360} height={232}/>
         
         <div className={styles.title}>
            <h4 className={styles.cart_h4}>Главное <ArrowCatalog /> Корзина</h4>
            <h1 className={styles.cart_h1}>Корзина  </h1>
         </div>
    </div>
    )
}