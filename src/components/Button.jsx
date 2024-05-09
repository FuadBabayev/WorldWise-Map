import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
    // console.log(type);
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}> 
    {/* ${styles[type]} array icinde yazildi cunki string deyerdir "primary" neticede bele olmalidir styles["primary"] bele yox styles."primary" */}
      {children}
    </button>
  );
}

export default Button;
