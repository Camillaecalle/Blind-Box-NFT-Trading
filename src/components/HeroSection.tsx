import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>✨ Grow Your Collection ✨</h1>
      <p className={styles.heroDescription}>
      Test your luck by choosing a tier!
      </p>
      <button className={styles.button}>Start Collecting</button>
    </section>
  );
};

export default HeroSection;