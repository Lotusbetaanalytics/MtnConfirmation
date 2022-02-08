import * as React from "react";
import styles from "./textarea.module.scss";
const TextArea = ({ onChange }) => {
  return (
    <div className={styles.textArea__container}>
      <textarea onChange={onChange}></textarea>
    </div>
  );
};

export default TextArea;
