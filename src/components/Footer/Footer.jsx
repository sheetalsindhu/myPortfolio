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

        {/* <div className={styles.shortIcons}>
          <a
            href="https://github.com/sheetalsindhu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git
          </a>
          <a
            href="https://www.linkedin.com/in/sheetalsindhu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Li
          </a>
          <a
            href="https://dribbble.com/uiuxsheetal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr
          </a>
        </div> */}
        <hr
          className={styles.line}
          style={{
            width: "100%",
            marginTop: "100px",
            backgroundColor: "#b9b9b91a",
            opacity: "10%",
            marginLeft: 0,
          }}
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.tags}>
          <div>
            <p>Full-Stack Development</p>
            <p>Photography</p>
            <p>User Interface Design</p>
          </div>

          <div>
            <p> Sheetal Sindhu &copy; 2021 </p>
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
          <a
            href="https://github.com/sheetalsindhu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a href="mailto:sheetalsindhu99@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/sheetalsindhu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkdin
          </a>
          <a
            href="https://dribbble.com/uiuxsheetal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
