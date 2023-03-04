import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>room</title>
      </Head>

      <div>
        <Header />
        <Hero />
        <About />
      </div>
    </>
  );
};
export default Home;
