import styles from "./BreadCrumps.module.scss";
import Link from "next/link";

interface BreadCrumpsProps {
  path?: string;
  title?: string;
  desc?: string;
  image?: string;
}

const BreadCrumps = ({ path, title, desc, image }: BreadCrumpsProps) => {
  return (
    <div
      className={styles.breadcrumps}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.breadcrumps__content}>
        <div className={styles.breadcrumps__nav}>
          <Link href={"/"} className={styles.breadcrumps__link}>
            Главная
          </Link>
          <div className={styles.breadcrumps__navItem}>
            <span className={styles.breadcrumps__link}>→</span>
            <p className={styles.breadcrumps__link}>{path}</p>
          </div>
        </div>
        <h1 className={styles.breadcrumps__title}>{title}</h1>
        {desc && <p className={styles.breadcrumps__desc}>{desc}</p>}
      </div>
    </div>
  );
};

export default BreadCrumps;
