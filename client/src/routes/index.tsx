import { createBrowserRouter } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { CommonRoutes } from './common';

const appRoutes = () => {
    // const auth = { user: false };
    // const route = auth.user ? protectedRoutes : publicRoutes;
    return createBrowserRouter([...publicRoutes, ...protectedRoutes, ...CommonRoutes]);
};

export const routes = appRoutes();
