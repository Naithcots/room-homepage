import Image from "next/image";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.hamburger}>
        <Image
          src={"/images/icon-hamburger.svg"}
          width={20}
          height={14}
          alt=""
        />
      </button>
      <h3 className={styles.heading}>room</h3>
    </header>
  );
};
export default Header;
