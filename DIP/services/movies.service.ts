import { MovieI, MoviesServiceI } from "../interfaces/movie.interface";

export default class MoviesService implements MoviesServiceI {
    constructor(private movies: MovieI[]) {}

    collectionMovieForType(type: number): MovieI[] {
        return this.movies.filter((item) => item.getCategory().type === type);
    }
}