import Link from "next/link";
import { Brand } from "../../../../interfaces/brands";
import styles from "./Brands.module.scss";

export default function BrandsShop({ list }: { list: Brand[] }) {
  return (
    <div className={styles.brands}>
      {list.map((brand) => {
        return (
          <Link href="" key={brand.id} className={styles.link}>
            {brand.title}
          </Link>
        );
      })}
    </div>
  );
}
