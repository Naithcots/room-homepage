import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>room</title>
      </Head>

      <div className={styles.container}>
        <Header />
        <Hero />
        <About />
      </div>
    </>
  );
};
export default Home;
