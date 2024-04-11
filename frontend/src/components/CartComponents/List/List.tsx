"use client";
import { ProductMinus, ProductPlus } from "@/components/Icons/Icons";
import styles from "./List.module.scss";
import { getBasketCount, getCartList } from "@/store/reducers/basket.selectors";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function ListCart() {
  const [isVisible, setIsVisible] = useState(true)
  const handleButtonClick = () => {
    setIsVisible(false);
  }
  const counts = useSelector(getBasketCount)
   const [count, setCount] = useState(0);
   const increment = () => {
   setCount(count + 1);
  };
   const decrement = () => {
     setCount(count - 1);
   };
  
  const list = useSelector(getCartList);
  return (
    <ul  className={styles.cartShop} >
      { 
        list.map((item) => {
          return (
            isVisible &&
            <ul className={styles.listCart_shop}>
              <li className={styles.list_image}>
                <Image
                  src={item.Image.url}
                  alt={item.title}
                  width={200}
                  height={200}
                />
              </li>
              <ul className={styles.product_cart}>
                <li className={styles.cart_info}>
                  <div className={styles.information_cart}>
                  <h3 className={styles.cart_title}>{item.title}</h3>
                  <span className={styles.cart_price}>{item.Price}</span>
                  </div>
                  <li className={styles.cart_buttons}>
                    <button className={styles.cartbtn1} onClick={increment}>
                      <ProductPlus />
                    </button>
                    <span className={styles.cart_num}>{counts}</span>
                    <button className={styles.cartbtn2} onClick={decrement}>
                      <ProductMinus />
                    </button>
                  </li>
                </li>
                <div className={styles.code_product}>
                  <h3 >Код товара:</h3>
                  <div className={styles.delete_btn}>
                    <button className={styles.delete_product} onClick={handleButtonClick}>
                      Удалить товар
                    </button>
                  </div>
                </div>
              </ul> 
            </ul>
          );
        })}
    </ul>
  );
}
