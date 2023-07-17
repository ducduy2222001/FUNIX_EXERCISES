import React, { useState } from "react";
import styles from "./style/NavBarItem.module.css";
import Button from "../UI/Button/Button";
export default function NavBarItem(props) {
  const [active, setActive] = useState(props.active);
  return (
    <div className={styles["nav-bar-item"]}>
      <div className={`${active && styles.btnBorder}`}>
        <Button>
          <i className={`fa ${props.icon}`}></i>
          <p>{props.type}</p>
        </Button>
      </div>
    </div>
  );
}
