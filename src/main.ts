import './assets/main.scss';
import {getAllMovie} from "./service/movieService";



const form: HTMLFormElement = document.querySelector('#formInput')!
const searchInput: HTMLInputElement = document.querySelector('.form-control')!
const btnSearch: HTMLButtonElement = document.querySelector('button')!

const apiUrlPopular: string = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'
const apiUrlSearch: string = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='



/*form.addEventListener('submit',
    (event: SubmitEvent) => {
        event.preventDefault();
    })*/
//btnSearch.addEventListener("click", () => showFilmInputForm())


    console.log('Проверяю кнопку')
    const apiSearchFilm: string = `${apiUrlSearch}${searchInput.value}`
    if (searchInput.value) {
        searchInput.value = '';
        getAllMovie(apiSearchFilm)
       // await getAllMovie(apiUrlPopular, apiSearchFilm)
    }
}

await getAllMovie(apiUrlPopular)