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
              image: "https://m.media-amazon.com/images/I/51Y3grhyQ1L._SY300_SX300_QL70_FMwebp_.jpg"
            }
          ]
        },
        {
          name: "LAPTOPS",
          items: [
            {
              name: "HP 15 13TH GEN INTEL CORE i3",
              price: "₹45990",
              rating: "⭐ 4.1 (2.2K reviews)",
              link: "https://amzn.to/4t43Nx9",
              image: "https://m.media-amazon.com/images/I/617GQ0W6fxL._SL1500_.jpg"
            }
          ]
        },
        {
          name: "SPEAKERS",
          items: [
            {
              name: "TRIBIT XSOUND GO WIRELESS",
              price: "₹2843",
              rating: "⭐ 4.3 (18K reviews)",
              link: "https://amzn.to/4bxkCec",
              image: "https://m.media-amazon.com/images/I/41mtPtOAkUL._SY300_SX300_QL70_FMwebp_.jpg"
            }
          ]
        },
        {
          name: "TABLETS",
          items: [
            {
              name: "HONOR PAD X9",
              price: "₹15126",
              rating: "⭐ 4.3 (1.8K reviews)",
              link: "https://amzn.to/4dGv44g",
              image: "https://m.media-amazon.com/images/I/418DG-xeJYL._SY300_SX300_QL70_FMwebp_.jpg"
            }
          ]
        },
        {
          name: "EARBUDS",
          items: [
            {
              name: "ONEPLUS NORD BUDS 3r",
              price: "₹1599",
              rating: "⭐ 4.2 (40K reviews)",
              link: "https://amzn.to/3NJisyH",
              image: "https://m.media-amazon.com/images/I/31UrMxaUxbL._SY300_SX300_QL70_FMwebp_.jpg"
            }
          ]
        },
        {
          name: "SMARTWATCHES",
          items: [
            {
              name: "BOAT WAVE CALL 3 SMARTWATCH",
              price: "₹1399",
              rating: "⭐ 4.1 (25K reviews)",
              link: "https://amzn.to/4c3MQgE",
              image: "https://m.media-amazon.com/images/I/41YgzJVIYTL._SY300_SX300_QL70_FMwebp_.jpg"
            }
          ]
        }
      ]
    },

    {
      id: "lifestyle",
      name: "LIFESTYLE",
      sub: [
        {
          name: "SHOES",
          items: [
            {
              name: "U.S. POLO ASSN. MEN'S SHOE",
              price: "₹2199",
              rating: "⭐ 4.4 (1K reviews)",
              link: "https://amzn.to/4bwnyHX",
              image: "https://m.media-amazon.com/images/I/71Jqccq3+aL._SY575_.jpg"
            }
          ]
        },
        {
          name: "WATCHES",
          items: [
            {
              name: "TITAN KARISHMA ANALOG WRISTWATCH",
              price: "₹1994",
              rating: "⭐ 4.4 (1.4K reviews)",
              link: "https://amzn.to/4t1w7Ae",
              image: "https://m.media-amazon.com/images/I/51ykbSj-eoL._SX679_.jpg"
            }
          ]
        }
      ]
    },

    {
      id: "trending",
      name: "TRENDING 🔥",
      sub: [
        {
          name: "TOP PICKS",
          items: [
            {
              name: "HEALTHSENSE WEIGHT MACHINE FOR KITCHEN",
              price: "₹699",
              rating: "⭐ 4.1 (8.3K reviews)",
              link: "https://amzn.to/3NnDq6o",
              image: "https://m.media-amazon.com/images/I/71VQ93ago8L._SL1500_.jpg"
            }
          ]
        }
      ]
    }
  ];

  const filtered = categories.map(cat => ({
    ...cat,
    sub: cat.sub.map(sub => ({
      ...sub,
      items: sub.items.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    }))
  }));

  return (
    <div style={{ padding: "20px", color: "white" }}>

      {/* NAVBAR */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        marginBottom: "30px"
      }}>
        
        {/* LEFT */}
        <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
          <button onClick={() => scrollTo("tech")} style={navBtn}>TECH</button>
          <button onClick={() => scrollTo("lifestyle")} style={navBtn}>LIFESTYLE</button>
          <button onClick={() => scrollTo("trending")} style={navBtn}>TRENDING 🔥</button>
        </div>

        {/* CENTER */}
        <div style={{ textAlign: "center" }}>
          <input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={searchBar}
          />
        </div>

        {/* RIGHT */}
        <div style={{ textAlign: "right" }}>
          <a href="mailto:themk1762010@gmail.com">
            <button style={contactBtn}>Contact Us</button>
          </a>
        </div>
      </div>

      {/* TITLE */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", letterSpacing: "2px" }}>TREAZURE</h1>
        <p>Smart deals. Zero waste. Only the best picks.</p>
      </div>

      {/* PRODUCTS */}
      {filtered.map((cat, i) => (
        <div key={i} id={cat.id} style={{ marginTop: "40px" }}>
          <h2>{cat.name}</h2>

          {cat.sub.map((sub, j) => (
            <div key={j}>
              <h3 style={{ opacity: 0.7 }}>{sub.name}</h3>

              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                {sub.items.map((p, k) => (
                  <div key={k} style={card}>
                    
                    <img src={p.image} style={imgStyle} />

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

/* STYLES */

const navBtn = {
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold"
};

const contactBtn = {
  padding: "8px 15px",
  borderRadius: "10px",
  border: "none",
  background: "white",
  color: "black",
  cursor: "pointer"
};

const searchBar = {
  padding: "10px",
  borderRadius: "12px",
  border: "none",
  width: "300px",
  textAlign: "center"
};

const card = {
  background: "#1c1c1c",
  padding: "15px",
  borderRadius: "12px",
  width: "220px"
};

const imgStyle = {
  width: "100%",
  height: "150px",
  objectFit: "contain",
  background: "white",
  borderRadius: "10px",
  marginBottom: "10px"
};

const dealBtn = {
  marginTop: "10px",
  width: "100%",
  backgroundColor: "white",
  color: "black",
  padding: "10px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer"
};