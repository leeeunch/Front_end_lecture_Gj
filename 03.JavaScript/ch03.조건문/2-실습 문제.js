//년도를 입력으로 받아 윤년 여부를 판단하는 프로그램을 작성하세요.
//4로 나뉘어 지면 윤년, 100으로 나뉘어 지면 평년, 400으로 나뉘어 지면 윤년
const prompt = require("prompt-sync")();
let year = prompt();

if (year%400 == 0) {
    console.log('윤년');
} else if (year%100 == 0) {
    console.log('평년');
} else if (year%4 == 0) {
    console.log('윤년');
}
