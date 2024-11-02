import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/cardItem"
import { Input } from "@/components/input";
const mockCards = [
  {
    id: 1,
    title: "Exploring React Hooks",
    description: "A deep dive into React's useState and useEffect hooks.",
    date: "2023-05-15",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    title: "Tailwind CSS Tips",
    description: "Boost your productivity with these Tailwind CSS tricks.",
    date: "2023-06-02",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    title: "Next.js 13 Features",
    description: "Exploring the new features in Next.js 13 and how to use them.",
    date: "2023-06-20",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 4,
    title: "TypeScript Best Practices",
    description: "Improve your TypeScript code with these best practices.",
    date: "2023-07-05",
    image: "/placeholder.svg?height=200&width=300"
  },
]


export const HomeView = () => {
  return (
<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Search Articles</h1>
      
      <div className="flex gap-2 mb-8">
        <Input
          type="text"
          placeholder="Search articles..."
          className="max-w-sm"
        />
        {/* <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCards.map(card => (
          <Card key={card.id} className="flex flex-col">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
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

      {mockCards.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No articles found.</p>
      )}
    </div>
);
};
