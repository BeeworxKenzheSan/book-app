import React from "react";
import { Wrapper } from "../wrapper/Wrapper";
import styles from "./BookForm.module.css";
import { Button } from "../UI/appButton/Button";

export const BookForm = () => {
  return (
    <Wrapper>
      <div className={styles["book-form"]}>
        <h2>Add a New Book</h2>
      </div>
      <Button variant="outlined">DELETE</Button>
    </Wrapper>
  );
};
