import {Movie} from "../model/movie";
import {createMovieCardsHtml} from "../html-creator/cardHtml";
import {getAllMovie} from "../service/movieService";

export function showAllCardsMovie(data: Movie) {
    console.log('Добавляю карточки с фильмами в блок')
    const movieElement: HTMLElement = document.querySelector('.movies-all')!
// Очищаю предыдущие фильмы
    movieElement.innerHTML = '';

    data.films.forEach(movie => {
        const cardMovieHtml: HTMLElement = document.createElement('div')
        cardMovieHtml.classList.add('movie')
        cardMovieHtml.innerHTML = createMovieCardsHtml(movie)
        movieElement.appendChild(cardMovieHtml)
    })
}

export function getClassByRating(voice: any): string {
    if (voice > 5) {
        return voice >= 7 ? 'average-green' : 'average-orange';
    } else {
        return voice >= 7 ? 'average-green' : 'average-red';
    }
}



