import { Button } from '@/components/Button';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/CardItem';
import { PlayCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredMovie = {
    title: 'Inception',
    description:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    rating: 8.8,
    image: 'https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png',
};

const popularMovies = [
    {
        id: 1,
        title: 'The Shawshank',
        rating: 9.3,
        image: 'https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg',
    },
    {
        id: 2,
        title: 'The Godfather',
        rating: 9.2,
        image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
    },
    {
        id: 3,
        title: 'The Dark Knight',
        rating: 9.0,
        image: 'https://cdn.europosters.eu/image/1300/posters/the-dark-knight-trilogy-batman-i198201.jpg',
    },
    {
        id: 4,
        title: 'Pulp Fiction',
        rating: 8.9,
        image: 'https://www.posterist.co.uk/cdn/shop/files/pulp-fiction-movie-poster-01.jpg?crop=center&height=723&v=1698402231&width=723',
    },
];

export const Landing = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center gap-2 justify-center" to="/">
                    <PlayCircle className="h-6 w-6" />
                    <span className="block font-bold tracking-tighter">Moviefy</span>
                    <span className="sr-only">Movie App</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        to="/auth/login"
                    >
                        Login
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        to="/auth/register"
                    >
                        Register
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-8 text-left">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
                                        {featuredMovie.title}
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        {featuredMovie.description}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button className="px-8 bg-black text-white">Watch Now</Button>
                                    <Button variant="outline">Add to My List</Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Card className="relative overflow-hidden rounded-xl bg-white">
                                    <CardContent className="p-0">
                                        <img
                                            alt="Featured movie poster"
                                            className="object-cover w-full"
                                            height="600"
                                            src={featuredMovie.image}
                                            width="400"
                                        />
                                        <div className="absolute bottom-4 left-4 flex items-center rounded-full bg-black/50 px-3 py-1.5 text-white">
                                            <Star className="h-4 w-4 mr-1 fill-primary stroke-primary" />
                                            <span className="text-sm">{featuredMovie.rating}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Popular Movies
                        </h2>
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {popularMovies.map((movie) => (
                                <Card key={movie.id} className="overflow-hidden bg-white">
                                    <CardContent className="p-0">
                                        <img
                                            alt={`${movie.title} poster`}
                                            className="object-cover w-full h-[300px]"
                                            height="300"
                                            src={movie.image}
                                            width="300"
                                        />
                                    </CardContent>
                                    <CardFooter className="flex items-center justify-between p-4">
                                        <div>
                                            <CardTitle className="text-lg">{movie.title}</CardTitle>
                                            <CardDescription className="flex items-center">
                                                <Star className="h-4 w-4 mr-1 fill-primary stroke-primary" />
                                                {movie.rating}
                                            </CardDescription>
                                        </div>
                                        <Button variant="ghost" size="icon">
                                            <PlayCircle className="h-4 w-4" />
                                            <span className="sr-only">Watch {movie.title}</span>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">
                    © 2024 Movie App. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" to="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    );
};
