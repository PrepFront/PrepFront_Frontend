import Head from "next/head";
import { Inter } from "@next/font/google";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layouts"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PrepFront</title>
        <meta name="description" content="Your pathway to successful career🚀" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <Layout>
          <HeroSection/>
        </Layout>
      </div>
    </>
  );
}
