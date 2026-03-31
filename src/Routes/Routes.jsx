import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../components/Root/Root';
import Home from '../pages/Home/Home';
import Blogs from '../pages/Blogs/Blogs';
import Bookmarks from '../pages/Bookmarks/Bookmarks';
import SingleBlog from '../pages/SingleBlog/SingleBlog';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path:'/blogs',
                loader: ()=>fetch('https://dev.to/api/articles?per_page=20&top=7'),
                Component: Blogs
            },
            {
                path: '/blogs/:id',
                loader: ({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
                Component: SingleBlog
            },
            {
                path: '/bookmarks',
                Component: Bookmarks
            }
        ]
    }
])