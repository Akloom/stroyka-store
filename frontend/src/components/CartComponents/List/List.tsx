"use client";
import {  ThancksSpasibo } from "@/components/Icons/Icons";
import styles from "./List.module.scss";
import { getBasketCount, getCartList } from "@/store/reducers/basket.selectors";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "@/shared/Modal/Modal";

import Link from "next/link";


export default function ListCart(item) {
  const [isVisible, setIsVisible] = useState(true);
  const handleButtonClick = () => {
    setIsVisible(false);
  };
  const counts = useSelector(getBasketCount);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const [added, setAdded] = useState<null>()
  const dispatch = useDispatch();
  const onAdded = () => {
    setAdded(item)
    dispatch(item)
  }
  const list = useSelector(getCartList);
  return (
    <>
    <ul className={styles.cartShop}>
      {list.map((item) => {
        return (
          isVisible && (
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
                    <button className={styles.cartbtn2} onClick={onAdded}>Оплатить</button>
                  </li>
                </li>
                <div className={styles.code_product}>
                  <h3>Код товара: 
                  34078988-0047
                  </h3>
                  <div className={styles.delete_btn}>
                    <button
                      className={styles.delete_product}
                      onClick={handleButtonClick}
                    >
                      Удалить товар
                    </button>
                  </div>
                </div>
              </ul>
            </ul>
          )
       
        );
        
      })
      }
    </ul>
    <Modal isVisible={!!added} onClose={() => setAdded(null)} title="Оплачено">
    <div className={styles.thanks_you}>
           <ThancksSpasibo />
           <h1>Спасибо</h1>
           <div className={styles.description}>
            <p className={styles.title}>Ваша заявка принята. Мы свяжемся с вами в ближайшее время</p>
           </div>
           <div className={styles.button_thx}>
            <Link href="/" className={styles.homepage}>Перейти на главную</Link>
           </div>
        </div>
        </Modal>
    </>
  );
}
