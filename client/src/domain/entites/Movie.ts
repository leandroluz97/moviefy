import { CreateMovieOptions } from '../types/Movie';

export class Movie {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public image: string,
        public date: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.date = date;
    }

    static create(options: CreateMovieOptions) {
        const { id, title, description, image, date } = options;
        return new Movie(id, title, description, image, date);
    }
}
