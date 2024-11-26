
"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

const API_KEY = "FNowA1Th6GfulA6dEjjuG45VRb983NM51wnXKdEz"

async function getData(count: number) {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch NASA data");
  }

  return await response.json(); // Returns a parsed JSON array
}


export default function NasaPage() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData(5) // Fetch 5 images
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Astronomy Picture of the Day</h1>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <NasaCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function NasaCard({ title, explanation, date, url }: any) {
  return (
    <div className={styles.card}>
      <img src={url} alt={title} className={styles.image} />
      <h2>{title}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p>{explanation}</p>
    </div>
  );
}
