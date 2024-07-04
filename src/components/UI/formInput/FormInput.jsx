import styles from "./FormInput.module.css";

export const FormInput = ({
  labelName,
  placeholder,
  inputType,
  id,
  value,
  onChange,
  isHasError,
}) => {
  return (
    <div>
      <label className={styles.formLabel} htmlFor={id}>
        {labelName}
      </label>
      <input
        className={`${styles.formInput} ${isHasError && styles.error}`}
        type={inputType}
        placeholder={placeholder || "..."}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
