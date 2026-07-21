import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <h2 className={styles.newsletterTitle}>
        BE A PART OF <br />
        SORA
      </h2>
      <p className={styles.newsletterDescription}>
        Our newsletter keeps you updated on all our news, collections and access
        to exclusive offers.
      </p>
      <form className={styles.form}>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="email"></label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your E-Mail here"
          />
        </div>
        <button className={styles.btnSubmit} type="submit">
          Subscribe now
        </button>
      </form>
    </div>
  );
}
