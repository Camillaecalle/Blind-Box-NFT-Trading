import React from 'react';
import styles from '../styles/BoxGrid.module.css';

const BoxGrid = () => {
  const boxes = [
    {
      title: "Platinum Box",
      price: "Ξ0.05",
      rarity: "Highest Rare Drop Rate",
      image: "/placeholder.svg",
    },
    {
      title: "Gold Box",
      price: "Ξ0.03",
      rarity: "High Rare Drop Rate",
      image: "/placeholder.svg",
    },
    {
      title: "Silver Box",
      price: "Ξ0.01",
      rarity: "Standard Drop Rate",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className={styles.boxGrid}>
      {boxes.map((box, i) => (
        <div className={styles.boxCard} key={i}>
          <div className={`${styles.decorativeElement} ${styles.topLeft}`} />
          <img src={box.image} alt={box.title} className={styles.boxImage} />
          <div className={styles.boxContent}>
            <h3 className={styles.boxTitle}>{box.title}</h3>
            <p className={styles.boxPrice}>{box.price}</p>
            <p className={styles.boxRarity}>{box.rarity}</p>
          </div>
          <div className={`${styles.decorativeElement} ${styles.bottomRight}`} />
        </div>
      ))}
    </div>
  );
};

export default BoxGrid;