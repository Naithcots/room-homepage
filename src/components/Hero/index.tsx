import Image from "next/image";
import { FC, useState } from "react";
import styles from "./index.module.css";
import slides from "./data/slides";
import ArrowContainer from "./ArrowContainer";

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
    <section className={styles.hero}>
      <div className={styles["first-panel"]}>
        <Image
          src={slides[slideId].imageUrl.mobile}
          width={375}
          height={360}
          alt=""
          className={styles.image}
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
        <ArrowContainer
          variant="desktop"
          previousSlide={previousSlide}
          nextSlide={nextSlide}
        />
      </div>
    </section>
  );
};
export default Hero;
