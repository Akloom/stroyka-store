import Link from "next/link"
import styles from "./Links.module.scss"
import { useState } from "react";
export default function CategoryLinks() {
    // const ProductListWithSorting = ({ productinfo }) => {
    //     const [sortedProducts, setSortedProducts] = useState(productinfo);
    //     const [sortByPriceAsc, setSortByPriceAsc] = useState(true); // Состояние для определения порядка сортировки
      
    //     const sortByPrice = () => {
    //       const sorted = [...sortedProducts];
    //       if (sortByPriceAsc) {
    //         sorted.sort((a, b) => a.price - b.price); // Сортиров   ка по возрастанию цены
    //       } else {
    //         sorted.sort((a, b) => b.price - a.price); // Сортировка по убыванию цены
    //       }
    //       setSortedProducts(sorted);
    //       setSortByPriceAsc(!sortByPriceAsc); // Инвертируем состояние порядка сортировки
    //     };
    // }
    return(
        <div className={styles.card__links}>
            <Link href="" className={styles.card__link} >
                Популярные</Link> 
            <Link href="" className={styles.card__link}>Дешевле</Link> 
            <Link href="" className={styles.card__link}>Дороже</Link> 
            <Link href="" className={styles.card__link}>По алфавиту</Link>     
        </div>
    )
}