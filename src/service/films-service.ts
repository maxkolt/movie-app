import {Response} from "../model/response";
import {Film} from "../model/film";
import {FilmHtmlCreator} from "../html-creator/film-html-creator";
import {Api} from "../main";

export class FilmsService {
    async getAndShowTop100Films(pageNumber: number = 1) {
        const url: string = Api.techApi + `/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${pageNumber}`
        await this.showFilms(url);
    }

    async getAllFilmsOnSearch() {
        const input: HTMLInputElement = document.querySelector('#input-text')!
        const url: string = Api.techApi + `/v2.1/films/search-by-keyword?keyword=${input.value}`
        await this.showFilms(url);
    }

    private async showFilms(url: string) {
        const films: Array<Film> = await this.getAllFilms(url)
        const filmHtmlCreator: FilmHtmlCreator = new FilmHtmlCreator()
        filmHtmlCreator.insertInHtmlAllMovieCards(films)
    }

    private async getAllFilms(url: string) {
        console.log('Посылаю запрос на сервер для страницы')
        const responseMovie = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': Api.apiKey,
            },
        });
        const responseData: Response = await responseMovie.json()
        const films: Array<Film> = responseData.films
        console.log(`Получил ответ ${films.length} шт. фильмов`)
        return films;
    }
}