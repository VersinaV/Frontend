// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener("click", () => {
    // создаем новую кнопку
    const newBtn = document.createElement("button");
    // задаем id новой кнопке
    newBtn.id = "magic-btn-2";
    // устанавливаем текст новой кнопки
    newBtn.innerText = "Я изменю тебя";
  
    // устанавливаем стили новой кнопки
    newBtn.style.backgroundColor = "#a78b71";
    newBtn.style.color = "white";
    newBtn.style.fontSize = "20px";
    newBtn.style.margin = "20px";
    newBtn.style.borderRadius = "10px";
    newBtn.style.border = "none";
    newBtn.style.padding = "15px";
  
    // добавляем новую кнопку в body
    document.body.appendChild(newBtn);
  
    // меняем стили кнопки magic-btn
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";
  });
