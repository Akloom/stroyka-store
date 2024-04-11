"use client";
import Image from "next/image";
import styles from "./CategoryCard.module.scss";
import { useRouter } from "next/navigation";
import { ProductInfo } from "@/interfaces/Product";
import { addProduct } from "@/store/reducers/basket.reducer";
import { useState } from "react";
import { useDispatch } from "react-redux";



export default function CategoryCardShop({ list }: { list: ProductInfo[] }) {
  const [added, setAdded] = useState<ProductInfo | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const onAdded = (productinfo: ProductInfo) => {
    setAdded(productinfo);
    dispatch(addProduct(productinfo));
  };
  return (
  
      <div className={styles.categoryCard}>
        {list.map((productinfo) => {
          return (
            <div key={productinfo.id} className={styles.cardcategory}>
              {productinfo.Image && (
                <Image 
                  className={styles.image}
                  src={productinfo.Image.url}
                  alt={productinfo.title}
                  width={200}
                  height={200}
                />
              )}
              <div className={styles.product_info}>
                <h3
                  className=""
                  onClick={() => router.push(`/product/${productinfo.id}`)}
                >
                  {productinfo.title}{" "}
                </h3>
              </div>
              <span className={styles.spanPrice}>{productinfo.Price}₽</span>
              <div className={styles.category_btn}>
                <button
                  className={styles.btn}
                >
                  В корзину
                </button>
              </div>
            </div>
          );
          
        })}
        
        
      </div>
    
  );
}
