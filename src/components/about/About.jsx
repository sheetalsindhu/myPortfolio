import styles from "./About.module.css";
import { Resume } from "../ResumeButton/Resume";

function About() {
  return (
    <>
      <div id="about" className={styles.about_cont}>
        <div className={styles.about}>
          <div className={styles.aboutDiv}>
            <div className={styles.image_section}>
              <img src="./images/img.jpg" alt="SheetalSindhu" />
            </div>
            <div className={styles.aboutMe}>
              <p className={styles.content}>
                Hello! My name is
                <strong> Sheetal Sindhu.</strong> I am an independent developer
                & designer. I like many different directions related to the
                development of digital products.
              </p>
              <br />

              <p className={styles.content}>
                I loves to build user interfaces and develop them. Strong
                believer that deep user understanding leads to the most
                innovative products. I passionately love what I do. The digital
                world is still very young and it is developing very rapidly, so
                there are always discoveries in it.
              </p>

              <div className={styles.resume}>
                <Resume />
              </div>
            </div>
          </div>

          {/* skills section */}
          <div className={styles.otherSection}>
            <div className={styles.skillsDiv}>
              <h4 className={styles.skills}>Skills</h4>
            </div>
            <div className={styles.otherHalf}>
              <p className={styles.infoContent}>
                HTML / CSS / MongoDb / ExpressJS / React / JavaScript / Redux /
                DSA / Bootstrap / User Interface Design / Prototyping
              </p>
            </div>
          </div>

          {/* eduation section */}
          <div className={styles.otherSection}>
            <div className={styles.skillsDiv}>
              <h4 className={styles.skills}>Education</h4>
            </div>
            <div className={styles.otherHalf}>
              <p className={styles.infoContent}>
                <strong> B.com </strong> - MDU (Aug 2017 - Nov 2020), Haryana
              </p>
            </div>
          </div>

          {/* Experince section */}
          <div className={styles.otherSection}>
            <div className={styles.skillsDiv}>
              <h4 className={styles.skills}>Experience</h4>
            </div>
            <div className={styles.otherHalf}>
              <div className={styles.projects}>
                <p className={styles.infoContent}>
                  <strong>UI/UX Designer</strong> - Intensal (Dec 2020 - April
                  2021), Hong Kong
                </p>
              </div>

              <div className={styles.projects}>
                <p className={styles.infoContent}>
                  <strong>UI/UX Designer</strong> - TieInUp (Jan 2020 - Nov
                  2020), Malaysia
                </p>
              </div>
            </div>
          </div>

          {/* quote section */}
          <div className={styles.quote_section}>
            <p id={styles.quote}>
              DEVELOPER with DESIGNER's EYE & DESIGNER with DEVELOPER's mind.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
