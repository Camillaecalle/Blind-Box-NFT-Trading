// src/components/BlindBoxCard.tsx
import React from "react";
import styles from "../styles/BlindBoxCard.module.css";

interface BlindBoxCardProps {
  title: string;
  price: string;
  color: string;
  rarity: string;
}

export const BlindBoxCard: React.FC<BlindBoxCardProps> = ({ title, price, color, rarity }) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>{price}</p>
      <span className={styles.rarity}>{rarity}</span>
      <button className={styles.button}>Open Box</button>
    </div>
  );
};