import {Validation} from "../service/validation";

export function findAllFilms(event: SubmitEvent) {
    console.log('🔫 Тут происходит событие валидации')
    event.preventDefault()

    const btnSearch: HTMLButtonElement = document.querySelector('button')!
    const input: HTMLInputElement = document.querySelector('#input-text')!


    if (Validation.isInputTextValid()) {
        btnSearch.disabled = true
        input.value = ''
        console.log('🔫 Очищаю данные и дезейблю кнопку')
    } else {
        btnSearch.disabled = false
    }
}


