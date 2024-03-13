// ### Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const dieselCars = cars.filter(car =>  car.isDiesel);

console.log(dieselCars);