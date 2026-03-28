import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../components/Root/Root';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            }
        ]
    }
])