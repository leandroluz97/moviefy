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

export type ExtractFnReturnType<FnType extends (...args: unknown[]) => unknown> = Awaited<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: unknown[]) => unknown> = Omit<
    UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
    'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: unknown[]) => unknown> = UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
>;
