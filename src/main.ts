import './assets/main.scss';
import {FilmsService} from './service/filmsService';
import {findAllFilms} from "./listeners/listeners";

const moviesService:FilmsService = new FilmsService()
await moviesService.getAndShowAllFilms(1)


//window.addEventListener('load', () => movieService.)

const form: HTMLFormElement = document.querySelector('#form-input')!
const searchInput: HTMLInputElement = document.querySelector('.form-control')!
const btnSearch: HTMLButtonElement = document.querySelector('button')!

const apiUrlSearch: string = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='

form.addEventListener('submit', (event: SubmitEvent) => findAllFilms(event))

//btnSearch.addEventListener('click', findAllFilms())



