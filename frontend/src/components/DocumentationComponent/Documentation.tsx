import Image from "next/image";
import styles from "./Documentation.module.scss";
import cn from "clsx";
import { IDocs } from "@/interfaces/docs";

interface DocumentationProps {
  data: IDocs[];
}

const Documentation = ({ data }: DocumentationProps) => {
  return (
    <section className={cn(styles.docs, "container")}>
      <div className={styles.docs__row}>
        {data.map((itemData) => {
          return (
            <div className={styles.docs__card} key={itemData.id}>
              <div className={styles.docs__cardHeading}>
                <Image
                  src="/img/docs-image.png"
                  alt="image"
                  fill
                  sizes="100%"
                  className={styles.docs__cardImage}
                />
                <div className={styles.docs__cardName}>
                  <h5>{itemData.name}</h5>
                </div>
              </div>
              <div className={styles.docs__cardContent}>
                <div className={styles.docs__cardInfo}>
                  <h5 className={styles.docs__cardTitle}>{itemData.name}</h5>
                  <span className={styles.docs__cardText}>
                    {itemData.file.ext.slice(1).toUpperCase()} •{" "}
                    {itemData.file.size}KB
                  </span>
                </div>
                <a href={itemData.file.url} className={styles.docs__cardBtn}>
                  Скачать
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Documentation;
