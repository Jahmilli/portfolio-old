import React from "react";
import styles from "./Blog.module.css";
import Title from '../../presentational/Title/Title';
import BlogItemPreview from '../../presentational/BlogItemPreview/BlogItemPreview';
import BlogItem from "./BlogItem";

type BlogProps = {
    position: string;
    handleSetInactive: Function;
}

interface BlogItem {
    title: string;
    date: string;
    description: string;
}

const Blog: React.FunctionComponent<BlogProps> = ({ position, handleSetInactive }) => {
    const blogItemInitialState: BlogItem = {
        title: '',
        date: '',
        description: ''
    }
    const [blogItemState, setBlogItemState] = React.useState<BlogItem>(blogItemInitialState);
    
    const handleItemClick = (item: BlogItem) => {
        setBlogItemState(item);
    }
    const handleItemInactiveClick = () => {
        setBlogItemState(blogItemInitialState);
    }

    return (
        <div className={styles.lockup}>
            <Title title="Blog" position={position} handleSetInactive={handleSetInactive} />
            <h2>A Collection of Thoughts and Interesting Findings:</h2>
            <ul>
                <li>
                    <BlogItemPreview
                        title="Using the Jenkins Kubernetes Plugin with Openshift"
                        date="24/10/2019"
                        description="Discusses my findings when using the Jenkins Kubernetes Plugin, problems I faced and solutions to such problems" 
                        handleItemClick={handleItemClick}
                    />
                </li>
            </ul>
            <div className={blogItemState.title.length > 0 ? styles.blogItemActive : styles.blogItem}>
                <BlogItem handleItemClick={handleItemInactiveClick} {...blogItemState} />
            </div>
        </div>
    );
}

export default Blog;