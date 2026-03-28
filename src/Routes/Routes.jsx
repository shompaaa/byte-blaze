import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../components/Root/Root';
import Home from '../pages/Home/Home';
import Blogs from '../pages/Blogs/Blogs';
import Bookmarks from '../pages/Bookmarks/Bookmarks';

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
                Component: Blogs
            },
            {
                path: '/bookmarks',
                Component: Bookmarks
            }
        ]
    }
])