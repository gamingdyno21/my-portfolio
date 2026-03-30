import styles from "./SpaceBackground.module.scss";

export default function SpaceBackground() {
  return (
    <div className={styles.spaceWrapper}>
      {/* Glow / Milky Way effect */}
      <div className={styles.milkyWay}></div>
      
      {/* Background Stars */}
      <div className={styles.starsContainer}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
      </div>

      {/* Meteors / Shooting Stars */}
      <div className={`${styles.meteor} ${styles.meteor1}`}></div>
      <div className={`${styles.meteor} ${styles.meteor2}`}></div>
      <div className={`${styles.meteor} ${styles.meteor3}`}></div>

      {/* Planet SVG */}
      <svg className={styles.planet} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="25" fill="url(#planet-grad)" />
        <ellipse cx="50" cy="50" rx="42" ry="8" transform="rotate(20 50 50)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="3" />
        <ellipse cx="50" cy="50" rx="48" ry="12" transform="rotate(20 50 50)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <defs>
          <linearGradient id="planet-grad" x1="25" y1="25" x2="75" y2="75">
            <stop offset="0%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#4B0082" />
          </linearGradient>
        </defs>
      </svg>

      {/* Space Satellite SVG */}
      <svg className={styles.satellite} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="42" y="42" width="16" height="16" rx="2" fill="#e0e0e0" />
        <rect x="10" y="46" width="30" height="8" fill="#1e90ff" />
        <line x1="16" y1="46" x2="16" y2="54" stroke="white" strokeWidth="1" />
        <line x1="22" y1="46" x2="22" y2="54" stroke="white" strokeWidth="1" />
        <line x1="28" y1="46" x2="28" y2="54" stroke="white" strokeWidth="1" />
        <line x1="34" y1="46" x2="34" y2="54" stroke="white" strokeWidth="1" />

        <rect x="60" y="46" width="30" height="8" fill="#1e90ff" />
        <line x1="66" y1="46" x2="66" y2="54" stroke="white" strokeWidth="1" />
        <line x1="72" y1="46" x2="72" y2="54" stroke="white" strokeWidth="1" />
        <line x1="78" y1="46" x2="78" y2="54" stroke="white" strokeWidth="1" />
        <line x1="84" y1="46" x2="84" y2="54" stroke="white" strokeWidth="1" />

        <path d="M 50 42 L 50 25" stroke="#e0e0e0" strokeWidth="2" />
        <path d="M 40 25 Q 50 15 60 25" stroke="#e0e0e0" strokeWidth="2" fill="none" />
        <circle cx="50" cy="22" r="2" fill="#ff4500" />
      </svg>
    </div>
  );
}
