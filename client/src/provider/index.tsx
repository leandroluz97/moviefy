import React from 'react'
import { queryClient } from "@/lib/react-query";
import { routes } from "@/routes";
import { QueryClientProvider } from "react-query";
import {  RouterProvider } from "react-router-dom";
import { Loading } from '@/components/Loading';

// type AppProviderProps =  {
// children: React.ReactNode
// }
export const AppProvider = () => {
    return (
            <React.Suspense fallback={<Loading />}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={routes} />
                </QueryClientProvider>
            </React.Suspense>
        )
};
