"use client";
import React, { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const categories = [
    {
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

  // FILTER
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
          <span>TECH</span>
          <span>LIFESTYLE</span>
          <span>TRENDING 🔥</span>
        </div>

        {/* CENTER */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "10px",
            border: "none",
            width: "250px",
          }}
        />

        {/* RIGHT */}
        <div>
          <button
            style={{
              padding: "8px 15px",
              borderRadius: "10px",
              border: "none",
              background: "white",
              color: "black",
              cursor: "pointer",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* TITLE */}
      <h1 style={{ textAlign: "center" }}>TREAZURE</h1>
      <p style={{ textAlign: "center" }}>
        Smart deals. Zero waste. Only the best picks.
      </p>

      {/* PRODUCTS */}
      {filteredCategories.map((cat, i) => (
        <div key={i} style={{ marginTop: "30px" }}>
          <h2>{cat.name}</h2>

          {cat.sub.map((sub, j) => (
            <div key={j} style={{ marginBottom: "20px" }}>
              <h3 style={{ opacity: 0.7 }}>{sub.name}</h3>

              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                {sub.items.map((p, k) => (
                  <div
                    key={k}
                    style={{
                      background: "#1c1c1c",
                      padding: "15px",
                      borderRadius: "12px",
                      width: "220px",
                    }}
                  >
                    <h4>{p.name}</h4>
                    <p>{p.price}</p>
                    <p>{p.rating}</p>

                    <a href={p.link} target="_blank">
                      <button
                        style={{
                          marginTop: "10px",
                          width: "100%",
                          backgroundColor: "white",
                          color: "black",
                          padding: "10px",
                          borderRadius: "12px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        View Deal 🔥
                      </button>
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