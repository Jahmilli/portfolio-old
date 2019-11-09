import React from 'react';

type ContactProps = {
    position: string;
    handleSetInactive: Function;
}

const Contact: React.FunctionComponent<ContactProps> = ({ position, handleSetInactive }) => {
    return (
        <div style={{ height: '100%' }}>
            <h1>Contact</h1>
            <button onClick={() => handleSetInactive(position)}>Close</button>
        </div>
    );
}

export default Contact;