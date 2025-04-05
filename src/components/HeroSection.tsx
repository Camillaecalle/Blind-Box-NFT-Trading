import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>Discover Rare Digital Collectibles</h1>
      <p className={styles.heroDescription}>
        Trade and collect unique NFT surprise boxes with rare digital items inside. 
        Unbox something amazing today!
      </p>
      <button className={styles.button}>Start Collecting</button>
    </section>
  );
};

export default HeroSection;