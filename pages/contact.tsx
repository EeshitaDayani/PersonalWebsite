import styles from "@/styles/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact} id='contact'>
      <p className={styles.heading}>Let's get in touch!</p>
      <div className={styles.user}>
        <input
          type="text"
          className={styles.input}
          placeholder="Your name"
        ></input>
        <input
          type="text"
          className={styles.input}
          placeholder="Your email"
        ></input>
        <textarea
          className={styles.message}
          placeholder="Type a message"
        ></textarea>
      </div>
      <button className={styles.button}>
        SEND
      </button>
      <div className={styles.links}>
        
      </div>
    </div>
  );
}
