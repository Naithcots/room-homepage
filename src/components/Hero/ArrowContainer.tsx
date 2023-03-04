import Image from "next/image";
import { FC, useState } from "react";
import styles from "./index.module.css";
import slides from "./data/slides";

type ArrowContainerProps = {
  variant: "mobile" | "desktop";
  previousSlide: () => void;
  nextSlide: () => void;
};

const ArrowContainer: FC<ArrowContainerProps> = ({
  variant,
  previousSlide,
  nextSlide,
}) => (
  <div
    className={
      variant === "mobile"
        ? styles["arrow-container"]
        : `${styles["arrow-container"]} ${styles["arrow-container-desktop"]}`
    }
  >
    <button className={styles.arrow} onClick={previousSlide}>
      <Image
        src={"/images/icon-angle-left.svg"}
        width={28}
        height={48}
        alt="arrow-left"
        className={styles.icon}
      />
    </button>
    <button className={styles.arrow} onClick={nextSlide}>
      <Image
        src={"/images/icon-angle-right.svg"}
        width={28}
        height={48}
        alt="arrow-right"
        className={styles.icon}
      />
    </button>
  </div>
);

export default ArrowContainer;
