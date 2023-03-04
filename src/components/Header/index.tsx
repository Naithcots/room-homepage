import Image from "next/image";
import { useState } from "react";
import Navigation from "../Navigation";
import styles from "./index.module.css";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const openNavigation = () => {
    setNavigationOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeNavigation = () => {
    setNavigationOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-panel"]}>
        <button className={styles.hamburger} onClick={openNavigation}>
          <Image
            src={"/images/icon-hamburger.svg"}
            width={20}
            height={14}
            alt=""
          />
        </button>
        <h3 className={styles.heading}>room</h3>
      </div>
      {navigationOpen && <Navigation onClose={closeNavigation} />}
    </header>
  );
};
export default Header;
