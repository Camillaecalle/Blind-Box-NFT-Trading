import React from 'react';
// import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BoxGrid from '../components/BoxGrid';
// import Footer from '../components/Footer';
import styles from '../styles/PageWrapper.module.css';

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* <Header /> */}
      {/* <div className={styles.wavyBorder} /> */}
      <HeroSection />
      <BoxGrid />
      {/* <div className={styles.wavyBorder} /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;

// // pages/index.tsx
// import Head from 'next/head';
// import BoxAnimation from '@/components/BoxAnimation';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>BlindBox NFT</title>
//       </Head>
//       <main>
//         <BoxAnimation />
//       </main>
//     </>
//   );
// }