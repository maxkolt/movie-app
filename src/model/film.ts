import {Genre} from "./genre";


export interface Film {
    filmId:number
    genres:Array<Genre>;
    nameRu: string;
    posterUrlPreview: string;
    rating:number;
    url:string;

}
