import React from "react"
import styles from "./Blog.module.css";
import Close from "../../../images/close.svg";

type BlogItemProps = {
    title: string;
    date: string;
    description: string;
    handleItemClick: Function;
}

// TODO: Maybe rename to post or something similar
const BlogItem:React.FunctionComponent<BlogItemProps> = ({ title, date, description, handleItemClick }) => {
    return (
        <div className={styles.blogItemLockup}>
            {/* <div className={title.length > 0 ? styles.sidebarActive : styles.sidebar}>
                <p>Sidebar</p>
            </div> */}
            <div className={styles.body}>
                <img src={Close} alt="Close Icon" onClick={() => handleItemClick()}/>
                <h1>{title} - {date}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default BlogItem;