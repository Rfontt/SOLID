import { AudioControlI } from "../interfaces/audioControl.interface";
import { MovieI } from "../interfaces/movie.interface";

export default class TheLionKingEntity implements MovieI, AudioControlI {
    increaseVolume(): void {
        throw new Error("Method not implemented.");
    }
    play(): void {
        throw new Error("Method not implemented.");
    }
}