import styles from "@/styles/hero.module.css";
import Image from "next/image";
// import photo from "@/public/photo.png";
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
          <p id={styles.intro}>Hi! My name is</p>
          <p id={styles.name}>Eeshita Dayani </p>
          <p id={styles.description}>Fullstack Developer | Data Scientist</p>
        </div>
        <Image className={styles.image} src={photo.default} alt="Image" />
        <div className={styles.subtitle}>
          {/* <h3>
          I'm a 3rd year Computer Science student at the Univeristy of Waterloo
        </h3> */}
        </div>
      </div>
      <div className={styles.greenContainer}></div>
    </div>
  );
}
