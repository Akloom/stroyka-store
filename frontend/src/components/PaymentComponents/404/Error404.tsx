"use client"
import { useRouter } from "next/navigation"
import styles from "./Error404.module.scss"
import Link from "next/link"
export default function ErrorPage() {
    const router = useRouter()
    return (
        <div className={styles.error404}>
           <h1>404</h1>
           <div className={styles.title}>
            <h2>Страница не найдена</h2>
           </div>
           <div className={styles.description}>
            <p>Неправильно набран адрес или такая страница больше не существует</p>
           </div>
           <div className={styles.gohome}>
           <Link href="/" className={styles.btn_link}>
           Перейти на главную
          </Link>
           </div>
        </div>
    )
}