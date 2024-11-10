import { Movie } from '@/domain/Movie';
import { Pagination } from '@/utilities/pagination';
import { AxiosError } from 'axios';
import { UseQueryOptions } from 'react-query';

export type QueryConfig = UseQueryOptions<Pagination<Movie>, AxiosError>;
