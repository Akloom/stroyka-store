import Image from "next/image";
import styles from "./Copyright.module.scss";
import cn from "clsx";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <div className={cn(styles.copyright__content, "container")}>
        <span className={styles.copyright__text}>© СтройкаСтор</span>
        <div className={styles.copyright__images}>
          <Image src="/img/visa.svg" alt="image" width={64} height={22} />
          <Image
            src="/img/master-card.svg"
            alt="image"
            width={64}
            height={22}
          />
          <Image
            src="/img/master-card-2.svg"
            alt="image"
            width={64}
            height={22}
          />
          <Image src="/img/mir.svg" alt="image" width={64} height={22} />
        </div>
        <span className={styles.copyright__text}>Cделано в KRUGLOV STUDIO</span>
      </div>
    </div>
  );
};

export default Copyright;
