import React from 'react';

type BlogProps = {
    position: string;
    handleSetInactive: Function;
}

const Blog: React.FunctionComponent<BlogProps> = ({ position, handleSetInactive }) => {
    return (
        <div style={{ height: '100%' }}>
            <h1>Blog</h1>
            <button onClick={() => handleSetInactive(position)}>Close</button>
        </div>
    );
}

export default Blog;