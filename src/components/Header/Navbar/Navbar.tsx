"use client";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Links from "./Links/Links";
import Location from "./Location/Location";
import styles from "./Navbar.module.scss";
import cn from "clsx";
import { useEffect, useState } from "react";
import Collapse from "./Collapse/Collapse";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = usePathname();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    setMenuActive(false);
  }, [location]);

  return (
    <div className={styles.navbar}>
      <div className={cn(styles.navbar__content, "container")}>
        <Location />
        <HamburgerMenu show={toggleMenu} menuActive={menuActive} />
        <Collapse menuActive={menuActive} />
      </div>
    </div>
  );
};

export default Navbar;
