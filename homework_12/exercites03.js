// ### Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const nonDieselCars = cars.filter(car => !car.isDiesel);

console.log(nonDieselCars);