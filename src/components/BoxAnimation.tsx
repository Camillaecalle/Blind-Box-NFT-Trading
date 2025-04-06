// components/BoxAnimation.tsx
import React from 'react';
import styles from '../styles/BoxAnimation.module.css';

const BoxAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.box}>
          <div className={styles.boxBody}>
            <img className={styles.img} src="/assets/nft-sample.png" alt="NFT reward" />
            <div className={styles.boxLid}>
              <div className={styles.boxBowtie}></div>
            </div>
          </div>
        </div>

        <div className={styles.sidebar}>
          <h3 className={styles.nftTitle}>🎁 Fluffy Bunny</h3>
          <p className={styles.nftDetail}>Rank: #104</p>
          <p className={styles.nftDetail}>Rarity: <span className={styles.legendary}>Legendary</span></p>
          <button className={styles.addBtn}>Add NFT to Profile</button>
        </div>
      </div>
    </div>
  );
};

export default BoxAnimation;