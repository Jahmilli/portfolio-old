import React from 'react';
import styles from "./Pages.module.css";
import Title from '../presentational/Title/Title';

type ContactProps = {
    position: string;
    handleSetInactive: Function;
}

const Contact: React.FunctionComponent<ContactProps> = ({ position, handleSetInactive }) => {
    return (
        <div className={styles.lockup}>
            <Title title="Contact" position={position} handleSetInactive={handleSetInactive} />
        </div>
    );
}

export default Contact;