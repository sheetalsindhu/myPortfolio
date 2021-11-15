import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
        </div>

        <div className={styles.navLinks}>
          <a href="/projects">Projects</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
