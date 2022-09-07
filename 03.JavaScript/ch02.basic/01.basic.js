/* var a = 10;
a += 20;
console.log(a);

//const는 상수 
const b = 10;
b += 20;
console.log(b); //b가 상수이기 때문에 변할 수 없어, 오류 발생

//왠만하면 const로 변수를 선언함
//값이 변하는 변수만 var로 선언할 것
//let을 사용할 것

const k = 10;
let bb = 20;
//b += a;
console.log(a,b);

//var는 여러번 선언 가능
var c = 10;
var c = 20;

//let은 1번만 선언 가능함
let d = 10;
let dd = 20; */

console.log(typeof(3.1), typeof(2));
console.log(typeof('abc'), typeof('안녕'));
let tl = 'a=${a}, b=${b}'; //back quote, ESC 위의 자판
console.log(tl);
tl = tl + '문자열 결합';
let st = '문자열과 숫자의 결합' + 123;
console.log(st);
console.log(st, st[0], st[10])

let today = new Date();
console.log(today, today.getFullYear(), today.getMonth()+1);

// 3. bool
console.log(4 > 3, 4 < 3); //true, false
console.log(4 > 3 && 10 > 8, '가방' < '나무' || false);
console.log(today.getHours() >= 9 && today.getHours);

// 4. undifined
let pi;
console.log(typeof pi);
pi = Math.PI;
console.log(typeof pi);
console.log