import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/"
          h3="Faked"
          p="Deepfake detection using ML"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/"
          h3="Neo-Shield"
          p="Malware detection using Hashes"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/"
          h3="Resizer"
          p="An image resizer site"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/"
          h3="FitLift"
          p="App that tracks your fitness"
        />
      </div>
    </section>
  );
}

export default Projects;
