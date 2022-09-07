//생년월일을 입력으로 받아 만 나이를 계산하는 프로그램을 작성하시오
const prompt = require("prompt-sync")();
const currentTime = new Date();

let year = prompt();
let month = prompt();
let date = prompt();
 
if (month < currentTime.getMonth()+1) {
    console.log(currentTime.getFullYear() - year);
} else if (month == currentTime.getMonth()+1 && date <= currentTime.getDate()+1) {
    console.log(currentTime.getFullYear() - year);
} else {
    console.log(currentTime.getFullYear() - year - 1);
} 
