import styles from "./Location.module.scss";
import cn from "clsx";

const Location = () => {
  return (
    <div className={cn(styles.contacts, "container")}>
      <div className={styles.contacts__location}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.3381544830088!2d74.5930087036145!3d42.87672396556292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7df8c6064d9%3A0x5e0f4e166983dc74!2z0J_RgNC-0YTQtdGB0YHQuNC-0L3QsNC70YzQvdGL0Lkg0LvQuNGG0LXQuSDihJY5OA!5e0!3m2!1sru!2skg!4v1711598327827!5m2!1sru!2skg"
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.contacts__content}>
        <h3 className={styles.contacts__title}>ООО «СтройкаСтор»</h3>
        <div className={styles.contacts__info}>
          <div className={styles.contacts__address}>
            <p>115114, г. Москва, Дербеневская набережная, д. 7, стр. 8</p>
            <p>
              Павелецкая Автобусы 13, 106, 158, 184, 632 Остановка «Дербеневская
              наб., д. 7»
            </p>
          </div>
          <ul className={styles.contacts__list}>
            <li className={styles.contacts__listItem}>
              <span>ОГРН:</span>
              <span>1047796688554</span>
            </li>
            <li className={styles.contacts__listItem}>
              <span>ИНН:</span>
              <span>7703528301</span>
            </li>
            <li className={styles.contacts__listItem}>
              <span>КПП:</span>
              <span>774850001</span>
            </li>
            <li className={styles.contacts__listItem}>
              <span>ОКТМО:</span>
              <span>45380000</span>
            </li>
            <li className={styles.contacts__listItem}>
              <span>Расчетный рублевый счет:</span>
              <span>40702810900001403352</span>
            </li>
            <li className={styles.contacts__listItem}>
              <span>Банк:</span>
              <span> АО «Сбербанк» г. Москва</span>
            </li>
            <li className={styles.contacts__listItem}>
              <span>Корреспондентский счет:</span>
              <span>30101810200000000700</span>
            </li>
            <li className={styles.contacts__listItem}>
              <span>БИК:</span>
              <span>044525700</span>
            </li>
          </ul>
          <div className={styles.contacts__support}>
            <span>Поддержка клиентов</span>
            <span>info@stroykastore.ru</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
