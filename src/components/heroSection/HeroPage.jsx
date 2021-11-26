import styles from "./HeroPage.module.css";
import { Resume } from "../ResumeButton/Resume";

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
          <Resume />
        </div>
      </div>
    </>
  );
}

export default HeroPage;
