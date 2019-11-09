import React from 'react';
import Modal from '../Modal/Modal';
import CenterCircle from '../CenterCircle/CenterCircle';
import styles from "./Pages.module.css";

type HomeProps = {
    handleSetActive: Function;
}
const Home: React.FunctionComponent<HomeProps> = ({ handleSetActive }) => {
    return (
        <div className={styles.homePage}>
            <Modal>
                <CenterCircle handleSetActive={handleSetActive} />
            </Modal>
        </div>
    );
}

export default Home;