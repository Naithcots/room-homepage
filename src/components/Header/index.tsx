import Image from "next/image";
import Link from "next/link";
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
        <div className={styles.links}>
          <Link href={"#"} className={styles.link}>
            home
          </Link>
          <Link href={"#"} className={styles.link}>
            shop
          </Link>
          <Link href={"#"} className={styles.link}>
            about
          </Link>
          <Link href={"#"} className={styles.link}>
            contact
          </Link>
        </div>
      </div>
      {navigationOpen && <Navigation onClose={closeNavigation} />}
    </header>
  );
};
export default Header;
