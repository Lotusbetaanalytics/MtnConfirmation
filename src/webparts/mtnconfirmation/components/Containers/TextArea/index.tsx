import * as React from "react";
import styles from "./textarea.module.scss";
const TextArea = ({ onChange, value }) => {
  return (
    <div className={styles.textArea__container}>
      <textarea maxLength={60} value={value} onChange={onChange}></textarea>
    </div>
  );
};

export default TextArea;
