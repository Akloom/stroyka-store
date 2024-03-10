import Link from "next/link";
import styles from "./PopularBrands.module.scss";
import cn from "clsx";
import { ArrowLinkIcon } from "@/components/Icons/Icons";
import Image from "next/image";

interface Brands {
  id: number;
  image: string;
}

interface PopularBrandsProps {
  data: Brands[];
}

const PopularBrands = ({ data }: PopularBrandsProps) => {
  return (
    <div className={cn(styles.brands, "container")}>
      <div className={styles.brands__heading}>
        <h1 className={styles.brands__title}>Популярные бренды</h1>
        <Link href="/brands" className={styles.brands__link}>
          <span>Все бренды</span>
          <ArrowLinkIcon />
        </Link>
      </div>

      <div className={styles.brands__cards}>
        {data.map((itemData) => {
          return (
            <div className={styles.brands__card}>
              <Image
                src={itemData.image}
                alt="image"
                width={180}
                height={124}
                className={styles.brands__image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularBrands;
