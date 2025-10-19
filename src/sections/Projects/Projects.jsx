import styles from './ProjectsStyles.module.css';
import education from '../../assets/education.png';
import lab_equipment from '../../assets/lab_equipment.png';
import passop from '../../assets/passop.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={education}
          link="https://github.com/TahsanX/Study-Help"
          h3="Study Help"
          p="Education Platform and Community and Q&A App"
        />
        <ProjectCard
          src={lab_equipment}
          link="https://github.com/TahsanX/Equipment_Management"
          h3="Lab Equipment Management"
          p="Lab Equipment Management and Cost and Time Tracking System"
        />
        <ProjectCard
          src={passop}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="PassOp"
          p="Password Management App"
        />
      </div>
    </section>
  );
}

export default Projects;
