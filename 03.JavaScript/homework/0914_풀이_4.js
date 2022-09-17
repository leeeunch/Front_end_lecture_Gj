/*4. 다음 배열에서 제조사(manufacturer)와 모델명(model)을 분리해서 
별도의 배열을 각각 만드세요.
const cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino']; */

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