import { Login } from "@/pages/login";
import { Register } from "@/pages/register";

export const publicRoutes = [
  {
    path: '/auth/register',
    element: <Register />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
];