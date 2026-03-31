import React from 'react';
import { useLoaderData } from 'react-router';

const Author = () => {
    const singleBlog = useLoaderData()
    return (
        <div>
            <h1>{singleBlog.title}</h1>
        </div>
    );
};

export default Author;