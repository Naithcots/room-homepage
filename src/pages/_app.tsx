import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { League_Spartan } from "next/font/google";
import Head from "next/head";

const leagueSpartan = League_Spartan({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${leagueSpartan.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
