import Link from "next/link";
import styles from "./HomeCategories.module.scss";
import cn from "clsx";
import { ArrowLinkIcon } from "@/components/Icons/Icons";
import HomeCategoriesCard from "./HomeCategoriesCard/HomeCategoriesCard";

interface Categories {
  id: number;
  title: string;
  image: string;
}

interface HomeCategoriesProps {
  data: Categories[];
}

const HomeCategories = ({ data }: HomeCategoriesProps) => {
  return (
    <div className={cn(styles.categories, "container")}>
      <div className={styles.categories__heading}>
        <h1 className={styles.categories__title}>Популярные категории</h1>
        <Link href="/categories" className={styles.categories__link}>
          <span>Все акции</span>
          <ArrowLinkIcon />
        </Link>
      </div>

      <div className={styles.categories__cards}>
        {data.map((itemData) => {
          return (
            <Link
              href={`/category/${itemData.title}`}
              style={{ textDecoration: "none" }}
            >
              <HomeCategoriesCard data={itemData} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCategories;
