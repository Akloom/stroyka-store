"use client"
import Image from "next/image";
import styles from "./PopularPromotionsCard.module.scss";
import { useRouter } from "next/navigation";
import {  useSelector } from "react-redux";
import Modal from "@/shared/Modal/Modal";


interface PopularPromotionsCardProps {
  data: {
    id: number;
    description: string;
    image: {
      url: string;
    };
    price: number;
    discount: number;
  };
}

const PopularPromotionsCard = ({ data }: PopularPromotionsCardProps) => {

  const modal = useSelector(Modal)
  const router = useRouter()
  const newPrice = data.price - (data.price / 100) * data.discount;

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <p className={styles.card__discount}>-{data.discount}%</p>
        <Image src={data.image.url} alt="image" width={278} height={208} />
      </div>
      <div className={styles.card__content}>
        <p className={styles.card__desc} onClick={() => router.push(`/product/${data.id}`)}>{data.description}</p>
        <div className={styles.card__actions}>
          <div className={styles.card__prices}>
            <span className={styles.card__newPrice}>{newPrice}₽</span>
            <span className={styles.card__oldPrice}>{data.price}₽</span>
          </div>
          <button className={styles.card__button} onClick={() => {modal}}>В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default PopularPromotionsCard;
