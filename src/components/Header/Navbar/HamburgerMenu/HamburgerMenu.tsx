import styles from "./HamburgerMenu.module.scss";
import cn from "clsx";

interface HamburgerMenuProps {
  show: () => void;
  menuActive: boolean;
}

const HamburgerMenu = ({ show, menuActive }: HamburgerMenuProps) => {
  return (
    <>
      <button
        onClick={show}
        className={cn(
          styles.hamburger__menu,
          menuActive ? styles.menu__active : ""
        )}
      >
        <span></span>
      </button>
    </>
  );
};

export default HamburgerMenu;
