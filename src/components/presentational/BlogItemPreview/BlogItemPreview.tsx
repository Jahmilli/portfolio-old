import React from "react";
import styles from "./BlogItemPreview.module.css";

type BlogItemProps = {
    title: string;
    date: string;
    categories: string[];
    description: string;
    handleItemClick: Function
}

const BlogItemPreview: React.FunctionComponent<BlogItemProps> = ({ title, date, categories, description, handleItemClick }) => {
    let updatedCategories = "";
    // Format the categories for display
    for (let i = 0; i < categories.length; i++) {
        updatedCategories += i !== categories.length - 1 ? `${categories[i]}, ` : `${categories[i]}`;
    }

    return (
        <div className={styles.itemLockup} onClick={() => handleItemClick({ title, date, description })}>
            <h3>{title}</h3>
            <div className={styles.subheader}>
                <p>{date}</p>
                <p>{updatedCategories}</p>
            </div>
            <p>{description}</p>
        </div>
    );
}

export default BlogItemPreview;