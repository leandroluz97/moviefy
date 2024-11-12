import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/CardItem';
import { Input } from '@/components/Input';
import { useHomeModel } from './home.model';
import { Loading } from '@/components/Loading';
const mockCards = [
    {
        id: 1,
        title: 'Exploring React Hooks',
        description: "A deep dive into React's useState and useEffect hooks.",
        date: '2023-05-15',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg',
    },
    {
        id: 2,
        title: 'Tailwind CSS Tips',
        description: 'Boost your productivity with these Tailwind CSS tricks.',
        date: '2023-06-02',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg',
    },
    {
        id: 3,
        title: 'Next.js 13 Features',
        description: 'Exploring the new features in Next.js 13 and how to use them.',
        date: '2023-06-20',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg',
    },
    {
        id: 4,
        title: 'TypeScript Best Practices',
        description: 'Improve your TypeScript code with these best practices.',
        date: '2023-07-05',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg',
    },
    {
        id: 5,
        title: 'TypeScript Best Practices',
        description: 'Improve your TypeScript code with these best practices.',
        date: '2023-07-05',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg',
    },
    {
        id: 6,
        title: 'TypeScript Best Practices',
        description: 'Improve your TypeScript code with these best practices.',
        date: '2023-07-05',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg',
    },
    {
        id: 7,
        title: 'TypeScript Best Practices',
        description: 'Improve your TypeScript code with these best practices.',
        date: '2023-07-05',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg',
    },
    {
        id: 8,
        title: 'TypeScript Best Practices',
        description: 'Improve your TypeScript code with these best practices.',
        date: '2023-07-05',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg',
    },
    {
        id: 9,
        title: 'TypeScript Best Practices',
        description: 'Improve your TypeScript code with these best practices.',
        date: '2023-07-05',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2fd9882892035.5d2c3c960586e.jpg',
    },
];

type HomeViewProps = ReturnType<typeof useHomeModel>;

export const HomeView = (props: HomeViewProps) => {
    const { data, isLoading, isError } = props;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Search Moviess</h1>
            <div className="flex gap-2 mb-8">
                <Input type="text" placeholder="Search articles..." className="" />
            </div>
            {isError ? (
                <p>Something went wrong!</p>
            ) : isLoading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.items.map((card) => (
                        <Card key={card.id} className="flex flex-col bg-white overflow-hidden">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-48 object-cover "
                            />
                            <CardHeader>
                                <CardTitle>{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{card.description}</p>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <p className="text-sm text-muted-foreground">{card.date}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
            {mockCards.length === 0 && (
                <p className="text-center text-muted-foreground mt-8">No articles found.</p>
            )}
        </div>
    );
};
