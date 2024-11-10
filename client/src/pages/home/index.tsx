import { ListMovieService } from '@/services/Movie/MovieService';
import { HomeView } from './home.view';
import { HttpClient } from '@/infrastructure/http/httpClient';
import { useHomeModel } from './home.model';

export const Home = () => {
    const httClient = new HttpClient();
    const listMoviesService = new ListMovieService(httClient);
    const homeModel = useHomeModel({ listMoviesService });
    return <HomeView {...homeModel} />;
};
