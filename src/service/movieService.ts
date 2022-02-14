import {showAllCardsMovie} from "../listeners/listeners";

const apiKey: string = '205d1e46-6a65-44bc-8872-8c5e1ec5b463'

export async function getAllMovie() {
    console.log('Посылаю запрос на сервер')
    const responseMovie = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey,
        },
    });
    const responseData = await responseMovie.json()
    console.log('Получаю ответ ' + JSON.stringify(responseData))
    showAllCardsMovie(responseData)
}