import React from "react";
import styles from "./SustainabilityLoading.module.css";

const SustainabilityLoading = () => {
  const [loadingText, setLoadingText] = React.useState(
    "Analyzing sustainability"
  );

  React.useEffect(() => {
    const texts = [
      "Analyzing sustainability",
      "Calculating carbon footprint",
      "Checking eco certifications",
      "Measuring energy efficiency",
      "Evaluating recyclability",
      "Assessing product lifespan",
      "Verifying repairability",
      "Computing packaging impact",
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setLoadingText(texts[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.card}>
        <div className={styles.loadingContent}>
          <div className={styles.logoContainer}>
            <span className={styles.eco}>Eco</span>
            <span className={styles.mart}>Mart</span>
            <div className={styles.leaf}>🌿</div>
          </div>

          <div className={styles.spinnerContainer}>
            <div className={styles.spinner}>
              <div className={styles.spinnerRing}></div>
              <div className={styles.spinnerRing}></div>
              <div className={styles.spinnerRing}></div>
              <div className={styles.spinnerRing}></div>
            </div>
          </div>

          <div className={styles.loadingText}>
            <span className={styles.dots}>{loadingText}</span>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityLoading;
