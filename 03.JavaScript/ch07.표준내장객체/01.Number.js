let number = 273.1;

let num = Number(273.1);

console.log(num === number); //두 가지 방법이 동일

//기본 자료형 - 숫자, 문자열, 불
//객체 자료형
let obj = new Number(273.1); //객체 자료형
console.log(typeof(number), typeof(num), typeof(obj));

let pi = Math.PI;
console.log(pi);
console.log(pi.toExponential()); //지수 연산
console.log(pi.toFixed(2)); //소수점 아래 n개의 숫자 남김
console.log(pi.toPrecision(6)); //유효숫자 n개만 남김

console.log(Number.MAX_VALUE, Number.MIN_VALUE);//값의 최솟값, 최대값
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Math.pow(2,53)-1);