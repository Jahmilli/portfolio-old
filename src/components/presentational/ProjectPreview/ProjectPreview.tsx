import React from "react";
import styles from "./ProjectPreview.module.css";
import { ProjectItemState } from "../../pages/Projects/Projects";

type ProjectPreviewProps = ProjectItemState & {
  handleItemClick: Function
}

const ProjectPreview: React.FunctionComponent<ProjectPreviewProps> = ({ title, date, description, gitURL, images, handleItemClick }) => {
  // const { title, date, description, gitURL, images, handleItemClick } = props;
  return (
    <div className={styles.lockup} onClick={() => handleItemClick({ title, date, description, gitURL, images })}>
      <img src={images[0].src} alt={images[0].alt} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProjectPreview;