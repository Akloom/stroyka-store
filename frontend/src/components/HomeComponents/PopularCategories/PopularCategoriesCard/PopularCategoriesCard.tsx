import Image from "next/image";
import styles from "./PopularCategoriesCard.module.scss";

interface PopularCategoriesCardProps {
  data: {
    title: string;
    image: string;
  };
}

const PopularCategoriesCard = ({ data }: PopularCategoriesCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>{data.title}</div>
      <div className={styles.card__image}>
        <Image src={data.image} alt="image" width={278} height={208} />
      </div>
    </div>
  );
};

export default PopularCategoriesCard;
