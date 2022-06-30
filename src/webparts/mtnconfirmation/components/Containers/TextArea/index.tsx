import * as React from "react";
import styles from "./textarea.module.scss";
const TextArea = ({ onChange, value,readOnly=false }) => {
  return (
    <div className={styles.textArea__container}>
      <textarea value={value} onChange={onChange} readOnly={readOnly}></textarea>
    </div>
  );
};

export default TextArea;
