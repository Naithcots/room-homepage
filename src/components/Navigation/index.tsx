import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.css";

type NavigationProps = {
  onClose: () => void;
};

const Navigation: FC<NavigationProps> = ({ onClose }) => {
  return (
    <>
      <div className={styles.overlay} />
      <nav className={styles.nav}>
        <div className={styles.block}>
          <button className={styles.button} onClick={onClose}>
            <Image
              src={"/images/icon-close.svg"}
              width={16}
              height={16}
              alt=""
            />
          </button>
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
      </nav>
    </>
  );
};
export default Navigation;
