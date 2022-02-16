export class Validation {
    static isInputTextValid(): boolean {
        console.log('🔬 проверяю валидность у поля ввода (инпут)...')
        // ищем инпут
        const inputElement: HTMLInputElement = document.querySelector('#input-text')!
        // достаем строку из инпута
        const userInputText: string = inputElement.value
        // высчитываем сколько символов ввел пользователь
        const userInputTextLength: number = userInputText.length;
        console.log(`💁🏻 Пользователь ввел ${userInputText} - это [${userInputTextLength}] символов`)

        // Достаточно длинны чтобы разрешить кнопку?
        const isValid = userInputTextLength >= 3;

        // Просто печать и ничего больше (чтобы помочь себе тестить)
        console.log(`Закончил проверку введенной строки`)
        if (isValid) console.log(`✅ [${isValid}] достаточно символов. Можно больше не печатать`)
        else console.warn(`❌ [${isValid}] введите еще пару букв... `)

        // true если инпут валидный (достаточно длинный)
        return isValid
    }
}