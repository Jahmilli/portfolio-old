import React from 'react';
import Modal from '../Modal/Modal';
import CenterCircle from '../CenterCircle/CenterCircle';

const HomePage: React.FunctionComponent = () => {
    return (
        <div>
            <Modal>
                <CenterCircle />
            </Modal>
        </div>
    );
}

export default HomePage;