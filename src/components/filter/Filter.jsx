import { Wrapper } from "../wrapper/Wrapper";
import styles from "./Filter.module.css";

export const Filter = () => {
  return (
    <Wrapper>
      <div className={styles.filter}>
        <h2>Filters</h2>
      </div>
    </Wrapper>
  );
};
