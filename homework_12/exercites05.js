// ### Задание 5
// Повысьте цену всех машин в массиве на 20%.

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

cars.forEach(car => {
    car.price *= 1.20; // увеличиваем цену на 20%
});

console.log(cars);