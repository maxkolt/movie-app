import {Genre} from "./genre";

export interface Movie {
    filmId:number
    genres:Array<Genre>;
    nameRu: string;
    posterUrlPreview: string;
    films: [];
    rating:number;
    url:string;
}