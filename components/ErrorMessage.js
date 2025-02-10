import styles from "./UnsupportedSite.module.css";

const ErrorMessage = ({ error, supportedSites }) => {
  switch (error) {
    case "unsupported":
      return (
        <div className={styles.unsupportedSite}>
          <div className={styles.messageCard}>
            <div className={styles.icon}>🌍</div>
            <h2>Oops! Not a Supported Store</h2>
            <p className={styles.mission}>
              At EcoMart, we're on a mission to make online shopping more
              sustainable. We carefully analyze products from selected
              eco-conscious retailers to help you make environmentally
              responsible choices.
            </p>
            <p>Currently available on:</p>
            <ul>
              {supportedSites.map((site) => (
                <li key={site}>• {site}</li>
              ))}
            </ul>
            <p className={styles.suggestion}>
              Join us in making the world a greener place, one purchase at a
              time. Visit any of our supported stores to make sustainable
              shopping choices.
            </p>
            <div className={styles.leaf}>🌿</div>
          </div>
        </div>
      );
    case "notab":
      return (
        <div className={styles.unsupportedSite}>
          <div className={styles.messageCard}>
            <div className={styles.icon}>⚠️</div>
            <h2>No Active Tab Found</h2>
            <p>Please open a supported e-commerce site to use EcoMart</p>
          </div>
        </div>
      );
    default:
      return <div className="text-red-500">Error: {error}</div>;
  }
};

export default ErrorMessage;
