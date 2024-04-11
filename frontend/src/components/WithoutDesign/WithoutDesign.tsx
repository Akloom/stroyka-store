import Link from "next/link";
import styles from "./WithoutDesign.module.scss";

const WithoutDesign = () => {
  return (
    <section className={styles.withoutDesign}>
      <h1 className={styles.withoutDesign__title}>
        У страницы не было дизайна
      </h1>
      <div className={styles.withoutDesign__content}>
        <p className={styles.withoutDesign__desc}>
          Разработчик Akloom и Keomav приносит свои извинения, но на данной странице не
          было дизайна, поэтому она не сделана
        </p>
        <Link href="/" className={styles.withoutDesign__link}>
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};

export default WithoutDesign;
