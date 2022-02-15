import {showAllCardsMovie} from "../html-creator/film-html-creator";
import {Response} from "../model/response";
import {Film} from "../model/film";

const apiKey: string = '205d1e46-6a65-44bc-8872-8c5e1ec5b463'

export class MovieService {
    async getAllMovie(pageNumber: number = 1) {
        const apiUrlPopular: string = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${pageNumber}`
        console.log('Посылаю запрос на сервер')
        const responseMovie = await fetch(`${apiUrlPopular}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKey,
            },
        });
        const responseData: Response = await responseMovie.json()
        console.log('Получаю ответ ' + JSON.stringify(responseData))
        const films: Array<Film> = responseData.films
        showAllCardsMovie(films)
    }
}