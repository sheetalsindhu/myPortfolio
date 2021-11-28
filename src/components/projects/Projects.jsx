import styles from "./Projects.module.css";
// import Data from "../../data.json";

function Projects() {
  return (
    <>
      <div id="projects" className={styles.main}>
        <h1 className={styles.featured}>Featured Projects</h1>

        <div className={styles.projects_section}>
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
                </p>
              </div>
            </a>
          </div>

          <div className={styles.projectDiv2}>
            <a
              className={styles.projectDiv}
              href="https://github.com/sheetalsindhu/cult-fit-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.project_title}>
                <h1>Movie Seach Engine</h1>
              </div>
              <div className={styles.project_info}>
                <p>
                  Seach your favourite movies and read all information about
                  movie like release year, movie cast, duration and rating etc.
                  I made this using movie api.
                </p>
              </div>
            </a>
          </div>

          <div className={styles.projectDiv3}>
            <a
              className={styles.projectDiv}
              href="https://github.com/sheetalsindhu/cult-fit-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.project_title}>
                <h1>Tic Tac Toe</h1>
              </div>
              <div className={styles.project_info}>
                <p>
                  Tic-tac-toe is a game in which two players take turns in
                  drawing either an ' O' or an ' X' in one square of a grid
                  consisting of nine squares. The winner is the first player to
                  get three of the same symbols in a row.
                </p>
              </div>
            </a>
          </div>

          <div className={styles.projectDiv4}>
            <a
              className={styles.projectDiv}
              href="https://github.com/sheetalsindhu/cult-fit-project"
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
                </p>
              </div>
            </a>
          </div>

          <div className={styles.projectDiv5}>
            <a
              className={styles.projectDiv}
              href="https://github.com/sheetalsindhu/cult-fit-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.project_title}>
                <h1>To Do</h1>
              </div>
              <div className={styles.project_info}>
                <p>
                  To Do is a task management app to help you stay organized and
                  manage your day-to-day. You can use Microsoft To Do to make
                  shopping lists or task lists, take notes, record collections,
                  plan an event, or set reminders to increase your productivity
                  and focus on what matters to you.
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
