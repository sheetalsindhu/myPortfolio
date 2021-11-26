import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.contactMe}>
        <h1 className={styles.contactMeHeading}>Get In Touch.</h1>
        <div className={styles.emailAddress}>
          <a href="mailto:sheetalsindhu99@gmail.com">
            sheetalsindhu99@gmail.com
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.tags}>
          <div>
            <p>Front-end Development</p>
            <p>Web Development</p>
            <p>Design</p>
            <p> UXUI</p>
          </div>

          <div>
            <p>Sheetal Sindhu</p>
          </div>
        </div>

        <div className={styles.middle_ft}>
          <div className={styles.email}>
            <a href="mailto:sheetalsindhu99@gmail.com">Contact Me</a>
          </div>

          <div>
            <p> Haryana, India</p>
          </div>
        </div>

        <div className={styles.links}>
          <a href="https://github.com/sheetalsindhu">Github</a>
          <a href="mailto:sheetalsindhu99@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/sheetalsindhu/">Linkdin</a>
          <a href="https://dribbble.com/uiuxsheetal">Dribbble</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
