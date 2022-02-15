import {Response} from "../model/response";
import {Film} from "../model/film";
import {FilmHtmlCreator} from "../html-creator/film-html-creator";

export class FilmsService {
    apiKey: string = '205d1e46-6a65-44bc-8872-8c5e1ec5b463'

    async getAndShowAllFilms(pageNumber: number = 1) {
        const films: Array<Film> = await this.getAll(pageNumber);

        const filmHtmlCreator: FilmHtmlCreator = new FilmHtmlCreator()
        filmHtmlCreator.insertInHtmlAllMovieCards(films)
    }

    private async getAll(pageNumber: number) {
        const domain: string = `https://kinopoiskapiunofficial.tech/api/v2.2`;
        const apiUrlPopular: string = `${domain}/films/top?type=TOP_100_POPULAR_FILMS&page=${pageNumber}`

        console.log('Посылаю запрос на сервер для страницы: ' + pageNumber)
        const responseMovie = await fetch(apiUrlPopular, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': this.apiKey,
            },
        });
        const responseData: Response = await responseMovie.json()
        const films: Array<Film> = responseData.films
        console.log(`Получил ответ ${films.length} шт. фильмов`)
        return films;
    }
}