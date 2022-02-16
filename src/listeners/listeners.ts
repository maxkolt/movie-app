import {Validation} from "../service/validation";

export class ListenerSearch {
    findAllFilms(event: SubmitEvent) {
        console.log('🔫 TODO: Тут происходит событие валидации')
        event.preventDefault()

        const btnSearch: HTMLButtonElement = document.querySelector('button')!
        const input: HTMLInputElement = document.querySelector('#input-text')!


        if (Validation.isInputTextValid()) {
            btnSearch.disabled = true
            input.value = ''
        } else {
            btnSearch.disabled = false
            console.log('🔫 TODO: Очищаю данные и дезейблю кнопку')
        }
    }
}

