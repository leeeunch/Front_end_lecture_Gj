//시험점수를 입력으로 받아 학점을 부여하는 프로그램을 switch 문을 사용하여 작성하세요.
//90점 이상이면 A, 90점 미만 80점 이상이면 B, …, 60점 미만이면 F

const prompt = require("prompt-sync")();
var score = prompt();
var score = parseInt(score);

switch (true) {
    case (score>= 90):
        console.log('A');
        break;
    case (score>= 80):
        console.log('B');
        break;
    case (score>= 70):
        console.log('C');
        break;
    case (score>= 60):
        console.log('D');
        break;
    default:
        console.log('F');
    }