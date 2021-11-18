import styles from "./Projects.module.css";
import Data from "../../data.json";

function Projects() {
  return (
    <>
      {Data.map((data) => (
        <div className={styles.projects_section}>
          <a href={data.github}>
            <div className={styles.project_title}>
              <h1>{data.title}</h1>
            </div>
            <div className={styles.project_info}>
              <p>{data.description}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}

export default Projects;
