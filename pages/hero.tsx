import styles from "@/styles/hero.module.css";
import Image from "next/image";
const photo = require("@/public/photo.png");

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
        <div className={styles.navbar}>
          <button className={styles.button}>ABOUT</button>
          <button className={styles.button}>PROJECTS</button>
          <button className={styles.button}>CONTACT</button>
        </div>
      <div className={styles.hero}>
        <div className={styles.title}>
          <p id={styles.name}>Eeshita Dayani </p>
          <p id={styles.description}>SOFTWARE DEVELOPER</p>
        </div>
        <Image className={styles.image} src={photo.default} alt="Image" />
        <div className={styles.subtitle}>
        </div>
      </div>
    </div>
  );
}
