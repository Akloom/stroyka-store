import Image from "next/image"
import styles from "./BannerPay.module.scss"
import { ArrowCatalog } from "@/components/Icons/Icons"
export default function BannerPay() {
    return (
        <div className={styles.bannerCatalog}>
            <Image className={styles.banner_image} src="/img/paymentproduct.png" alt="" width={1360} height={232}/>
             <div className={styles.title}>
                <h4 className={styles.pay_h4}>Оформление → Доставка  и оплата</h4>
                <h1 className={styles.pay_h1}>Доставка и оплата</h1>
             </div>
        </div>
    )
}