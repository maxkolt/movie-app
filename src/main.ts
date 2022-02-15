import './assets/main.scss';
import {FilmsService} from './service/filmsService';
import {Validation} from "./service/validation";
import {ListenerSearch} from "./listeners/listeners";


const form: HTMLFormElement = document.querySelector('#form-input')!
const btnSearch: HTMLButtonElement = document.querySelector('button')!
const input: HTMLInputElement = document.querySelector('#input-text')!

input.addEventListener('input', () => btnSearch.disabled = !Validation.isInputTextValid())
form.addEventListener('submit', (event: SubmitEvent) => listenerSearch.findAllFilms(event))
btnSearch.addEventListener('click', () => filmService.getAllFilmsOnSearch())


const listenerSearch = new ListenerSearch()
const filmService = new FilmsService()
await filmService.getAndShowAllFilms(1)



