import { SearchIcon, SearchSidebar } from "@/components/Icons/Icons"
import styles from "./Sidebar.module.scss"
import { BrandSidebar } from "../../../../interfaces/brands"
export default function SidebarCategory( {list}: {list: BrandSidebar }) {
    return(
        <aside className={styles.sidebar}>
            <h3>Цена</h3>
            <div className={styles.inputs}>
                <input type="number" className={styles.sidebar__price} placeholder="1 000"/>
                <input type="number" className={styles.sidebar__price} placeholder="100 000"/>
            </div>
            <div className={styles.sidebar__brands}>
                <h3>Бренды</h3>
                <div className={styles.sidebar__input}>
                    <input type="text" className={styles.search} placeholder="Поиск"/>
                    <SearchSidebar  />
                </div>
                <div className="brand"> {}
                    <input type="checkbox" />
                   <span></span>
              
                </div>
            </div>
        </aside>
    )
}