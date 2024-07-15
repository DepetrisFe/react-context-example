import React from "react";
import styles from "./main-box.module.css";
import CardOne from "../card-one";
import CardTwo from "../card-two";
import CardThree from "../card-three";

const MainBox = () => {
  return (
    <div className={styles.main}>
      <CardOne />
      <CardTwo />
      <CardThree />
    </div>
  );
};

export default MainBox;
