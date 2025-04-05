// src/components/Navbar.tsx
import React from "react";
import styles from "../styles/Navbar.module.css";

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🌸 BlindBox</div>
      <button className={styles.button}>Connect Wallet</button>
    </nav>
  );
};