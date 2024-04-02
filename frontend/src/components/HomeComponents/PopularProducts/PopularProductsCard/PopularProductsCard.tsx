import Image from "next/image";
import styles from "./PopularProductsCard.module.scss";

interface PopularProductsCardProps {
  data: {
    description: string;
    image: {
      url: string;
    };
    price: number;
  };
}

const PopularProductsCard = ({ data }: PopularProductsCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image
          src={data.image.url}
          alt="image"
          fill
          sizes="100%"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.card__content}>
        <p className={styles.card__desc}>{data.description}</p>
        <div className={styles.card__actions}>
          <span className={styles.card__price}>{data.price}₽</span>
          <button className={styles.card__button}>В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductsCard;
