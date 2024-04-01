import Image from "next/image";
import styles from "./CategoryCard.module.scss";
import { CardCategory } from "../../../../interfaces/category";
import { Product } from "../../../../interfaces/subcategory";

export default function CategoryCardShop({ list }: { list: Product[] }) {
  return (
    <div className={styles.categoryCard}>
      {list.map((product) => {
        return (
          <div key={product.id} className={styles.cardcategory}>
            <h3>{product.title}</h3>
            {product.Image && (
              <Image
                src={product.Image.url}
                alt={product.title}
                width={200}
                height={200}
              />
            )}
            <button className={styles.btn}>В корзину</button>
          </div>
        );
      })}
    </div>
  );
}
