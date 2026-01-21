import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import Leetcode from '../../assets/wp14289995-leetcode-wallpapers.jpg';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
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
          src={src/assets/wp14289995-leetcode-wallpapers.jpg}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Leetcode"
          p="Solved your problem"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;