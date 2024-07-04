import React from "react";
import styles from "./Button.module.css";
import Spinner from "../spinner/Spinner";

export const Button = (props) => {
  const buttonClasses = `${styles.button} ${
    props.variant === "outlined" ? styles.outlined : ""
  }`;
  return (
    <button className={buttonClasses} type={props.type} onClick={props.onClick}>
      {!props.spinning ? props.children : <Spinner />}
    </button>
  );
};
