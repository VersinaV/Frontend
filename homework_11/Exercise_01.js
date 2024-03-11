// Создайте стрелочную функцию, которая бы принимала массив и цифру,
 //возвращала бы элемент массива под этим индексом.

const getElementByIndex = (array, index) => {
    if (index >= 0 && index < array.length) {
      return array[index];
    } else {
      return "Индекс за пределами массива";
    }
  };
  
  const myArray = [10, 20, 30, 40, 50];
  const indexToRetrieve = 2;
  
  const result = getElementByIndex(myArray, indexToRetrieve);
  console.log(result);