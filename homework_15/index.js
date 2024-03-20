// Функция для загрузки данных
function fetchData() {
    // Запрос к API для получения случайной активности
    fetch("https://www.boredapi.com/api/activity")
    .then(resp => {
        // Проверка статуса ответа
        if(resp.status !== 200){
            throw new Error("Ошибка при получении данных"); // Выбрасываем ошибку, если статус ответа не равен 200
        }
        return resp.json(); // Возвращаем JSON-представление ответа
    })
    .then(json => {
        // Получаем элемент, в который будем вставлять данные
        const result = document.getElementById("content");
        result.innerHTML = ""; // Очищаем содержимое перед обновлением данных
        const activity = json.activity; // Получаем случайную активность из JSON-ответа
        const activityElement = document.createElement("p"); // Создаем новый параграф для отображения активности
        activityElement.textContent = activity; // Устанавливаем текст параграфа
        result.appendChild(activityElement); // Добавляем параграф в контейнер для результатов
    })
    .catch(error => {
        console.log(error); // В случае ошибки логируем её в консоль
    });
}

// Повесить обработчик события для кнопки
document.getElementById("updateButton").addEventListener("click", fetchData);
 // Добавляем обработчик события "click" для кнопки, вызывающий функцию fetchData при каждом клике.