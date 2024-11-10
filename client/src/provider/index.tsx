import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { queryClient } from '@/lib/react-query';
import { routes } from '@/routes';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { Loading } from '@/components/Loading';

// type AppProviderProps =  {
// children: React.ReactNode
// }

export const AppProvider = () => {
    const ErrorFallback = () => {
        return (
            <div
                className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
                role="alert"
            >
                <h2 className="text-lg font-semibold">Ooops, something went wrong </h2>
                {/* <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
                Refresh
            </Button> */}
            </div>
        );
    };
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <React.Suspense fallback={<Loading />}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={routes} />
                </QueryClientProvider>
            </React.Suspense>
        </ErrorBoundary>
    );
};
