import styles from "./quote.module.css";

function Quote() {
  return (
    <>
      <div className={styles.about_cont}>
        <div className={styles.about}>
          <p>
            Hello! My name is Sheetal Sindhu. I am an independent developer &
            designer. I like many different directions related to the
            development of digital products.
          </p>

          <p>
            I passionately love what I do. The digital world is still very young
            and it is developing very rapidly, so there are always discoveries
            in it.
          </p>

          <br />
          <h4 className={styles.skills}>Skills</h4>
          <p>
            HTML / CSS / MongoDb / ExpressJS / React / JavaScript / DSA /
            Bootstrap / User Interface Design / Prototyping
          </p>
        </div>
        <div className={styles.quote_section}>
          <h1>
            DEVELOPER with DESIGNER's EYE & DESIGNER with DEVELOPER's mind.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Quote;
