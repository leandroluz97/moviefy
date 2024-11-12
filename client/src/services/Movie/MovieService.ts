import { Movie } from '@/domain/entites/Movie';
import { HttpMethod, HttpRequest, IHttpClient } from '@/infrastructure/http/httpClientContracts';
import { Pagination } from '@/utilities/pagination';

export type IListOptions = {
    textSearch: string;
    pageNumber: number;
    pageSize: number;
};
export interface IListMoviesService {
    exec: (options: IListOptions) => Promise<Pagination<Movie>>;
}

export class ListMovieService implements IListMoviesService {
    constructor(private httpClient: IHttpClient) {}

    async exec(options: IListOptions): Promise<Pagination<Movie>> {
        const { textSearch, pageNumber, pageSize } = options;

        const query = new URLSearchParams({ textSearch });
        query.set('pageNumber', pageNumber.toString());
        query.set('pageSize', pageSize.toString());

        const httpOptions: HttpRequest<undefined> = {
            url: '/movies?' + query.toString(),
            method: HttpMethod.GET,
        };
        const response = await this.httpClient.sendRequest<Pagination<Movie>>(httpOptions);
        return response;
    }
}
