import { React, useState } from "react";
import PropTypes from "prop-types";
import styles from "./SustainabilityAnalysis.module.css"; // Import the CSS module
import SustainabilityLoading from "./SustainabilityLoading";

const SustainabilityAnalysis = ({ analysis }) => {
  const [isLoading, setIsLoading] = useState(false);

  const getColor = (percentage, parameterName) => {
    if (parameterName === "carbonFootprint") return styles.blue;
    if (percentage < 50) return styles.red;
    if (percentage < 75) return styles.orange;
    return styles.green;
  };

  const getEmoji = (percentage) => {
    if (percentage < 50) return "😔";
    if (percentage < 75) return "✨";
    return "⭐";
  };

  const getParameterIcon = (key) => {
    const icons = {
      carbonFootprint: "🌍",
      ecoCertifications: "📜",
      energyEfficiency: "⚡",
      recyclability: "♻️",
      waterUsage: "💧",
      biodegradability: "🌱",
      toxicMaterials: "⚠️",
      lifespan: "⏳",
      repairability: "🔧",
      packagingWaste: "📦",
      transportDistance: "🚚",
    };
    return icons[key] || "📊";
  };

  const renderParameter = (param) => (
    <div className={styles.parameter} key={param.parameter}>
      <h3 className={styles.parameterTitle}>
        {getParameterIcon(param.parameter)} {param.parameter}
        <span className={styles.weightBadge}>
          Weight: {(param.weight * 100).toFixed()}%
        </span>
      </h3>
      <div className={styles.parameterContent}>
        <div className={styles["progress-bar"]}>
          {isLoading ? (
            <div className={styles.progressLoading}>
              <div className={styles.skeleton}>
                <div className={styles.skeletonShimmer}></div>
              </div>
            </div>
          ) : (
            <div
              className={`${styles.progress} ${getColor(
                param.rawScore,
                param.parameter
              )}`}
              style={{
                width: `${param.rawScore}%`,
                transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              data-value={
                param.parameter === "carbonFootprint"
                  ? `${param.rawScore}% towards sustainability`
                  : `${param.rawScore}%`
              }
            />
          )}
        </div>
        <div className={styles.scoreWrapper}>
          <span className={styles.actualValue}>
            {param.actualValue} {param.unit}
          </span>
          <span className={styles.contribution}>
            Contribution: {param.weightedScore}
          </span>
          <span className={styles.emoji}>
            {!isLoading && getEmoji(param.rawScore)}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles["analysis-results"]}>
      <div className={styles.card}>
        <h2 className={styles.title}>🌿 Sustainability Analysis</h2>

        <div className={styles["overall-score"]}>
          <h3>Overall Sustainability Score</h3>
          <div className={styles.scoreDisplay}>
            <span className={styles.scoreNumber}>
              {analysis.sustainabilityScore}
            </span>
            <span className={styles.scoreTotal}>/100</span>
            <span className={styles.scoreEmoji}>
              {getEmoji(analysis.sustainabilityScore)}
            </span>
          </div>
        </div>

        <div className={styles.parameters}>
          {analysis.weightedBreakdown
            .sort((a, b) => {
              if (a.parameter === "carbonFootprint") return 1;
              if (b.parameter === "carbonFootprint") return -1;
              return 0;
            })
            .map((param) => renderParameter(param))}
        </div>
      </div>
    </div>
  );
};

SustainabilityAnalysis.propTypes = {
  analysis: PropTypes.shape({
    sustainabilityScore: PropTypes.number.isRequired,
    weightedBreakdown: PropTypes.arrayOf(
      PropTypes.shape({
        parameter: PropTypes.string.isRequired,
        actualValue: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
        rawScore: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
        weightedScore: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default SustainabilityAnalysis;
