import styles from "@/styles/hero.module.css";
import Image from "next/image";
import NextLink from "next/link";
const photo = require("@/public/photo.png");

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.navbar}>
        <NextLink className={styles.a} href="#work" passHref>
          <button className={styles.button}>WORK</button>
        </NextLink>
        <NextLink className={styles.a} href="#projects" passHref>
          <button className={styles.button}>PROJECTS</button>
        </NextLink>
        <NextLink className={styles.a} href="#contact" passHref>
          <button className={styles.button}>CONTACT</button>
        </NextLink>
      </div>
      <div className={styles.hero}>
        <div className={styles.title}>
          <p id={styles.name}>Eeshita Dayani </p>
          <p id={styles.description}>SOFTWARE DEVELOPER</p>
        </div>
        <Image className={styles.image} src={photo.default} alt="Image" />
        <div className={styles.subtitle}></div>
      </div>
    </div>
  );
}
