import About from "../About";
import Hero from "../Hero";
import styles from "./index.module.css";

const MainGrid = () => {
  return (
    <main>
      <div className={styles.grid}>
        <Hero />
        <About />
      </div>
    </main>
  );
};
export default MainGrid;
