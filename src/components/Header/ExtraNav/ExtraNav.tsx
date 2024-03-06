"use client";
import Link from "next/link";
import styles from "./ExtraNav.module.scss";
import cn from "clsx";
import { usePathname } from "next/navigation";

const ExtraNav = () => {
  const pathname = usePathname();

  return (
    <div className={styles.nav}>
      <nav className={cn(styles.nav__content, "container")}>
        <Link
          href={"/promotions"}
          className={cn(
            styles.nav__link,
            pathname === "/promotions" ? styles.link__active : styles.nav__link
          )}
        >
          Акции
        </Link>
        <Link
          href={"/construction_materials"}
          className={cn(
            styles.nav__link,
            pathname === "/construction_materials"
              ? styles.link__active
              : styles.nav__link
          )}
        >
          Строительные материалы
        </Link>
        <Link
          href={"/ceramic_tile"}
          className={cn(
            styles.nav__link,
            pathname === "/ceramic_tile"
              ? styles.link__active
              : styles.nav__link
          )}
        >
          Керамическая плитка
        </Link>
        <Link
          href={"/paints"}
          className={cn(
            styles.nav__link,
            pathname === "/paints" ? styles.link__active : styles.nav__link
          )}
        >
          Краски
        </Link>
        <Link
          href={"/plumbing"}
          className={cn(
            styles.nav__link,
            pathname === "/plumbing" ? styles.link__active : styles.nav__link
          )}
        >
          Сантехника
        </Link>
        <Link
          href={"/floor_coverings"}
          className={cn(
            styles.nav__link,
            pathname === "/floor_coverings"
              ? styles.link__active
              : styles.nav__link
          )}
        >
          Напольные покрытия
        </Link>
        <Link
          href={"/tools"}
          className={cn(
            styles.nav__link,
            pathname === "/tools" ? styles.link__active : styles.nav__link
          )}
        >
          Инструменты
        </Link>
        <Link
          href={"/wallpapers"}
          className={cn(
            styles.nav__link,
            pathname === "/wallpapers" ? styles.link__active : styles.nav__link
          )}
        >
          Обои
        </Link>
        <Link
          href={"/windows"}
          className={cn(
            styles.nav__link,
            pathname === "/windows" ? styles.link__active : styles.nav__link
          )}
        >
          Окна
        </Link>
      </nav>
    </div>
  );
};

export default ExtraNav;
