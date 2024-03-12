import Image from "next/image";
import styles from "./PopularPromotionsCard.module.scss";

interface PopularPromotionsCardProps {
  data: {
    description: string;
    image: string;
    oldPrice: string;
    newPrice: string;
    discount: string;
  };
}

const PopularPromotionsCard = ({ data }: PopularPromotionsCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <p className={styles.card__discount}>{data.discount}</p>
        <Image src={data.image} alt="image" width={278} height={208} />
      </div>
      <div className={styles.card__content}>
        <p className={styles.card__desc}>{data.description}</p>
        <div className={styles.card__actions}>
          <div className={styles.card__prices}>
            <span className={styles.card__newPrice}>{data.newPrice}</span>
            <span className={styles.card__oldPrice}>{data.oldPrice}</span>
          </div>
          <button className={styles.card__button}>В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default PopularPromotionsCard;