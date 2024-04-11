"use client"
import { ThancksSpasibo } from "@/components/Icons/Icons"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import styles from "./Thanks.module.scss"
export default function Thancks() {
    const router = useRouter();
    return (
        <div className={styles.thanks_you}>
           <ThancksSpasibo />
           <h1>Спасибо</h1>
           <div className={styles.description}>
            <p className={styles.title}>Ваша заявка принята. Мы свяжемся с вами в ближайшее время</p>
           </div>
           <div className={styles.button_thx}>
            <button className={styles.homepage}>Перейти на главную</button>
           </div>
        </div>
    )
}