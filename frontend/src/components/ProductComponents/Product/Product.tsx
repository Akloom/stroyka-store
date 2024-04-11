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

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/store/reducers/basket.reducer";
import { useState } from "react";
import Modal from "@/shared/Modal/Modal";
import { useRouter } from "next/navigation";

export default function ProductComponent({
  productinfo,
}: {
  productinfo: ProductInfo;
}) {
 

  const [added, setAdded] = useState<ProductInfo | null>(null)
  const dispatch = useDispatch();
  const userouter = useRouter();
  const onAdded = (productinfo: ProductInfo) => {
    setAdded(productinfo)
    dispatch(addProduct(productinfo))
  }
  
    const [count , setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <>
      <div className={styles.productPrice}>
      <div className={styles.product_info}>
        <div className={styles.productImage}>
          {productinfo.Image && (
            <Image className={styles.image_product}
              src={productinfo.Image.url}
              alt={productinfo.title}
              width={400}
              height={350}
            />
          )}
        </div>
        <div className={styles.product_information}>
          <h2 className={styles.product_title}>{productinfo.title}</h2>
          <h6 className={styles.InStock}><InStock />В наличии</h6>
          <span className={styles.prices}>{productinfo.Price}₽</span>
          <div className={styles.product_buttons}>
            <button className={styles.product_basket} onClick={() => onAdded(productinfo)}>В корзину</button>
            <div className={styles.plus_minus}>
              <button className={styles.product_btn} onClick={increment}>
                <ProductPlus />
              </button>
              <div className={styles.product_number}>{count}</div>
              <button className={styles.product_btn} onClick={decrement}>
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
        { productinfo.content && <BlocksRenderer content={productinfo.content} />}
      </div>
      </div>   




      
      <Modal isVisible={!!added} onClose={() => setAdded(null)} title="Товар добавлен в корзину">
      <div className={styles.product_modal}>
      {
        productinfo.Image && <Image className={styles.modal}
        src={productinfo.Image.url}
        alt={productinfo.title}
        width={180}
        height={134}
      />
      }
            <div className={styles.modal_information}>
            <h2 className={styles.modal_title}>{productinfo.title}</h2>
            <span className={styles.prices}>{productinfo.Price}₽</span>
            <span className={styles.amount}><span>{count}</span>шт</span>
            </div>
           </div> 
           <div className={styles.modal_buttons}>
              <button className={styles.modal_basket}onClick={() => userouter.push(`/cart/${productinfo.id}`)}>Перейти в корзину</button>
              <button className={styles.modal_continue}onClick={() => setAdded(null)}>Продолжить покупки</button>
            </div>
        </Modal>  
    </>
  );
}
