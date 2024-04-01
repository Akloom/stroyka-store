import Image from "next/image";
import { Category } from "../../../../interfaces/category";
import styles from "./Card.module.scss";
import Link from "next/link";

export default function CardShop({ list }: { list: Category[] }) {
  return (
    <div className={styles.cards}>
      {" "}
      {list.map((category) => {
        return (
          <div key={category.id} className={styles.card}>
            {category.image && (
              <Image
                src={category.image.url}
                alt={category.title}
                width={200}
                height={200}
              />
            )}
            {category.title}

            <ul>
              {category.subcategories.map((sub) => {
                return (
                  <li className={styles.lishka} key={sub.id}>
                    <nav className={styles.nav}>
                      <Link href={`/category/${sub.id}`} className={styles.nav__link}>
                        {sub.title}
                      </Link>
                    </nav>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      
    </div>
  );
}
