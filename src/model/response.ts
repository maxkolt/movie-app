import {Film} from "./film";

export interface Response{
    pagesCount:number;
    films:Array<Film>
}