"use client";
import { SearchSidebar } from "@/components/Icons/Icons";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import { BrandSidebar } from "@/interfaces/brands";
export default function SidebarCategory({ list }: { list: BrandSidebar[] }) {
  const [checkedList, setCheckedList] = useState<number[]>([]);

  const onChangeHandler = (id: number) => {
    if (checkedList.includes(id)) {
      setCheckedList((checkedList) => checkedList.filter((item) => item != id));
    } else {
      setCheckedList((list) => {
        return [...list, id];
      });
    }
  };
  return (
    
      <aside className={styles.sidebar}>
        <h3>Цена</h3>
        <div className={styles.inputs}>
          <input
            type="number"
            className={styles.sidebar__price}
            placeholder="1 000"
          />
          <input
            type="number"
            className={styles.sidebar__price}
            placeholder="100 000"
          />
        </div>
        <div className={styles.sidebar__brands}>
          <h3>Бренды</h3>
          <div className={styles.sidebar__input}>
            <input type="text" className={styles.search} placeholder="Поиск" />
            <div className={styles.seacrh_icon}><SearchSidebar/></div>
          </div>
          <div className={styles.brand}>
            {list.map((brand) => {
              return (
                <label key={brand.id} className={styles.brandItem}>
                  <input
                    onChange={() => onChangeHandler(brand.id)}
                    type="checkbox"
                    checked={checkedList.includes(brand.id)}
                  />
                  <span>{brand.title}</span>
                </label>
              );
            })}
          </div>
          <div className={styles.sidebar__buttons}>
            <button className={styles.enter}>Применить</button>
            <button className={styles.delete}>Сбросить</button>
          </div>
        </div>
      </aside>
 
  );
}
