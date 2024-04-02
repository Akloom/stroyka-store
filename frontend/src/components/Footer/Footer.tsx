import Copyright from "./Copyright/Copyright";
import styles from "./Footer.module.scss";
import FooterNav from "./FooterNav/FooterNav";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterNav />
      <Copyright />
    </footer>
  );
};

export default Footer;
