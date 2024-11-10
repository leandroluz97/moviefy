import { AxiosError } from 'axios';
import { DefaultOptions, QueryClient, UseMutationOptions, UseQueryOptions } from 'react-query';

const queryConfig: DefaultOptions = {
    queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retry: false,
    },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

// Type to extract the return type of an asynchronous function
export type ExtractFnReturnType<FnType extends (...args: unknown[]) => Promise<unknown>> = 
    Awaited<ReturnType<FnType>>;

// Type-safe query configuration options
export type QueryConfig<QueryFnType extends (...args: unknown[]) => Promise<unknown>> = Omit<
    UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
    'queryKey' | 'queryFn'
>;

// Type-safe mutation configuration options
export type MutationConfig<MutationFnType extends (...args: unknown[]) => Promise<unknown>> = UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
>;
