import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.notFound}>
      <h2>Sorry</h2>
      <p>The page is not found</p>
      <h4 h4 onClick={() => navigate("/")}>
        Click here to go to homepage...
      </h4>
    </div>
  );
};

export default NotFound;
