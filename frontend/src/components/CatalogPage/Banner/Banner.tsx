import Image from "next/image";
import styles from "./Banner.module.scss"
import { ArrowCatalog } from "@/components/Icons/Icons";


export default function Banner() {
    return (
        <div className={styles.bannerCatalog}>
            <Image src="/img/banner.png" alt="" width={1360} height={232}/>
             
             <div className={styles.title}>
                <h4 className={styles.h4}>Главное <ArrowCatalog /> Каталог</h4>
                <h1 className={styles.h1}>Каталог</h1>
             </div>
        </div>
    )
}