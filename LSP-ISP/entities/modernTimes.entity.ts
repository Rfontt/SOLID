import { MovieI } from "../interfaces/movie.interface";

export default class ModernTimesEntity implements MovieI {
    play(): void {
        throw new Error("Method not implemented.");
    }
}