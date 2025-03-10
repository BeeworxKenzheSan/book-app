import React from "react";
import styles from "./Wrapper.module.css";

export const Wrapper = ({ children }) => {
  return <div className={styles["app-block"]}>{children}</div>;
};
