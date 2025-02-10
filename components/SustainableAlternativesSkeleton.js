import React from "react";
import styles from "./SustainableAlternatives.module.css";

const SustainableAlternativesSkeleton = () => (
  <div className="py-3">
    <div className="flex items-center justify-between mb-4 px-1">
      <div>
        <div className={`h-6 w-40 rounded mb-1 ${styles.skeleton}`}></div>
        <div className={`h-4 w-32 rounded ${styles.skeleton}`}></div>
      </div>
    </div>

    <div className="space-y-3">
      {[1, 2].map((item) => (
        <div key={item} className={styles.alternativeCard}>
          {/* Circular Image Skeleton */}
          <div className={`${styles.productImage} ${styles.skeleton}`}></div>

          <div className="flex-1">
            {/* Title Skeleton */}
            <div className={`h-5 w-3/4 rounded mb-2 ${styles.skeleton}`}></div>

            {/* Description Skeleton */}
            <div className={`h-4 w-full rounded mb-1 ${styles.skeleton}`}></div>
            <div className={`h-4 w-2/3 rounded mb-3 ${styles.skeleton}`}></div>

            {/* Meta Info Skeleton */}
            <div className="flex justify-between items-center">
              <div className={`h-5 w-20 rounded ${styles.skeleton}`}></div>
              <div className={`h-8 w-24 rounded-full ${styles.skeleton}`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SustainableAlternativesSkeleton;
