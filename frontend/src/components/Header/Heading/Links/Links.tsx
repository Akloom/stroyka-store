"use client"
import styles from "./Links.module.scss";
import Link from "next/link";
import { CartIcon, OrdersIcon, ProfileIcon } from "@/components/Icons/Icons";
import { useSelector } from "react-redux";
import { getBasketCount } from "@/store/reducers/basket.selectors";

const Links = () => {
  const count = useSelector(getBasketCount)
  return (
    <>
      <Link href={"/profile"} className={styles.link}>
        <ProfileIcon />
        <span>Профиль</span>
      </Link>
      <Link href={"/orders"} className={styles.link}>
        <OrdersIcon />
        <span>Заказы</span>
      </Link>
      <Link href={"/cart"} className={styles.link}>
      {count}
        <CartIcon />
        <span>Корзина</span>
      </Link>
    </>
  );
};

export default Links;
