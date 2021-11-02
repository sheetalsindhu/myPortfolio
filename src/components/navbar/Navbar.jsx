
import styles from "./Navbar.module.css"

function Navbar() {
    return (
      <>
        <div className={styles.navbar}>
          <div>
            <h1>About</h1>
          </div>

          <div>
            <h1>Projects</h1>
          </div>
        </div>
      </>
    );
}

export default Navbar;