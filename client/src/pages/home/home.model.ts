import { useQuery } from 'react-query';
import { IListMoviesService, IListOptions } from '@/services/Movie/MovieService';
import { QueryConfig } from './home.types';
import { Movie } from '@/domain/Movie';
import { AxiosError } from 'axios';
import { Pagination } from '@/utilities/pagination';
import { useSearchParams } from 'react-router-dom';

type UseListMoviveProps = {
    config?: QueryConfig;
    listMoviesService: IListMoviesService;
};

export const useHomeModel = ({ config, listMoviesService }: UseListMoviveProps) => {
    useSearchParams();
    const url = new URL(window.location.href);
    const pageNumberQuery = url.searchParams.get('pageNumber');
    const pageSizeQuery = url.searchParams.get('pageSize');
    const textSearchQuery = url.searchParams.get('textSearch');

    const pageNumber = pageNumberQuery ? parseInt(pageNumberQuery) : 1;
    const pageSize = pageSizeQuery ? parseInt(pageSizeQuery) : 100;
    const textSearch = textSearchQuery ? textSearchQuery : '';

    const options: IListOptions = { pageNumber, pageSize, textSearch };

    const queries = useQuery<Pagination<Movie>, AxiosError>({
        ...config,
        queryKey: ['movies'],
        queryFn: () => listMoviesService.exec(options),
        keepPreviousData: true,
        useErrorBoundary: false,
    });
    return queries;
};
