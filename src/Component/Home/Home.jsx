import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshart = useLoaderData()
    return (
        <div>
            <h2>This is home {tshart.length}</h2>
        </div>
    );
};

export default Home;