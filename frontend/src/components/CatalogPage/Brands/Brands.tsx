import { Brand } from "../../../../interfaces/brands";
import styles from "./Brands.module.scss";

export default function BrandsShop({ list }: { list: Brand[] }) {
  return (
    <div className={styles.brands}>
      {list.map((brand) => {
        return (
          <button key={brand.id} className={styles.link}>
            {brand.title}
          </button>
        );
      })}
    </div>
  );
}
