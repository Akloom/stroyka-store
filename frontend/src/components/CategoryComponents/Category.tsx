import { ArrowCatalog } from "../Icons/Icons"
import styles from "./Category.module.scss"
export default function CategoryShop() {
    return (
        <div>
            <div className={styles.category}>
                <h4>Главная <ArrowCatalog /> Каталог <ArrowCatalog /> Стройматериалы <ArrowCatalog /> Сухие смеси</h4>
            </div>
            <h1 className={styles.h1}>Сухие смеси</h1>
        </div>
    )
}