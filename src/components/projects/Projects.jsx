import styles from "./Projects.module.css";
// import Data from "../../data.json";

function Projects() {
  return (
    <>
      <div id="projects" className={styles.main}>
        <h1 className={styles.featured}>Featured Projects</h1>

        <div className={styles.projects_section}>
          <div className={styles.projectDiv6}>
            <a
              className={styles.projectDiv}
              href="https://github.com/sheetalsindhu/cult-fit-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.project_title}>
                <h1>Epic Games Clone</h1>
              </div>
              <div className={styles.project_info}>
                <p>
                  Epic games is a gaming platform where user can buy and get
                  different kinds of games. The website is fully responsive and
                  all interfaces are built focusing on UI and style with proper
                  functionality.
                  <br />
                  <br />
                  React Js, Redux, Material UI , Node, Express, MongoDB
                </p>
              </div>
            </a>
          </div>

          <div className={styles.projectDiv1}>
            <a
              className={styles.projectDiv}
              href="https://github.com/sheetalsindhu/cult-fit-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.project_title}>
                <h1>Cult Fit Clone</h1>
              </div>
              <div className={styles.project_info}>
                <p>
                  At Cult, we make fitness fun and easy. We have best-in-class
                  trainers & offer group workouts ranging from yoga to Boxing.
                  You can book classes, follow workout videos, order cult sports
                  gear, order healthy food.
                  <br />
                  <br />
                  HTML5, CSS, JavaScript, EJS, Mongo DB, Express, NodeJS
                </p>
              </div>
            </a>
          </div>
          <div className={styles.projectDiv4}>
            <a
              className={styles.projectDiv}
              href="https://github.com/sheetalsindhu/worklyf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.project_title}>
                <h1>WorkLyf</h1>
              </div>
              <div className={styles.project_info}>
                <p>
                  Worklyf's entire purpose, design, functionality and existence
                  revolve around making the WFH/Hybrid work a wonderful
                  experience for its users, it is made with ❤️ for the WFH
                  Tribe!
                  <br />
                  <br />
                  React, Javascript, HTML, CSS, Redux, Express, Mongoose, Axios
                </p>
              </div>
            </a>
          </div>

          <div className={styles.projectDiv5}>
            <a
              className={styles.projectDiv}
              href="https://dev.voyage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.project_title}>
                <h1>Dev Voyage</h1>
              </div>
              <div className={styles.project_info}>
                <p>
                  A multi-tenant application where a user can create a portfolio
                  in 3 simple steps. SIGN IN. CREATE. SHARE. Kickstart your
                  software development voyag
                  <br />
                  <br />
                  UI/UX, Logo design, Typography, Prototyping, Responsive Layout
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
