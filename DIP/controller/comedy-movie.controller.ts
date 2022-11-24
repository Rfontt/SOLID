import MovieEntity from "../entities/movie.entity";
import { MovieEnum } from "../enums/movie.enum";
import { MoviesServiceI } from "../interfaces/movie.interface";
import MoviesService from "../services/movies.service";

export default class CommedyMovie {
    #movies: MoviesServiceI;

    constructor() {
        const movie1 = new MovieEntity({ 
            name: "Dalmatas", description: "Dogs", category: { type: MovieEnum.DRAMA }, 
        });

        const movie2 = new MovieEntity({ 
            name: "Comedy I", description: "comedy I", category: { type: MovieEnum.COMEDY }, 
        });

        const movie3 = new MovieEntity({ 
            name: "Comedy II", description: "comedy II", category: { type: MovieEnum.COMEDY }, 
        });

        this.#movies = new MoviesService([
            movie1, movie2, movie3
        ]);
    }

    allComediesMovie() {
        return this.#movies.collectionMovieForType(MovieEnum.COMEDY);
    }
}