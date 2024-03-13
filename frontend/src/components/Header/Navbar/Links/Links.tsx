import Link from "next/link";
import styles from "./Links.module.scss";

const Links = () => {
  return (
    <>
      <Link href={"/brands"} className={styles.link}>
        Бренды
      </Link>
      <Link href={"/delivery"} className={styles.link}>
        Доставка
      </Link>
      <Link href={"/return"} className={styles.link}>
        Возврат
      </Link>
      <Link href={"/documentation"} className={styles.link}>
        Документация
      </Link>
      <Link href={"/contacts"} className={styles.link}>
        Контакты
      </Link>
    </>
  );
};

export default Links;
