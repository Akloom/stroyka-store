import styles from "./Steps.module.scss";
import cn from "clsx";

const Steps = () => {
  return (
    <section className={cn(styles.steps, "container")}>
      <h2 className={styles.steps__title}>Как сделать заказ: 4 простых шага</h2>
      <div className={styles.steps__content}>
        <div className={styles.steps__card}>
          <img
            src="/img/steps-1.svg"
            alt="image"
            className={styles.steps__cardImage}
          />
          <p className={styles.steps__cardDesc}>
            Добавьте нужные товары в корзину и оплатите заказ
          </p>
        </div>
        <div className={styles.steps__card}>
          <img
            src="/img/steps-2.svg"
            alt="image"
            className={styles.steps__cardImage}
          />
          <p className={styles.steps__cardDesc}>
            Получите уведомления о подтверждении вашего заказа
          </p>
        </div>
        <div className={styles.steps__card}>
          <img
            src="/img/steps-3.svg"
            alt="image"
            className={styles.steps__cardImage}
          />
          <p className={styles.steps__cardDesc}>
            После подтверждения мы сформируем ваш заказ
          </p>
        </div>
        <div className={styles.steps__card}>
          <img
            src="/img/steps-4.svg"
            alt="image"
            className={styles.steps__cardImage}
          />
          <p className={styles.steps__cardDesc}>Заберите из пунктов выдачи</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
