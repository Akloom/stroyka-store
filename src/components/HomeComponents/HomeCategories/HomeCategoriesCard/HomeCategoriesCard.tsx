import Image from "next/image";
import styles from "./HomeCategoriesCard.module.scss";

interface HomeCategoriesCardProps {
  data: {
    title: string;
    image: string;
  };
}

const HomeCategoriesCard = ({ data }: HomeCategoriesCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>{data.title}</div>
      <div className={styles.card__image}>
        <Image src={data.image} alt="image" width={278} height={208} />
      </div>
    </div>
  );
};

export default HomeCategoriesCard;
