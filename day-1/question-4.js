"use strict";
exports.__esModule = true;
var car1 = {
  model: "Skyline GTR V-Spec II",
  make: "Nissan",
  year: 1999,
  isCoupe: true,
};
var car2 = {
  model: "Impreza WRX STi",
  make: "Subaru",
  year: 1994,
};
function displayCar(car) {
  if (car.isCoupe) {
    return "The car is a "
      .concat(car.make, " ")
      .concat(car.model, ", made in ")
      .concat(car.year, ". Is a coupe.");
  }
  return "The car is a "
    .concat(car.make, " ")
    .concat(car.model, ", made in ")
    .concat(car.year, ".");
}
displayCar(car1);
displayCar(car2);
