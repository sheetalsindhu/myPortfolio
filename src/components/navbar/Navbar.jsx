import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
        </div>

        <div className={styles.navLinks}>
          <a href="#projects">Projects</a>
        </div>
      </div>
      {/* <div className={styles.hr}></div> */}
    </>
  );
}

export default Navbar;
