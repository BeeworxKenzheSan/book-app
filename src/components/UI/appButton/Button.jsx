import React from "react";
import styles from "./Button.module.css";
import Spinner from "../spinner/Spinner";

export const Button = (props) => {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      {!props.spinning ? props.children : <Spinner />}
    </button>
  );
};
