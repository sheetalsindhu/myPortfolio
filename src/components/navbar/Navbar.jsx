import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <a href="/about">About</a>
        </div>

        <div>
          <a href="/projects">Projects</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
