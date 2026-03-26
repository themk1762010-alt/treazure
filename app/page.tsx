"use client";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const products = [
    { name: "REALME NARZO 80 PRO 5G", price: 19999, rating: "4.3 ⭐", category: "tech", link: "https://amzn.to/3Pu5OV1" },
    { name: "HP 15 i3 LAPTOP", price: 45990, rating: "4.1 ⭐", category: "tech", link: "https://amzn.to/4t43Nx9" },
    { name: "TRIBIT SPEAKER", price: 2843, rating: "4.3 ⭐", category: "tech", link: "https://amzn.to/4bxkCec" },
    { name: "HONOR PAD X9", price: 15126, rating: "4.3 ⭐", category: "tech", link: "https://amzn.to/4dGv44g" },
    { name: "ONEPLUS NORD BUDS", price: 1599, rating: "4.2 ⭐", category: "tech", link: "https://amzn.to/3NJisyH" },
    { name: "BOAT SMARTWATCH", price: 1399, rating: "4.1 ⭐", category: "tech", link: "https://amzn.to/4c3MQgE" },

    { name: "U.S POLO SHOES", price: 2199, rating: "4.4 ⭐", category: "lifestyle", link: "https://amzn.to/4bwnyHX" },
    { name: "TITAN WATCH", price: 1994, rating: "4.4 ⭐", category: "lifestyle", link: "https://amzn.to/4t1w7Ae" },

    { name: "WEIGHT MACHINE", price: 699, rating: "4.1 ⭐", category: "trending", link: "https://amzn.to/3NnDq6o" },
  ];

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ["tech", "lifestyle", "trending"];

  return (
    <div style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", padding: "20px" }}>
      
      {/* NAVBAR */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        
        <div>
          {categories.map(c => (
            <a key={c} href={`#${c}`} style={{ marginRight: "15px", color: "white" }}>
              {c.toUpperCase()}
            </a>
          ))}
        </div>

        <h1 style={{ textAlign: "center" }}>TREAZURE</h1>

        <a href="mailto:themk1762010@gmail.com" style={{ color: "white" }}>
          Contact Us
        </a>

      </div>

      {/* SEARCH */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "15px",
            width: "50%",
            borderRadius: "30px",
            border: "none"
          }}
        />
      </div>

      {/* TRUST TEXT */}
      <p style={{ textAlign: "center", marginTop: "15px", color: "#aaa" }}>
        Smart deals. Zero waste. Only the best picks.
      </p>

      {/* PRODUCTS */}
      {categories.map(cat => (
        <div key={cat} id={cat} style={{ marginTop: "40px" }}>
          <h2>{cat.toUpperCase()}</h2>

          <div style={{ display: "flex", overflowX: "auto" }}>
            {filtered
              .filter(p => p.category === cat)
              .map((p, i) => (
                <div key={i} style={{
                  minWidth: "200px",
                  background: "#111",
                  padding: "15px",
                  marginRight: "15px",
                  borderRadius: "10px"
                }}>
                  <h3>{p.name}</h3>
                  <p>₹{p.price}</p>
                  <p>{p.rating}</p>

                  <a href={p.link} target="_blank">
                    <button style={{ marginTop: "10px" }}>View Deal</button>
                  </a>
                </div>
              ))}
          </div>
        </div>
      ))}

    </div>
  );
}