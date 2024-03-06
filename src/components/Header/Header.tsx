import styles from "./Header.module.scss";
import Navbar from "./Navbar/Navbar";
import Heading from "./Heading/Heading";
import ExtraNav from "./ExtraNav/ExtraNav";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <Heading />
      <ExtraNav />
    </header>
  );
};

export default Header;
