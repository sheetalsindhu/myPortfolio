import styles from "./Projects.module.css";
import { FiGithub } from "react-icons/fi";

function Projects({ data }) {
  return (
    <>
      {/* <div className={styles.projects_section}>
        <div className={styles.project_title}>
          <h1>{data.title}</h1>
          <h5>{data.description}</h5>
        </div>
        <div className={styles.project_info}>
          <p>{data.tagOne}</p>
          <p>{data.tagTwo}</p>
        </div>
      </div> */}

      <div id="projects" className={styles.projects_section}>
        <button className={(styles.custom_btn, styles.btn)}>
          <span>
            <div className={styles.project_title}>
              <h1>{data.title}</h1>
              <h5>{data.description}</h5>
            </div>

            <div>
              <p>
                <FiGithub />
              </p>
            </div>
          </span>
          <span>
            <div className={styles.project_title}>
              <h1>{data.title}</h1>
              <h5>{data.description}</h5>
            </div>

            <div className={styles.project_info}>
              <p>{data.tagOne}</p>
              <p>{data.tagTwo}</p>
            </div>
          </span>
        </button>
      </div>
    </>
  );
}

export default Projects;
