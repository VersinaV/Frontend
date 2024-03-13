// ### Задание 6 
// Создайте новый массив, где все дизельные машины заменены на 
// `{ brand: "Tesla", price: 25000, isDiesel: false }`

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porsche", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const replacedDieselCars = cars.map(car => {
    if (car.isDiesel) {
        return { brand: "Tesla", price: 25000, isDiesel: false };
    } else {
        return car;
    }
});

console.log(replacedDieselCars);
