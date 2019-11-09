import React from 'react';
import styles from "./Pages.module.css";
import Title from '../presentational/Title/Title';

type BlogProps = {
    position: string;
    handleSetInactive: Function;
}

const Blog: React.FunctionComponent<BlogProps> = ({ position, handleSetInactive }) => {
    return (
        <div className={styles.lockup}>
            <Title title="Blog" position={position} handleSetInactive={handleSetInactive} />
        </div>
    );
}

export default Blog;