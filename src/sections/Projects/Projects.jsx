import styles from './ProjectsStyles.module.css';
import Leetcode from '../../assets/wp14289957-leetcode-wallpapers.png';
import hipsster from '../../assets/adem-ay-Tk9m_HP4rgQ-unsplash.jpg';
import fitLift from '../../assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg';
import expenseTracker from '../../assets/jakub-zerdzicki-heiYgqp0Tsk-unsplash.jpg'; 
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={expenseTracker} 
          link="https://github.com/web-dev-vishal/Expense_Tracker"
          h3="Expense_Tracker"
          p="Tracker Your Expense"
        />
        <ProjectCard
          src={Leetcode}
          link="https://github.com/web-dev-vishal/My_Leetcode"
          h3="Leetcode"
          p="Solved your problem"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/web-dev-vishal/Major_project"
          h3="Full Stack Social Media App"
          p="College Major Project"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/web-dev-vishal/E_Commerces_API_Node.js"
          h3="E_Commerce API"
          p="Online Shopping"
        />
      </div>
    </section>
  );
}

export default Projects;