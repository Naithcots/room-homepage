import Image from "next/image";
import { useState } from "react";
import ArrowContainer from "./ArrowContainer";
import slides from "./data/slides";
import styles from "./index.module.css";

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
    <>
      <div className={styles["cols-first"]}>
        <Image
          src={slides[slideId].imageUrl.mobile}
          width={375}
          height={360}
          alt=""
          className={styles["mobile-image"]}
        />
        <Image
          src={slides[slideId].imageUrl.desktop}
          width={840}
          height={534}
          alt=""
          className={styles["desktop-image"]}
        />
        <ArrowContainer
          variant="mobile"
          previousSlide={previousSlide}
          nextSlide={nextSlide}
        />
      </div>

      <div className={styles["cols-second"]}>
        <ArrowContainer
          variant="desktop"
          previousSlide={previousSlide}
          nextSlide={nextSlide}
        />
      </div>

      <div className={styles["cols-third"]}>
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
    </>
  );
};
export default Hero;
