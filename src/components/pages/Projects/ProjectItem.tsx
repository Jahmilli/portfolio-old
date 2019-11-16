import React from "react";
import { ProjectItemState } from "./Projects";
import styles from "./Projects.module.css";
import Close from "../../../images/close.svg";

type ProjectItemProps = ProjectItemState & {
  handleItemClick: Function;
}


const ProjectItem: React.FunctionComponent<ProjectItemProps> = ({ title, date, description, gitURL, handleItemClick }) => {
  return (
    <div className={styles.projectItemLockup}>
      <div className={styles.body}>
        <img src={Close} alt="Close Icon" onClick={() => handleItemClick()} />
        <h1>{title} - {date}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectItem;