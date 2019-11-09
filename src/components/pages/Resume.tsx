
import React from 'react';

type ResumeProps = {
    position: string;
    handleSetInactive: Function;
}

const Resume: React.FunctionComponent<ResumeProps> = ({ position, handleSetInactive }) => {
    return (
        <div style={{ height: '100%' }}>
            <h1>Resume</h1>
            <button onClick={() => handleSetInactive(position)}>Close</button>
        </div>
    );
}

export default Resume;