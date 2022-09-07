const currentTime = new Date();

if (currentTime.getHours() < 12) {
    console.log(`${currentTime.toLocaleString()}은/는 오전입니다.\n`);
} else {
    console.log(`${currentTime.toLocaleString()}은/는 오후입니다.\n`);
}

// if나 else 뒤에 Single Statement(문장이 하나만 나오면) {}를 넣지 않아도 됨
// (이 경우에는 아래와 같은 3항 연산자 사용이 바람직함)
// if나 else 뒤에 문장이 여러 개일 때 반드시 사용해야함
if (currentTime.getHours() < 12) 
    console.log(`${currentTime.toLocaleString()}은/는 오전입니다.\n`);
else 
    console.log(`${currentTime.toLocaleString()}은/는 오후입니다.\n`);

// 조건 연산자, 3항 연산자
// if문 다음에 Single Statement
const amPm = currentTime.getHours() < 12 ? '오전' : '오후';
console.log(`${currentTime.toLocaleString()}은/는 ${amPm}입니다.\n`);

