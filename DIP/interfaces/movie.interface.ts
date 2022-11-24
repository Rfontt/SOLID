import { CategoryI } from "./category.interface";

export type MovieType = {
    name: string;
    description: string;
    category: CategoryI;
}

export interface MovieI {
    getName(): string;
    getDescription(): string;
    getCategory(): CategoryI;
}

export interface MoviesServiceI {
    collectionMovieForType(type: number): MovieI[];
}