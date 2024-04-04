"use client";
import { ProductInfo } from "@/interfaces/Product";
import styles from "./Product.module.scss";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
  InStock,
  ProductMinus,
  ProductPlus,
  TruckProductPage,
} from "@/components/Icons/Icons";
import { FormCart } from "@/components/CartComponents/Form/Form";
export default function ProductComponent({
  productinfo,
}: {
  productinfo: ProductInfo;
}) {
  return (
    <div className={styles.productPrice}>
      <div className={styles.product_info}>
        <div className={styles.productImage}>
          {productinfo.Image && (
            <Image
              src={productinfo.Image.url}
              alt={productinfo.title}
              width={400}
              height={350}
            />
          )}
        </div>
        <div className={styles.product_information}>
          <h2 className={styles.product_title}>{productinfo.title}</h2>
          <h6 className={styles.InStock}><InStock /> В наличии</h6>
          <span className={styles.prices}>{productinfo.Price}₽</span>
          <div className={styles.product_buttons}>
            <button className={styles.product_basket}>В корзину</button>
            <div className={styles.plus_minus}>
              <button className={styles.product_btn}>
                <ProductPlus />
              </button>
              <input type="number" className={styles.product_number} />
              <button className={styles.product_btn}>
                <ProductMinus />
              </button>
            </div>
          </div>
          <div className={styles.product_delivery}>
            <TruckProductPage />
            <p className={styles.dos}>
              Доставка осуществляется курьерами поставщика или службой курьеров
              Достависта. Также товар можно забрать самостоятельно от поставщика
            </p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.description}>Описание</h1>
        <BlocksRenderer content={productinfo.content} />
      </div>
    </div>
  );
}
