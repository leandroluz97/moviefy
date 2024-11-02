import { routes } from "@/routes";
import React from "react";
import {  RouterProvider } from "react-router-dom";

// type AppProviderProps =  {
// children: React.ReactNode
// }
export const AppProvider = () => {
  return  <RouterProvider router={routes} />
};
