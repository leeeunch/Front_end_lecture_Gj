//배열 - 리스트
let fruits = ['사과','배','감'];

let arrayPersonInfo = ['제임스',28,'남자'];

//객체 - 딕셔너리
let personInfo = {
    'name':'제임스',
    'age':28,
    'gender':'남자'
};

console.log(personInfo['name']);

let maria = {name:'마리아',age:31,gender:'여자'}; //키 값은 영어로 쓰는게 좋음
console.log(maria.age);

//key 값을 변수(문자열)로 받는 경우
const key = 'age';
console.log(maria[key]);

