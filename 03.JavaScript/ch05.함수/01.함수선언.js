//함수 이름을 갖는 기본 함수
function funcName() {
    console.log('함수 이름을 갖는 함수');
}

funcName();

//익명 함수
const fn = function() {
    console.log('익명 함수');
}
fn();
console.log(typeof fn);

//화살표 함수
const arrowFunc = () => {
    console.log('화살표 함수');
}
arrowFunc();
console.log(arrowFunc, typeof arrowFunc);

//화살표 함수 단축하기
const square2 = (x,y) => { //매개변수가 여러 개일떄는 반드시 ()써야함
    return x*x + y*y;
}
console.log(square(3,4));

//매개변수가 하나면 ()를 생략할 수 있음
const square = x => {
    return x*x;
}
console.log(square(5));

//함수 안의 내용이 return문 하나만 있으면 {}와 return 생략가능
const sq = x => x*x;
console.log(sq(10));

