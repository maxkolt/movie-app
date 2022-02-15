import './assets/main.scss';
import {MovieService} from './service/movieService';

const movieService:MovieService = new MovieService()
await movieService.getAllMovie(1)

//window.addEventListener('load', () => movieService.)

const form: HTMLFormElement = document.querySelector('#formInput')!
const searchInput: HTMLInputElement = document.querySelector('.form-control')!
const btnSearch: HTMLButtonElement = document.querySelector('button')!

const apiUrlSearch: string = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='
form.addEventListener('submit', (event: SubmitEvent) => {event.preventDefault()})
//btnSearch.addEventListener('submit', (event: SubmitEvent => ())


const apiSearchFilm: string = `${apiUrlSearch}${searchInput.value}`
if (searchInput.value) {
    searchInput.value = apiSearchFilm;
}

