const cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino'];

let manufacturer = [];
let model = [];
for (car of cars) {
    manufacturer.push(car.split(' ').slice(0,1).toString());
    if (car.split(' ').slice(1).length > 1) {
        model.push(car.split(' ').slice(1)[0]+' '+car.split(' ').slice(1)[1]);
        } else {
            model.push(car.split(' ').slice(1).toString());
        }
    }

console.log(manufacturer);
console.log(model);