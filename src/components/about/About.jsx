import styles from "./About.module.css";
// import { VscArrowBoth } from "react-icons/vsc";
// import gsap from "gsap";
// import { gsap } from "react-gsap";
// import SplitText from "gsap";

function About() {
  // gsap.registerPlugin(SplitText);

  // var tl = gsap.timeline(),
  //   mySplitText = new SplitText("#quote", { type: "words,chars" }),
  //   chars = mySplitText.chars; //an array of all the divs that wrap each character

  // gsap.set("#quote", { perspective: 400 });

  // console.log(chars);

  // tl.from(chars, {
  //   duration: 0.8,
  //   opacity: 0,
  //   scale: 0,
  //   y: 80,
  //   rotationX: 180,
  //   transformOrigin: "0% 50% -50",
  //   ease: "back",
  //   stagger: 0.01,
  // });

  return (
    <>
      <div id="about" className={styles.about_cont}>
        <div className={styles.about}>
          <div className={styles.aboutDiv}>
            <p className={styles.content}>
              Hello! My name is
              <strong> Sheetal Sindhu.</strong> I am an independent developer &
              designer. I like many different directions related to the
              development of digital products.
            </p>
            <br />

            <p className={styles.content}>
              I loves to build user interfaces and develop them. Strong believer
              that deep user understanding leads to the most innovative
              products. I passionately love what I do. The digital world is
              still very young and it is developing very rapidly, so there are
              always discoveries in it.
            </p>
          </div>
          <div className={styles.btn}>
            <a href="https://drive.google.com/drive/u/0/folders/1eV9qOjYlVLVOoBDy69oVfJByMT_5qci8">
              Resume
            </a>
          </div>

          {/* skills section */}
          <div className={styles.otherSection}>
            <div className={styles.skills}>
              <h4 className={styles.skills}>Skills</h4>
            </div>
            <div className={styles.otherHalf}>
              <p className={styles.content}>
                HTML / CSS / MongoDb / ExpressJS / React / JavaScript / Redux /
                DSA / Bootstrap / User Interface Design / Prototyping
              </p>
            </div>
          </div>

          {/* eduation section */}
          <div className={styles.otherSection}>
            <div className={styles.skills}>
              <h4 className={styles.skills}>Education</h4>
            </div>
            <div className={styles.otherHalf}>
              <p className={styles.content}>
                <strong> B.com </strong> - MDU (Aug 2017 - Nov 2020), Haryana
              </p>
              {/* <p className={styles.duration}>
                June 2017 - Nov 2020 | Rohtak, Haryana
              </p> */}
            </div>
          </div>

          {/* Experince section */}
          <div className={styles.otherSection}>
            <div className={styles.skills}>
              <h4 className={styles.skills}>Experience</h4>
            </div>
            <div className={styles.otherHalf}>
              <div className={styles.projects}>
                <p className={styles.content}>
                  <strong>UI/UX Designer</strong> - Intensal (Dec 2020 - April
                  2021), Hong Kong
                </p>
                {/* <p className={styles.duration}>
                  Dec 2020 - April 2021 | Hong Kong
                </p> */}
              </div>

              <div className={styles.projects}>
                <p className={styles.content}>
                  <strong>UI/UX Designer</strong> - TieInUp (Jan 2020 - Nov
                  2020), Malaysia
                </p>
                {/* <p className={styles.duration}>
                  Jan 2020 - Nov 2020 | Malaysia
                </p> */}
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
