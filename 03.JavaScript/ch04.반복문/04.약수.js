//10보다 큰 정수를 입력으로 받아 약수를 모두 배열로 만들어서 출력하시오.
const prompt = require("prompt-sync")();

let jungsu = prompt();

let divisor = []
for (let i=1; i<input; i++) {
    if (input%i == 0) 
        divisor.push(i);
        console.log(i);
}
console.log(divisor);