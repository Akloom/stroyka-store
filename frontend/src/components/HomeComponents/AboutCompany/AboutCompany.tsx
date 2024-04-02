import styles from "./AboutCompany.module.scss";
import cn from "clsx";

const AboutCompany = () => {
  return (
    <div className={styles.about}>
      <div className={cn(styles.about__content, "container")}>
        <h1 className={styles.about__title}>О компании</h1>
        <div className={styles.about__info}>
          <p className={styles.about__desc}>
            В СтройкаСтор вы всегда можете купить все необходимые товары для
            ремонта дома и дачи. Хотите сделать ремонт в квартире? Строите
            загородный дом? Используйте строительные и отделочные материалы из
            нашего каталога.
          </p>
          <p className={styles.about__desc}>
            Быстрая доставка строительных товаров по низким ценам сделает ваши
            покупки более приятными. Ремонт может стоить дешево, если делать его
            с нами. Для вас всегда в наличии более 30 000 товаров для
            строительства по низким ценам каждый день. СтройкаСтор — это широкий
            ассортимент товаров для дома и ремонта недорого; Возможность
            заказать строительные и отделочные материалы для дома и дачи.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
