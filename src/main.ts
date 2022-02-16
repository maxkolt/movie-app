import './assets/main.scss';
import {FilmsService} from './service/films-service';
import {Validation} from "./service/validation";
import {findAllFilms} from "./listeners/listeners";

export class Api{
 static apiKey = '205d1e46-6a65-44bc-8872-8c5e1ec5b463'
 static techApi = `https://kinopoiskapiunofficial.tech/api`
}

const form: HTMLFormElement = document.querySelector('#form-input')!
const btnSearch: HTMLButtonElement = document.querySelector('button')!
const input: HTMLInputElement = document.querySelector('#input-text')!

const filmService = new FilmsService()
await filmService.getAndShowTop100Films(1)

input.addEventListener('input', () => btnSearch.disabled = !Validation.isInputTextValid())
form.addEventListener('submit', (event: SubmitEvent) => findAllFilms(event))
btnSearch.addEventListener('click', () => filmService.getAllFilmsOnSearch())






