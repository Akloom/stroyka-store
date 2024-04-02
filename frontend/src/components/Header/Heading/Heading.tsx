import Image from "next/image";
import styles from "./Heading.module.scss";
import cn from "clsx";
import Link from "next/link";
import Links from "./Links/Links";
import Actions from "./Actions/Actions";

const Heading = () => {
  return (
    <div className={styles.heading}>
      <div className={cn(styles.heading__content, "container")}>
        <Link href={"/"} className={styles.heading__logo}>
          <Image
            src="/img/logo-icon.svg"
            alt="logo"
            width={180}
            height={46}
            priority
          />
        </Link>
        <div className={styles.heading__nav}>
          <div className={styles.heading__action}>
            <Actions />
          </div>

          <nav className={styles.heading__links}>
            <Links />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Heading;
