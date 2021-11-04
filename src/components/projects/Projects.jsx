import styles from "./Projects.module.css";

function Projects({ data }) {
  return (
    <>
      <div className={styles.projects_section}>
        <div className={styles.project_title}>
          <h1>{data.title}</h1>
          <h5>{data.description}</h5>
        </div>
        <div className={styles.project_info}>
          <p>{data.tagOne}</p>
          <p>{data.tagTwo}</p>
        </div>
      </div>
    </>
  );
}

export default Projects;
