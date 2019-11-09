
import React from 'react';
import styles from "./CenterCircle.module.css";
import DownChevron from "../../images/down-chevron.svg";
import UpChevron from "../../images/up-chevron.svg";
import LeftChevron from "../../images/left-chevron.svg";
import RightChevron from "../../images/right-chevron.svg";
import Logo from "../../images/ss-logo.png";

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
                    <p>Blog</p>
                </div>
                <div className={styles.right}>
                    <p>Resume </p>
                    <img src={RightChevron} onClick={() => handleSetActive("right")} alt="Right Chevron" />
                </div>
                <div className={styles.bottom}>
                    <p>About</p>
                    <img src={DownChevron} onClick={() => handleSetActive("bottom")} alt="Down Chevron" />
                </div>
                <div className={styles.left}>
                    <img src={LeftChevron} onClick={() => handleSetActive("left")} alt="Left Chevron" />
                    <p>Contact </p>
                </div>
            </div>
        </div>
    );
}

export default CenterCircle;