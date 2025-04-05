// src/pages/index.tsx
import React from "react";
import { Navbar } from "../components/Navbar";
import { BlindBoxCard } from "../components/BlindBoxCard";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFF0F6", fontFamily: "Fredoka, sans-serif" }}>
      <Navbar />

      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 1rem" }}>
        <h1 style={{ fontSize: "2rem", color: "#db2777", marginBottom: "2.5rem", textAlign: "center" }}>
          Blind Box NFT Trading Game
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", maxWidth: "900px", width: "100%" }}>
          <BlindBoxCard
            title="Platinum Box"
            price="Ξ0.05"
            color="purple-200"
            rarity="Highest Rare Drop Rate"
          />
          <BlindBoxCard
            title="Gold Box"
            price="Ξ0.03"
            color="yellow-200"
            rarity="High Rare Drop Rate"
          />
          <BlindBoxCard
            title="Silver Box"
            price="Ξ0.01"
            color="gray-200"
            rarity="Standard Drop Rate"
          />
        </div>
      </main>
    </div>
  );
}