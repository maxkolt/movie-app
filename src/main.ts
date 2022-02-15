import './assets/main.scss';
import {MoviesService} from './service/moviesService';
import {findAllFilms} from "./listeners/listeners";

const moviesService:MoviesService = new MoviesService()
await moviesService.getAllMovie(1)


//window.addEventListener('load', () => movieService.)

const form: HTMLFormElement = document.querySelector('#formInput')!
const searchInput: HTMLInputElement = document.querySelector('.form-control')!
const btnSearch: HTMLButtonElement = document.querySelector('button')!

const apiUrlSearch: string = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='

form.addEventListener('submit', (event: SubmitEvent) => findAllFilms(event))

//btnSearch.addEventListener('click', findAllFilms())



