import Image from "next/image";
import styles from "./index.module.css";

const Hero = () => {
  return (
    <section>
      <div className={styles["first-panel"]}>
        <Image
          src={"/images/mobile-image-hero-1.jpg"}
          width={840}
          height={534}
          alt=""
          className={styles.image}
        />
        <div className={styles["arrow-container"]}>
          <button className={styles.arrow}>
            <Image
              src={"/images/icon-angle-left.svg"}
              width={28}
              height={48}
              alt="arrow-left"
              className={styles.icon}
            />
          </button>
          <button className={styles.arrow}>
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
        <h2 className={styles.title}>Discover innovative ways to decorate</h2>
        <p className={styles.description}>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
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
