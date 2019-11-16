import React from 'react';
import styles from "./Projects.module.css";
import ProjectItem from "./ProjectItem";
import Title from '../../presentational/Title/Title';
import ProjectPreview from '../../presentational/ProjectPreview/ProjectPreview';
import VoluntimeImage from "../../../images/voluntime-home-screen.png";

type ProjectsProps = {
  position: string;
  handleSetInactive: Function;
}

export interface ProjectItemState {
  title: string;
  date: string;
  description: string;
  gitURL: string;
  images: any[];
}

const Projects: React.FunctionComponent<ProjectsProps> = ({ position, handleSetInactive }) => {
 const projectItemInitialState: ProjectItemState = {
    title: '',
    date: '',
    description: '',
    gitURL: '',
    images: []
  };

  const [projectItemState, setProjectItemState] = React.useState<ProjectItemState>(projectItemInitialState);
  
  const handleItemClick = (item: ProjectItemState) => {
    setProjectItemState(item);
  }

  const handleItemInactiveClick = () => {
    setProjectItemState(projectItemInitialState);
  }

  return (
    <div className={styles.lockup}>
      <Title title="Projects" position={position} handleSetInactive={handleSetInactive} />
      <div className={styles.gallery}>
        <ProjectPreview
          title="Voluntime"
          date="10/10/2019"
          description="An Android application built as part of the first Software Engineering Studio subject at UTS"
          gitURL="https://github.com/Jahmilli/Voluntime"
          images={[
            {
              src: VoluntimeImage,
              alt: "Voluntime"
            }
          ]}
          handleItemClick={handleItemClick}
        />
        <ProjectPreview
          title="Voluntime"
          date="10/10/2019"
          description="An Android application built as part of the first Software Engineering Studio subject at UTS"
          gitURL="https://github.com/Jahmilli/Voluntime"
          images={[
            {
              src: VoluntimeImage,
              alt: "Voluntime"
            }
          ]}
          handleItemClick={handleItemClick}
        />
        <ProjectPreview
          title="Voluntime"
          date="10/10/2019"
          description="An Android application built as part of the first Software Engineering Studio subject at UTS"
          gitURL="https://github.com/Jahmilli/Voluntime"
          images={[
            {
              src: VoluntimeImage,
              alt: "Voluntime"
            }
          ]}
          handleItemClick={handleItemClick}
        />
      </div>
      <div className={projectItemState.title.length > 0 ? styles.projectItemActive : styles.projectItem}>
        <ProjectItem handleItemClick={handleItemInactiveClick} {...projectItemState} />
      </div>
    </div>
  );
}

export default Projects;