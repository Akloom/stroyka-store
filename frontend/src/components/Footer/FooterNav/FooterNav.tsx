import styles from "./FooterNav.module.scss";
import cn from "clsx";
import Nav from "./Nav/Nav";
import Link from "next/link";
import Image from "next/image";
import { LetterIcon, LocationIcon } from "@/components/Icons/Icons";

const FooterNav = () => {
  return (
    <div className={styles.footer}>
      <div className={cn(styles.footer__content, "container")}>
        <div className={styles.footer__info}>
          <Link href={"/"} className={styles.footer__logo}>
            <Image
              src="/img/logo-light-icon.svg"
              alt="logo"
              width={180}
              height={46}
              priority
            />
          </Link>
          <Link
            href={"mailto:info@stroykastore.ru"}
            className={styles.footer__link}
          >
            <LetterIcon />
            <span>info@stroykastore.ru</span>
          </Link>
          <Link
            href={"https://www.google.com/maps"}
            className={styles.footer__link}
          >
            <LocationIcon />
            <span>Москва, ул. Камушкина 10</span>
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default FooterNav;
