import styles from "./Actions.module.scss";
import Link from "next/link";
import cn from "clsx";
import { HamburgerIcon, SearchIcon } from "@/components/Icons/Icons";

const Actions = () => {
  return (
    <>
      <Link href={"/catalog"} className={styles.link}>
        <HamburgerIcon />
        <span>Каталог</span>
      </Link>
      <div className={styles.search}>
        <input type="text" placeholder="Поиск..." className={styles.input} />
        <SearchIcon />
      </div>
    </>
  );
};

export default Actions;
