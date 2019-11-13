import React from 'react';
import styles from "./Pages.module.css";
import Title from '../presentational/Title/Title';

type ArticlesProps = {
    position: string;
    handleSetInactive: Function;
}

const Articles: React.FunctionComponent<ArticlesProps> = ({ position, handleSetInactive }) => {
    return (
        <div className={styles.lockup}>
            <Title title="Articles" position={position} handleSetInactive={handleSetInactive} />
            <h2>Articles: </h2>
            <ul>
                <li>
                    <div className={styles.articleItem}>
                        <a href="https://medium.com/@sebastian.southern/an-introduction-to-testing-react-components-with-react-testing-library-e7fe7d6d3684" target="_blank" rel="noopener noreferrer">Testing React Components with React Testing Library</a>
                        <p>
                            This article is an introduction to testing React components with React Testing Library. It is the first article I have ever
                            written and is something I was quite happy with. It focuses on explaing how to test components from the mindset of a user whilst
                            attempting to pursuade the user of why they should use the library.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Articles;