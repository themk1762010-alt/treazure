"use client";
import React, { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const categories = [
    {
      id: "tech",
      name: "TECH",
      sub: [
        {
          name: "PHONES",
          items: [
            {
              name: "REALME NARZO 80 PRO 5G",
              price: "₹19999",
              rating: "⭐ 4.3 (2.2K reviews)",
              link: "https://amzn.to/3Pu5OV1",
            },
          ],
        },
        {
          name: "LAPTOPS",
          items: [
            {
              name: "HP 15 13TH GEN i3",
              price: "₹45990",
              rating: "⭐ 4.1 (2.2K reviews)",
              link: "https://amzn.to/4t43Nx9",
            },
          ],
        },
        {
          name: "SPEAKERS",
          items: [
            {
              name: "TRIBIT XSOUND GO",
              price: "₹2843",
              rating: "⭐ 4.3 (18K reviews)",
              link: "https://amzn.to/4bxkCec",
            },
          ],
        },
        {
          name: "TABLETS",
          items: [
            {
              name: "HONOR PAD X9",
              price: "₹15126",
              rating: "⭐ 4.3 (1.8K reviews)",
              link: "https://amzn.to/4dGv44g",
            },
          ],
        },
        {
          name: "EARBUDS",
          items: [
            {
              name: "ONEPLUS NORD BUDS 3r",
              price: "₹1599",
              rating: "⭐ 4.2 (40K reviews)",
              link: "https://amzn.to/3NJisyH",
            },
          ],
        },
        {
          name: "SMARTWATCHES",
          items: [
            {
              name: "BOAT WAVE CALL 3",
              price: "₹1399",
              rating: "⭐ 4.1 (25K reviews)",
              link: "https://amzn.to/4c3MQgE",
            },
          ],
        },
      ],
    },
    {
      id: "lifestyle",
      name: "LIFESTYLE",
      sub: [
        {
          name: "SHOES",
          items: [
            {
              name: "U.S. POLO SHOES",
              price: "₹2199",
              rating: "⭐ 4.4 (1K reviews)",
              link: "https://amzn.to/4bwnyHX",
            },
          ],
        },
        {
          name: "WATCHES",
          items: [
            {
              name: "TITAN KARISHMA WATCH",
              price: "₹1994",
              rating: "⭐ 4.4 (1.4K reviews)",
              link: "https://amzn.to/4t1w7Ae",
            },
          ],
        },
      ],
    },
    {
      id: "trending",
      name: "TRENDING 🔥",
      sub: [
        {
          name: "TOP PICKS",
          items: [
            {
              name: "HEALTHSENSE WEIGHT MACHINE",
              price: "₹699",
              rating: "⭐ 4.1 (8.3K reviews)",
              link: "https://amzn.to/3NnDq6o",
            },
          ],
        },
      ],
    },
  ];

  const filteredCategories = categories.map((cat) => ({
    ...cat,
    sub: cat.sub.map((sub) => ({
      ...sub,
      items: sub.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    })),
  }));

  return (
    <div style={{ padding: "20px", color: "white" }}>
      
      {/* 🔥 NAVBAR */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
          <button onClick={() => scrollTo("tech")} style={navBtn}>TECH</button>
          <button onClick={() => scrollTo("lifestyle")} style={navBtn}>LIFESTYLE</button>
          <button onClick={() => scrollTo("trending")} style={navBtn}>
            TRENDING 🔥
          </button>
        </div>

        {/* CENTER SEARCH */}
        <div style={{ textAlign: "center" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "12px",
              border: "none",
              width: "300px",
              textAlign: "center",
            }}
          />
        </div>

        {/* RIGHT CONTACT */}
        <div style={{ textAlign: "right" }}>
          <a href="mailto:themk1762010@gmail.com">
            <button style={contactBtn}>Contact Us</button>
          </a>
        </div>
      </div>

      {/* TITLE */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontWeight: "bold", letterSpacing: "2px" }}>TREAZURE</h1>
        <p>Smart deals. Zero waste. Only the best picks.</p>
      </div>

      {/* PRODUCTS */}
      {filteredCategories.map((cat, i) => (
        <div key={i} id={cat.id} style={{ marginTop: "40px" }}>
          <h2>{cat.name}</h2>

          {cat.sub.map((sub, j) => (
            <div key={j} style={{ marginBottom: "20px" }}>
              <h3 style={{ opacity: 0.7 }}>{sub.name}</h3>

              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                {sub.items.map((p, k) => (
                  <div key={k} style={card}>
                    <h4>{p.name}</h4>
                    <p>{p.price}</p>
                    <p>{p.rating}</p>

                    <a href={p.link} target="_blank">
                      <button style={dealBtn}>View Deal 🔥</button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* 🎨 STYLES */

const navBtn = {
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

const contactBtn = {
  padding: "8px 15px",
  borderRadius: "10px",
  border: "none",
  background: "white",
  color: "black",
  cursor: "pointer",
};

const card = {
  background: "#1c1c1c",
  padding: "15px",
  borderRadius: "12px",
  width: "220px",
};

const dealBtn = {
  marginTop: "10px",
  width: "100%",
  backgroundColor: "white",
  color: "black",
  padding: "10px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
};