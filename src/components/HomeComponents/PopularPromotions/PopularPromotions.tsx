import Link from "next/link";
import styles from "./PopularPromotions.module.scss";
import cn from "clsx";
import PopularPromotionsCard from "./PopularPromotionsCard/PopularPromotionsCard";
import { ArrowLinkIcon } from "@/components/Icons/Icons";

interface Promotion {
  description: string;
  image: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
}

interface PopularPromotionsProps {
  data: Promotion[];
}

const PopularPromotions = ({ data }: PopularPromotionsProps) => {
  return (
    <div className={cn(styles.promotions, "container")}>
      <div className={styles.promotions__heading}>
        <h1 className={styles.promotions__title}>Акции</h1>
        <Link href="/promotions" className={styles.promotions__link}>
          <span>Все акции</span>
          <ArrowLinkIcon />
        </Link>
      </div>

      <div className={styles.promotions__cards}>
        {data.map((itemData) => {
          return <PopularPromotionsCard data={itemData} />;
        })}
      </div>
    </div>
  );
};

export default PopularPromotions;
