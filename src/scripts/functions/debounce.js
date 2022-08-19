/**
 * @param func {function}
 * @param timeout {number} in ms
 * @return {function}
 */
 const debounce = (func, timeout) => {
    let timeoutId; // Переменная для ID таймера

    return function() {
        const context = this; // сохраняем аргументы и this
        const args = arguments;

        clearTimeout(timeoutId); // Завершаем старый таймаут

        timeoutId = setTimeout(() => { // Запускаем новый таймаут
            func.apply(context, args);
        }, timeout);
    };
}

export default debounce;