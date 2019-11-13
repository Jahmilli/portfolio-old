import React from "react";
import styles from "./BlogItemPreview.module.css";

type BlogItemProps = {
    title: string;
    date: string;
    description: string;
    handleItemClick: Function
}

const BlogItemPreview:React.FunctionComponent<BlogItemProps> = ({ title, date, description, handleItemClick }) => {
    return (
        <div className={styles.itemLockup} onClick={() => handleItemClick({ title, date, description })}>
            <p>{title} - {date}</p>
            <p>{description}</p>
        </div>
    );
}

export default BlogItemPreview;