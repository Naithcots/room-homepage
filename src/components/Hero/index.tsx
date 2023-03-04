import Image from "next/image";
import { useState } from "react";
import styles from "./index.module.css";
import slides from "./data/slides";

const slidesCount = slides.length;

const Hero = () => {
  const [slideId, setSlideId] = useState(0);

  const previousSlide = () => {
    setSlideId((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlideId((prev) => (prev + 1) % slidesCount);
  };

  return (
    <section>
      <div className={styles["first-panel"]}>
        <Image
          src={slides[slideId].imageUrl.mobile}
          width={840}
          height={534}
          alt=""
          className={styles.image}
        />
        <div className={styles["arrow-container"]}>
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
      </div>
      <div className={styles["second-panel"]}>
        <h2 className={styles.title}>{slides[slideId].title}</h2>
        <p className={styles.description}>{slides[slideId].description}</p>
        <button className={styles.cta}>
          <p className={styles["spaced-text"]}>SHOP NOW</p>
          <Image
            src={"/images/icon-arrow.svg"}
            width={40}
            height={12}
            alt=""
            className={styles["cta-arrow"]}
          />
        </button>
      </div>
    </section>
  );
};
export default Hero;
