import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${styles.btn} ${props.active && styles["btn-boder"]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
