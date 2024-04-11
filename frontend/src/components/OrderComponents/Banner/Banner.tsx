import Image from "next/image"
import styles from "./Banner.module.scss"
import { ArrowCatalog } from "@/components/Icons/Icons"
export default function BannerOrder() {
    return (
        <div className={styles.bannerCatalog}>
            <Image src="/img/ordercart.png" alt="" width={1360} height={232}/>
             
             <div className={styles.title}>
                <h4 className={styles.h4}>Главное <ArrowCatalog /> Заказы</h4>
                <h1 className={styles.h1}>Заказы</h1>
             </div>
        </div>
    )
}