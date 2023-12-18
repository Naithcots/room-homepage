import Header from "@/components/Header";
import MainGrid from "@/components/MainGrid";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>room</title>
      </Head>

      <div className={styles.container}>
        <Header />
        <MainGrid />
      </div>
    </>
  );
};
export default Home;
