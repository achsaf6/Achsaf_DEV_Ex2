import React from "react";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <h1 className={styles.logo}>origamiz</h1>
        <p className={styles.tagline}>
          Discover the art of mindful movement with our origami-inspired exercises—where your body becomes
          the paper and every pose unfolds a journey to inner peace.
        </p>
        <p className={styles.team}>—origamiz team—</p>
      </div>

      <div >
        <img src="/swan.png" alt="Origami" className={styles.image} />

        <form className={styles.form}>
          <h2 className={styles.formTitle}>Introduce yourself</h2>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="ori_gami@gmail.com"
              className={styles.input}
            />
            <span className={styles.foundText}>Found!</span>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Come fold in
          </button>
        </form>

        <p className={styles.signup}>
          New here? <a href="/signup">sign up</a>
        </p>
      </div>
    </div>
  );
}
