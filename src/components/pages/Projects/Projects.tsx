import React from 'react';
import styles from "./Projects.module.css";
import ProjectItem from "./ProjectItem";
import Title from '../../presentational/Title/Title';
import ProjectPreview from '../../presentational/ProjectPreview/ProjectPreview';

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
      <p>
        Below is a collection of some of the projects I have been quite happy with. These are a collection of works that I have
        done both at university and outside of university. 
        <br />
        Each project will have a link to the source code on Github as well as 
        a description of what the application was, how it was built and some of the key learnings from it.
      </p>
      <div className={styles.gallery}>
        <ProjectPreview
          title="Voluntime"
          date="10/10/2019"
          description="An Android application built as part of the first Software Engineering Studio subject at UTS"
          gitURL="https://github.com/Jahmilli/Voluntime"
          images={[
            {
              src: "https://seb-southern-portfolio.s3.ap-northeast-2.amazonaws.com/voluntime-home-page.png",
              alt: "Voluntime Home Page"
            },
            {
              src: "https://seb-southern-portfolio.s3.ap-northeast-2.amazonaws.com/voluntime-create-event.png",
              alt: "Voluntime Create Event Page"
            },
            {
              src: "https://seb-southern-portfolio.s3.ap-northeast-2.amazonaws.com/voluntime-events-map.png",
              alt: "Voluntime Events Map"
            },
            {
              src: "https://seb-southern-portfolio.s3.ap-northeast-2.amazonaws.com/voluntime-review-registration.png",
              alt: "Voluntime Review Registration Page"
            },
            {
              src: "https://seb-southern-portfolio.s3.ap-northeast-2.amazonaws.com/voluntime-upcoming-events.png",
              alt: "Voluntime Upcoming Events Page"
            },
          ]}
          handleItemClick={handleItemClick}
        />
        <ProjectPreview
          title="SES Health Application"
          date="10/10/2019"
          description="An Android application built as part of the second Software Engineering Studio subject at UTS"
          gitURL="https://github.com/Jahmilli/SESHealth"
          images={[
            {
              src: "https://seb-southern-portfolio.s3.ap-northeast-2.amazonaws.com/seshealth-home-page.png",
              alt: "SES Health Home Page"
            },
            {
              src: "https://seb-southern-portfolio.s3.ap-northeast-2.amazonaws.com/seshealth-doctor-key.png",
              alt: "SES Health Doctor Key"
            },
            {
              src: "https://seb-southern-portfolio.s3.ap-northeast-2.amazonaws.com/seshealth-practices-map.png",
              alt: "SES Health Practices Map"
            },
            {
              src: "https://seb-southern-portfolio.s3.ap-northeast-2.amazonaws.com/seshealth-send-file.png",
              alt: "SES Health Send File"
            },
          ]}
          handleItemClick={handleItemClick}
        />
        <ProjectPreview
          title="CMatrix 2.0"
          date="10/10/2019"
          description="A C Application built as a fun project in the Fundamentals of C Class at UTS"
          gitURL="https://github.com/JaydenL33/cmatrix2.0"
          images={[
            {
              src: "https://seb-southern-portfolio.s3.ap-northeast-2.amazonaws.com/cmatrix-demo.png",
              alt: "CMatrix Demo"
            },
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