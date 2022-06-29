import * as React from "react";
import styles from "./textarea.module.scss";
const TextArea = ({ onChange, value, required = false }) => {
  return (
    <div className={styles.textArea__container}>
      <textarea
        minLength={60}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

export default TextArea;

export const TextAreaSmall = ({
  onChange,
  value,
  rows = 3,
  required = false,
}) => {
  return (
    <div>
      <textarea
        minLength={60}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
      ></textarea>
    </div>
  );
};
