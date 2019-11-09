import React from "react";
import styles from "./Title.module.css";
import CloseIcon from "../../../images/close.svg";

type TitleProps = {
    title: string;
    handleSetInactive: Function;
    position: string;
}

const Title: React.FunctionComponent<TitleProps> = ({ title, handleSetInactive, position }) => (
    <div className={styles.heading}>
        <h1>{ title }</h1>
        <img src={CloseIcon} onClick={() => handleSetInactive(position)} alt="Close Icon" />
    </div>
);

export default Title;