import styles from "@/styles/contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validate = (): boolean => {
    const isValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
    return isValid;
  };

  const handleClick = () => {
    setSubmitted(true);
    setIsValid(validate());
  };

  return (
    <div className={styles.contact} id="contact">
      <p className={styles.heading}>Let's get in touch!</p>
      <div className={styles.user}>
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="text"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <textarea
          className={styles.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
      </div>
      <button className={styles.button} onClick={handleClick}>
        SEND
      </button>

      {submitted && isValid && <p>Message sent successfully!</p>}
      {submitted && !isValid && <p>One or more fields is empty</p>}

      <div className={styles.links}></div>
    </div>
  );
}
