"use client"
import { BoxSideCart, InfoCartSidebar, TruckProductPage } from "@/components/Icons/Icons";
import styles from "./SidebarCart.module.scss";
import { ProductInfo } from "@/interfaces/Product";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getBasketCount, getTotalPrice } from "@/store/reducers/basket.selectors";


export default function SidebarCart() {
  const router = useRouter()
  const total = useSelector(getTotalPrice)
  const count = useSelector(getBasketCount)


  // const isPayment = pathname?.split('/').includes('payment')

  // const onOrdered = () => {
  //   if(isPayment) {
  //     router.push('cart/thanks')
  //   } else {
  //     router.push('cart/payment')
  //   }
  // } 
  
  const handleClick = () => {
    router.push('/payment$')
  }
  return (
    
    <div className={styles.SidebarBasket}>
      <aside className={styles.SidebarCart}>
        <div className={styles.cart_total}>
          <h4 className={styles.h3h3h}>Итого</h4>
          <ul className={styles.cart_info}>
            <li className={styles.side_info}>
              Количество товара<span>{count}</span>
            </li>
            <li className={styles.side_info}>
              Товаров на сумму <span>{total}</span>
            </li>
            <li className={styles.side_info}>
              Поставщик <span>Аксон</span>
            </li>
          </ul>
        </div>
        <div className={styles.payment}>
          <h4 className={styles.cart_h4}>Способ оплаты</h4>
          <div className={styles.payment_cart}>
            <ul className={styles.pay_cart}>
              <li className={styles.pay_info}>
                Картой <input type="checkbox" />
              </li>
              <li className={styles.pay_info}>
                Наличными <input type="checkbox" />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.sidebar_button}>
          <button className={styles.cart_btn} onClick={ handleClick }>Оформить заказ</button>
        </div>
      </aside>
      <div className={styles.sidecart_info}>
        <p className={styles.iss}> 
            <InfoCartSidebar />
          Можно сделать заказ только от одного поставщика
        </p>
        <p>
            <TruckProductPage />
          Доставка осуществляется курьерами поставщика или службой курьеров
          Достависта. Также товар можно забрать самостоятельно от поставщика
        </p>
        <p>
            <BoxSideCart />
        Точная сумма доставки будет определена после после подтверждения заказа
        </p>
      </div>
    </div>
    
  );
  
}
