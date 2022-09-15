// 대부분 파괴적 메소드
// 파괴적 메소드 : 자기 자신을 변경 가능한 메소드

//array 생성
const cars = ['Saab', 'Volvo', 'BMW'];
const persons = new Array('James', 'Maria');    //array도 객체이기 때문에 생성자 함수로 생성 가능
console.log(cars, persons);

//array 속성
console.log(cars.length, persons.length);

//마지막 요소 추출
console.log(cars[cars.length-1]);

//배열 합치기 
//concat
console.log(cars.concat(persons));      //array로 합쳐짐
console.log(cars + persons);            //string으로 변환되어 합쳐짐
console.log([cars, persons]);           //array 안의 array

//문자열 만들기 
//join
console.log(cars.join(' | '));

//마지막 요소 제거 - 원본이 변함
//pop
let car = cars.pop();
console.log(car, cars);

//마지막에 요소 추가 - 원본이 변함
//push
cars.push('Benz');
console.log(cars);

//마지막에 요소 추가 = 원본이 변함
//push
cars.push('Benz');      //cars 변수는 배열의 데이터가 있는 곳의 주소를 갖고 있으므로 const로 변수 선언을 해도 데이터 변경 가능
console.log(cars);

//const num = 1;
//num = 3; //value가 들어있기 때문에 오류 발생

//배열의 요소 순서 뒤집기 - 원본이 변함
//reverse
console.log(cars.reverse());
console.log(cars);

//문자열을 뒤집는 함수
//내 풀이
function reverseString(str) {
    let result = ''
    let strReverse = str.split('').reverse()
    for (let i = 0; i < str.length; i++) {
        result +=strReverse[i];
    }
    return result
}

console.log(reverseString('고양이'));

//답안
function reverseStringResult(str) {
    return str.split('').reverse().join(''); //한 줄로 짜는 것 연습 
}

let rs = str => str.split('').reverse().join('');
console.log(rs('바보 멍청 리비'));

//배열의 일부분을 반환
//slice
const fruits = ['apple','banana','cherry','grape'];
console.log(fruits.slice(1,3));     //시작 인덱스, 끝 인덱스
console.log(fruits.slice(2));       //끝 인덱스를 생략하면 끝까지 반환

//배열의 요소 정렬 - 원본 변함
console.log(cars);
cars.sort();        //오름차순 정렬
console.log(cars);

const numbers = [54,234,1,9];
numbers.sort().reverse();   //내림차순 정렬 //결과 값 이상한데???
console.log(numbers);

//배열의 일부분을 삭제해서 리턴
const abFruits = fruits.splice(0,2) //start, delete count
console.log(abFruits, fruits); //결과값 이상한데???

//배열의 각 요소에 대해서 함수 적용
numbers.map(function(num) {
    return Math.sqrt(num);
});
console.log(a);

result = numbers.map(x => Math.sqrt(x)); //화살표 함수로 간결하게 줄임
console.log(result);

//앞으로 해야할 과제
const objectArray = [
    {name:'가리비', score:80, math:80, sci:70},
    {name:'김복남', score:90, math:80, sci:70},
    {name:'콩이', score:70, math:80, sci:70},
    {name:'이은혜', score:65, math:80, sci:70}
]

//성적 순으로 내림차순 정렬해 보세요

//math와 sci의 평균을 구하시오

//math 점수가 80점 이상인 사람