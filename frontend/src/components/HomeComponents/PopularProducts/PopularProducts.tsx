import Link from "next/link";
import styles from "./PopularProducts.module.scss";
import cn from "clsx";
import { ArrowLinkIcon } from "@/components/Icons/Icons";
import PopularProductCard from "./PopularProductsCard/PopularProductsCard";

interface Product {
  id: string;
  description: string;
  image: {
    url: string;
  };
  price: number;
}

interface PopularProductsProps {
  data: Product[];
}

const PopularProducts = ({ data }: PopularProductsProps) => {
  return (
    <div className={cn(styles.products, "container")}>
      <div className={styles.products__heading}>
        <h1 className={styles.products__title}>Популярные товары</h1>
        <Link href="/products" className={styles.products__link}>
          <span>Все товары</span>
          <ArrowLinkIcon />
        </Link>
      </div>

      <div className={styles.products__cards}>
        {data.map((itemData) => {
          return <PopularProductCard key={itemData.id} data={itemData} />;
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
