import Link from "next/link";
import styles from "./Nav.module.scss";
import cn from "clsx";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__item}>
        <Link className={styles.nav__link} href={"/profile"}>
          Личный профиль
        </Link>
        <Link className={styles.nav__link} href={"/orders"}>
          Заказы
        </Link>
        <Link className={styles.nav__link} href={"/favorites"}>
          Избранное
        </Link>
        <Link className={styles.nav__link} href={"/cart"}>
          Корзина
        </Link>
      </div>
      <div className={styles.nav__item}>
        <Link className={styles.nav__link} href={"/catalog"}>
          Каталог
        </Link>
        <Link className={styles.nav__link} href={"/promotions"}>
          Акции
        </Link>
        <Link className={styles.nav__link} href={"/brands"}>
          Бренды
        </Link>
        <Link className={styles.nav__link} href={"/contacts"}>
          Контакты
        </Link>
      </div>
      <div className={styles.nav__item}>
        <Link className={styles.nav__link} href={"/"}>
          Стать продавцом
        </Link>
        <Link className={styles.nav__link} href={"/delivery"}>
          Доставка
        </Link>
        <Link className={styles.nav__link} href={"/return"}>
          Возврат
        </Link>
        <Link className={styles.nav__link} href={"/documentation"}>
          Документация
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
