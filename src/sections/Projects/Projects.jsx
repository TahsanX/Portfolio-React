import styles from './ProjectsStyles.module.css';
import education from '../../assets/education.png';
import lab_equipment from '../../assets/lab_equipment.png';
import passop from '../../assets/passop.png';
import blog from '../../assets/Blog.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={blog}
          link="https://blog-app-kkof.vercel.app/"
          h3="Blog App"
          p="Microblogging app"
        />
        <ProjectCard
          src={education}
          link="https://github.com/TahsanX/AskAnything"
          h3="Ask Anything"
          p="Education Platform and Q&A App"
        />
        <ProjectCard
          src={lab_equipment}
          link="https://tahsanx.github.io/Portfolio-React/"
          h3="Lab Equipment Management"
          p="Lab Equipment Cost and Time Tracking"
        />
        <ProjectCard
          src={passop}
          link="https://pass-op-dusky.vercel.app/"
          h3="PassOp"
          p="Password Management App"
        />
        
      </div>
    </section>
  );
}

export default Projects;
