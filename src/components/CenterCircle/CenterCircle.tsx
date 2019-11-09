
import React from 'react';
import styles from "./CenterCircle.module.css";
import DownChevron from "../../images/down-chevron.svg";
import UpChevron from "../../images/up-chevron.svg";
import LeftChevron from "../../images/left-chevron.svg";
import RightChevron from "../../images/right-chevron.svg";

const CenterCircle: React.FunctionComponent = () => {
    return (
        <div className={styles.centerCircleLockup}>
            <h1>Sebastian Southern</h1>
            <div className={styles.top}>
                <img src={UpChevron} alt="Up Chevron" />
                <p>Blog</p>
            </div>
            <div className={styles.right}>
                <p>Resume </p>
                <img src={RightChevron} alt="Right Chevron" />
            </div>
            <div className={styles.bottom}>
                <p>About</p>
                <img src={DownChevron} alt="Down Chevron" />
            </div>
            <div className={styles.left}>
                <img src={LeftChevron} alt="Left Chevron" />
                <p>Contact </p>
            </div>
        </div>
    );
}

export default CenterCircle;