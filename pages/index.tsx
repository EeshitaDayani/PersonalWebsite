import Head from "next/head";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";

import ParticlesBg from "./particlesBg";
import Hero from "./hero";
import WorkEx from "./workEx"
import Projects from "./projects";
import Contact from "./contact";

const mont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${mont.className}`}>
        {/* <ParticlesBg /> */}
        <Hero />
        <WorkEx />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
