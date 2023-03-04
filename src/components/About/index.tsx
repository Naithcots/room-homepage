import Image from "next/image";
import styles from "./index.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles["image-container"]}>
        <Image
          src={"/images/image-about-dark.jpg"}
          width={420}
          height={266}
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.panel}>
        <h4 className={styles.title}>ABOUT OUR FURNITURE</h4>
        <p className={styles.description}>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className={styles["image-container"]}>
        <Image
          src={"/images/image-about-light.jpg"}
          width={440}
          height={266}
          alt=""
          className={styles.image}
        />
      </div>
    </section>
  );
};
export default About;
