"use client";
import { useSelector } from "react-redux";
import styles from "./OrderList.module.scss";
import Image from "next/image";
import {
  getBasketCount,
  getCartList,
  getOrderList,
} from "@/store/reducers/basket.selectors";

export default function OrderList() {
  const count = useSelector(getBasketCount);
  const list = useSelector(getOrderList);
  return (
    <ul className={styles.cartShop}>
      {list.map((item) => {
        return (
          <ul className={styles.listCart_shop}>
            <li className={styles.list_image}>
              <Image className={styles.image}
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
                  <span className={styles.cart_price}>{item.Price}Р</span>
                </div>
                <li className={styles.cart_buttons}>
                  <span className={styles.cart_num}>Количество: {count}</span>
                </li>
              </li>
             
            </ul>
            <div className={styles.status}>
            <div className={styles.info_order}>
                <h1 className={styles.zakaz}>Заказ от 12 апреля</h1>
                <h1 className={styles.zakaz}>34078988-0047</h1>
              </div>
              <div className={styles.pya_order}>
                <h1 className={styles.zakaz}>Статус <br />   Оплачен</h1>
              </div>
              </div>
          </ul>
        );
      })}
    </ul>
  );
}
