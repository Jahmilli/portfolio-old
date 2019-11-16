
import React from 'react';
import styles from "./CenterCircle.module.css";
import DownChevron from "../../../images/down-chevron.svg";
import UpChevron from "../../../images/up-chevron.svg";
import LeftChevron from "../../../images/left-chevron.svg";
import RightChevron from "../../../images/right-chevron.svg";

type CenterCircleProps = {
    handleSetActive: Function;
}

const CenterCircle: React.FunctionComponent<CenterCircleProps> = ({ handleSetActive }) => {
    return (
        <div className={styles.outerCircle}>
            <div className={styles.centerCircleLockup}>
                <div className={styles.logoLockup}>
                    <h1>Sebastian</h1>
                    <h1>Southern</h1>
                </div>
                <div className={styles.top}>
                    <img src={UpChevron} onClick={() => handleSetActive("top")} alt="Up Chevron" />
                    <p>Articles</p>
                </div>
                <div className={styles.right}>
                    <p>Blog</p>
                    <img src={RightChevron} onClick={() => handleSetActive("right")} alt="Right Chevron" />
                </div>
                <div className={styles.bottom}>
                    <p>About</p>
                    <img src={DownChevron} onClick={() => handleSetActive("bottom")} alt="Down Chevron" />
                </div>
                <div className={styles.left}>
                    <img src={LeftChevron} onClick={() => handleSetActive("left")} alt="Left Chevron" />
                    <p>Projects</p>
                </div>
            </div>
        </div>
    );
}

export default CenterCircle;