"use client"
import Image from "next/image";
import styles from "./CategoryCard.module.scss";
import { Product } from "@/interfaces/subcategory";
import { useRouter } from "next/navigation";

export default function CategoryCardShop({ list }: { list: Product[] }) {
  const router = useRouter()
  return (
    <div className={styles.categoryCard}>
      {list.map((product) => {
        return (
          <div key={product.id} className={styles.cardcategory}>
            <h3 onClick={() => router.push(`/product/${product.id}`)}>{product.title}</h3>
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
