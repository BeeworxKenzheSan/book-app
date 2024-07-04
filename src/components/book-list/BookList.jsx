import { Wrapper } from "../wrapper/Wrapper";
import styles from "./BookList.module.css";

export const BookList = () => {
  return (
    <Wrapper>
      <div className={styles["book-list"]}>
        <h2>Book List</h2>
      </div>
    </Wrapper>
  );
};
