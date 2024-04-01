import Link from "next/link"
import styles from "./Links.module.scss"
export default function CategoryLinks() {
    return(
        <div className={styles.card__links}>
            <Link href="" className={styles.card__link}>Популярные</Link> 
            <Link href="" className={styles.card__link}>Дешевле</Link> 
            <Link href="" className={styles.card__link}>Дороже</Link> 
            <Link href="" className={styles.card__link}>По алфавиту</Link>     
        </div>
    )
}