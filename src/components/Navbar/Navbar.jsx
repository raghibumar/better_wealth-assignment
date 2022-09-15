import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <h1 onClick={() => navigate("/")}>The Dojo Blog</h1>
      <div className={styles.links}>
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/create")}>New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
