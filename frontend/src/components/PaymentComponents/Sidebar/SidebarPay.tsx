import styles from "./SidebarPay.module.scss";
export default function SidebarPay() {
  return (
    <aside className={styles.SidebarCart}>
      <div className={styles.cart_total}>
        <h4 className={styles.h3h3h}>Итого</h4>
        <ul className={styles.cart_info}>
          <li className={styles.side_info}>
            Количество товара<span></span>
          </li>
          <li className={styles.side_info}>
            Товаров на сумму <span></span>
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
        <button className={styles.cart_btn}></button>
      </div>
    </aside>
  );
}
