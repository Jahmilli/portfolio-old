
import React from 'react';
import styles from "./Pages.module.css";
import Title from '../presentational/Title/Title';

type ResumeProps = {
    position: string;
    handleSetInactive: Function;
}

const Resume: React.FunctionComponent<ResumeProps> = ({ position, handleSetInactive }) => {
    return (
        <div className={styles.lockup}>
            <Title title="Resume" position={position} handleSetInactive={handleSetInactive} />
        </div>
    );
}

export default Resume;