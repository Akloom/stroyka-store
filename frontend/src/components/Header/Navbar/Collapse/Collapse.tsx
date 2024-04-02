import Links from "../Links/Links";
import styles from "./Collapse.module.scss";
import cn from "clsx";

interface CollapseProps {
  menuActive: boolean;
}

const Collapse = ({ menuActive }: CollapseProps) => {
  return (
    <div
      className={cn(
        styles.nav__collapse,
        menuActive ? styles.collapse__active : ""
      )}
    >
      <nav className={styles.nav}>
        <Links />
      </nav>
    </div>
  );
};

export default Collapse;
