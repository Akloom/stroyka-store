import Link from "next/link";
import styles from "./PopularCategories.module.scss";
import cn from "clsx";
import { ArrowLinkIcon } from "@/components/Icons/Icons";
import PopularCategoriesCard from "./PopularCategoriesCard/PopularCategoriesCard";

interface Categories {
  id: number;
  title: string;
  image: {
    url: string;
  };
}

interface PopularCategoriesProps {
  data: Categories[];
}

const PopularCategories = ({ data }: PopularCategoriesProps) => {
  return (
    <div className={cn(styles.categories, "container")}>
      <div className={styles.categories__heading}>
        <h1 className={styles.categories__title}>Популярные категории</h1>
        <Link href="/categories" className={styles.categories__link}>
          <span>Все категории</span>
          <ArrowLinkIcon />
        </Link>
      </div>

      <div className={styles.categories__cards}>
        {data.map((itemData) => {
          return (
            <Link
              href={`/category/${itemData.title}`}
              style={{ textDecoration: "none" }}
              key={itemData.id}
            >
              <PopularCategoriesCard data={itemData} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
