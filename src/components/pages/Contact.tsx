import React from 'react';
import styles from "./Pages.module.css";
import Title from '../presentational/Title/Title';
import GithubLogo from "../../images/github-logo.svg";
import LinkedInLogo from "../../images/linkedin-logo.svg";

type ContactProps = {
    position: string;
    handleSetInactive: Function;
}

const Contact: React.FunctionComponent<ContactProps> = ({ position, handleSetInactive }) => {
    return (
        <div className={styles.lockup}>
            <Title title="Contact" position={position} handleSetInactive={handleSetInactive} />
            <div>
                <p>You can find me on any of the following platforms:</p>
                <div className={styles.mediaLockup}>
                    <a href="https://github.com/Jahmilli" target="_blank"><img src={GithubLogo} alt="Github Logo" /></a>
                    <a href="https://www.linkedin.com/in/sebastian-southern-50b544126/" target="_blank"><img src={LinkedInLogo} alt="LinkedIn Logo" /></a> 
                </div>                
                <p>
                    You can also contact me through the following:
                    <br /> 
                    <strong>Email: </strong>sebastian.southern@gmail.com
                </p>
            </div>
        </div>
    );
}

export default Contact;