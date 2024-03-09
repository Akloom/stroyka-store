import Link from "next/link";
import styles from "./HomePromotions.module.scss";
import cn from "clsx";
import { ArrowLinkIcon } from "@/components/Icons/Icons";
import PopularPromotionsCard from "../PopularPromotions/PopularPromotionsCard/PopularPromotionsCard";

interface Promotion {
  description: string;
  image: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
}

interface HomePromotionsProps {
  data: Promotion[];
}

const HomePromotions = ({ data }: HomePromotionsProps) => {
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

export default HomePromotions;
