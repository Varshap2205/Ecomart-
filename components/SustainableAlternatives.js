import React, { useState } from "react";
import styles from "./SustainableAlternatives.module.css";

const ProductImage = ({ src, alt }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={`${styles.productImage} bg-gray-100 flex items-center justify-center`}
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={styles.productImage}
      onError={() => setImageError(true)}
    />
  );
};

const SustainableCard = ({ alternative }) => (
  <div
    className={styles.alternativeCard}
    onClick={() => window.open(alternative.product.product_link, "_blank")}
  >
    <ProductImage
      src={alternative.product.image_url}
      alt={alternative.product.name}
    />

    <div className={styles.productInfo}>
      <h3 className={styles.productName}>{alternative.product.name}</h3>
      <p className={styles.productDescription}>
        {alternative.product.description}
      </p>

      <div className={styles.productMeta}>
        <span className={styles.price}>₹{alternative.product.price}</span>
        <button
          className={styles.viewButton}
          onClick={(e) => {
            e.stopPropagation();
            window.open(alternative.product.product_link, "_blank");
          }}
        >
          View Product
          <svg
            className={styles.arrowIcon}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const SustainableAlternatives = ({ alternatives }) => {
  if (!alternatives?.length) return null;

  return (
    <div className="py-3">
      <div className="flex items-center justify-between mb-4 px-1">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Sustainable Alternatives
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            {alternatives.length} eco-friendly options found
          </p>
        </div>
      </div>
      <div className="space-y-3">
        {alternatives.slice(0, 2).map((alternative) => (
          <SustainableCard key={alternative.id} alternative={alternative} />
        ))}
      </div>
    </div>
  );
};

export default SustainableAlternatives;
