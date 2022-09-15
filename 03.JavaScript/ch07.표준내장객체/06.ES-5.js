//ES-5에서 추가된 array method
const fruits = ['apple','banana', 'cherry', 'grape'];

//배열 순회 메소드
//pyton의 enumerate와 유사
//forEach
fruits.forEach(function(value, index){
    console.log(`인덱스 ${index}의 값은 ${value} 입니다.`);
});

fruits.forEach(value => console.log(value));

//배열에서 기준을 만족시키는 것만 추출
//20보다 큰 수만 추출
const numbers = [54,234,1,9];
let result = numbers.filter(value = value > 20);
console.log(result);