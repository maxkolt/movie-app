import {Genre} from "../model/genre";
import {Film} from "../model/film";

export function createMovieCardsHtml(film: Film): string {
    console.log(`Добавляю фильм в HTML c name = ${film.nameRu}`)
    const genresAll: Array<Genre> = film.genres;
    const genresOnly2: Array<Genre> = genresAll.slice(1, 3);
    const genresFilms: Array<string> = genresOnly2.map(g => g.genre);

    const rating: string = `${getClassByRating(film.rating)}`;
    const resultCardFilms: string = `<div class="movie-inner">
                                        <img class="rounded movie-cover"
                                             src="${film.posterUrlPreview}
                                             alt="${film.nameRu}"/>
                                            <div class="cover-darkened"></div>
                                              </div>
                                        <div class="movie-info">
                                            <div class="movie-title">
                                                ${film.nameRu}
                                            </div>
                                            <div class="movie-category">
                                                ${genresFilms}
                                            </div>
                                            <div class="movie-average average-green
                                                ${rating}">
                                                ${film.rating}
                                            </div>
                                        </div>`
    console.log('')
    return resultCardFilms
}

function getClassByRating(voice: any): string {
    if (voice > 5) {
        return voice >= 7 ? 'average-green' : 'average-orange';
    } else {
        return voice >= 7 ? 'average-green' : 'average-red';
    }
}

export function showAllCardsMovie(films: Array<Film>) {
    const movieElement: HTMLElement = document.querySelector('.movies-all')!
    // Очищаю предыдущие фильмы
    movieElement.innerHTML = '';

    films.forEach(movie => {
        const cardMovieHtml: HTMLElement = document.createElement('div')
        cardMovieHtml.classList.add('movie')
        cardMovieHtml.innerHTML = createMovieCardsHtml(movie)
        movieElement.appendChild(cardMovieHtml)
    })
}
