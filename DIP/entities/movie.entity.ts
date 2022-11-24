import { CategoryI } from "../interfaces/category.interface";
import { MovieI, MovieType } from "../interfaces/movie.interface";

export default class MovieEntity implements MovieI {
    #name: string;
    #description: string;
    #category: CategoryI;

    constructor(movieDetails: MovieType) {
        this.#name = movieDetails.name;
        this.#description = movieDetails.description;
        this.#category = movieDetails.category;
    }

    getName(): string {
        return this.#name;
    }
    getDescription(): string {
        return this.#description;
    }
    getCategory(): CategoryI {
        return this.#category;
    }
    
}