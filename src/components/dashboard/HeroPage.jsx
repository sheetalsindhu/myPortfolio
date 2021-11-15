import styles from "./HeroPage.module.css";

function HeroPage() {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.name_section}>
          <h1 className={styles.h1}>DEVELOPER</h1>
          <div className={styles.subHeading}>
            <p className={styles.h2}> with </p>
            <h1 className={styles.h3}>Design Insight</h1>
          </div>
        </div>

        <div className={styles.image_section}>
          <img src="./images/img.jpg" alt="SheetalSindhu" />
        </div>
      </div>
    </>
  );
}

export default HeroPage;
