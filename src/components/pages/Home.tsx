import React from 'react';
import Particles from "react-particles-js";
import Modal from '../Modal/Modal';
import CenterCircle from '../presentational/CenterCircle/CenterCircle';
import styles from "./Pages.module.css";

type HomeProps = {
    handleSetActive: Function;
}

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    type: "circle",
    shape: {
      stroke: {
        width: 0,
        color: "#000000"
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
  }
}

const Home: React.FunctionComponent<HomeProps> = ({ handleSetActive }) => {
    return (
      <>
        <Particles className={styles.particles} params={particlesOptions} />
        <div className={styles.homePage}>
            <Modal>
                <CenterCircle handleSetActive={handleSetActive} />
            </Modal>
        </div>
    </>
    );
}

export default Home;