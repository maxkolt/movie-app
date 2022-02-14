import {Movie} from "../model/movie";
import {Genre} from "../model/genre";
import {getClassByRating} from "../listeners/listeners";

export function createMovieCardsHtml(movie: Movie): string {
    console.log('Добавляю карточку в HTML')
    const genres: Array<Genre> = movie.genres.slice(1, 3);
    const genresFilms = genres.map(genre => genre.genre);

    const resultCardFilms: string = `<div class="movie-inner">
                                        <img class="rounded movie-cover"
                                             src="${movie.posterUrlPreview}
                                             alt="${movie.nameRu}"/>
                                            <div class="cover-darkened"></div>
                                              </div>
                                        <div class="movie-info">
                                            <div class="movie-title">
                                                ${movie.nameRu}
                                            </div>
                                            <div class="movie-category">
                                                ${genresFilms}
                                            </div>
                                            <div class="movie-average average-green-
                                                ${getClassByRating(movie.rating)}">
                                                ${movie.rating}
                                            </div>
                               
                                        </div>`

    console.log('Получил HTML карточку')
    return resultCardFilms
}
