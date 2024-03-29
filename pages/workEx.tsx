import styles from "@/styles/workEx.module.css";

export default function workEx() {
  return (
    <div className={styles.workex} id='work'>
      <p className={styles.title}>WORK EXPERIENCE</p>
      <div className={styles.card}>
        <p className={styles.heading}>Fullstack</p>
        <p className={styles.description}>
          With experience at Searchspring and as a Research Assistant, I excel
          in Fullstack Development, bridging frontend and backend seamlessly to
          innovate for consumer needs.
        </p>
      </div>
      <div className={styles.card}>
        <p className={styles.heading}>Data Science</p>
        <p className={styles.description}>
          At Geotab, my role as a Data Scientist cultivated expertise in
          deriving insights from complex datasets, enabling impactful solutions
          for product and consumer analytics.
        </p>
      </div>
    </div>
  );
}
