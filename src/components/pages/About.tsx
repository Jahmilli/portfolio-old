import React from 'react';

type AboutProps = {
    position: string;
    handleSetInactive: Function;
}

const About: React.FunctionComponent<AboutProps> = ({ position, handleSetInactive }) => {
    return (
        <div style={{ height: '100%' }}>
            <h1>About</h1>
            <button onClick={() => handleSetInactive(position)}>Close</button>
        </div>
    );
}

export default About;