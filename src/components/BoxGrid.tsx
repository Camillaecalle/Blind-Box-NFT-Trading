import React from 'react';
import styles from '../styles/BoxGrid.module.css';

const BoxGrid = () => {
  const boxes = [
    {
      title: "Platinum Box",
      price: "Ξ0.05",
      rarity: "Highest Rare Drop Rate",
      // image: "/placeholder.svg",
      image: "/assets/platinum-box.png",
    },
    {
      title: "Gold Box",
      price: "Ξ0.03",
      rarity: "High Rare Drop Rate",
      // image: "/placeholder.svg",
      image: "/assets/gold-box.png",
    },
    {
      title: "Silver Box",
      price: "Ξ0.01",
      rarity: "Standard Drop Rate",
      // image: "/placeholder.svg",
      image: "/assets/silver-box.png",
    },
  ];

  return (
    <div className={styles.boxGrid}>
      {boxes.map((box, i) => (
        <div className={styles.boxCard} key={i}>
          <img src="/assets/bow.png" alt="Bow ribbon" className={styles.bow} />
          {/* <div className={`${styles.decorativeElement} ${styles.topLeft}`} /> */}
          <img src={box.image} alt="" className={styles.boxImage} />
          {/* <div className={styles.boxImage}> */}
            {/* <img src="/assets/logo.png" alt="" className={styles.previewImage} /> */}
          {/* </div> */}
          <div className={styles.boxContent}>
            <h3 className={styles.boxTitle}>{box.title}</h3>
            <p className={styles.boxPrice}>{box.price}</p>
            <p className={styles.boxRarity}>{box.rarity}</p>
            <button className={styles.openButton}>Open Box</button>
            {/* <button
                className={styles.openButton}
                onClick={() => onOpenBox(box.tier)}
              >
                Open Box
            </button> */}
          </div>
          {/* <div className={`${styles.decorativeElement} ${styles.bottomRight}`} /> */}
        </div>
      ))}
    </div>
  );
};

export default BoxGrid;