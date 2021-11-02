import styles from "./HeroPage.module.css";

function HeroPage() {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.name_section}>
          <h1>A DEVELOPER</h1>
          <h1> With </h1>
          <h1>Design Insight</h1>
        </div>

        <div className={styles.image_section}>
          <img src="./images/heroimage.png" alt="hero" />
        </div>
      </div>
    </>
  );
}

export default HeroPage;
