    // import Modal from "@/shared/Modal/Modal";
    // import Image from "next/image";
    // import styles from "./ModalProduct.module.scss";
    // import ProductComponent from "../Product/Product"; 
    // import { useState } from "react";
    // import { ProductInfo } from "@/interfaces/Product";
    // import { useDispatch } from "react-redux";
    // import { useRouter } from "next/router";
    // import { addProduct } from "@/store/reducers/basket.reducer";

    // export default async function ModalProduct() {
    //     const [added, setAdded] = useState<ProductInfo | null>(null)
    //     const dispatch = useDispatch();
    //     const userouter = useRouter();
    //     const onAdded = (productinfo: ProductInfo) => {
    //     setAdded(productinfo)
    //     dispatch(addProduct(productinfo))
    
    // return (
    //     <Modal
    //         isVisible={!!added}
    //         onClose={() => setAdded(null)}
    //         title="Товар добавлен в корзину"
    //     >
    //         <div className={styles.product_modal}>
    //         <Image
    //             className={styles.modal}
    //             src={productinfo.Image.url}
    //             alt={productinfo.title}
    //             width={180}
    //             height={134}
    //         />
    //         <div className={styles.modal_information}>
    //             <h2 className={styles.modal_title}>{productinfo.title}</h2>
    //             <span className={styles.prices}>{productinfo.Price}₽</span>
    //             <span className={styles.amount}>
    //             <span>{count}</span>шт
    //             </span>
    //         </div>
    //         </div>
    //         <div className={styles.modal_buttons}>
    //         <button
    //             className={styles.modal_basket}
    //             onClick={() => userouter.push(`/cart/${productinfo.id}`)}
    //         >
    //             Перейти в корзину
    //         </button>
    //         <button
    //             className={styles.modal_continue}
    //             onClick={() => setAdded(null)}
    //         >
    //             Продолжить покупки
    //         </button>
    //         </div>
    //     </Modal>
    // );
    // }
    // }