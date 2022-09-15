try {
    error.error.error();
} catch(e) {
    console.log(e.name);
    console.log(e.message);
}
console.log('------------------------------------------');

function callThreeTimes(callback) {
    if (typeof(callback) == 'function') {
    for (let i=0; i<3; i++) 
        callback();
    } else {
        console.log('callback 함수를 정의하세욧!');
    }
}

function myFunc() {
    console.log('호출이 되었음');
}
   

callThreeTimes(myFunc);
callThreeTimes(); //함수를 매개변수로 받아와야하는데 아무것도 주지 않아서 오류 발생

function callThreeTimes2(callback) {
    try {
        for (let i=0; i<3; i++) 
            callback();
    } catch(e) {
        console.log('callback 함수를 정의하세욧!'); //강사님 깃헙보고 수정
    }
}

console.log( callThreeTimes2());
console.log('프로그램 정상 종료');


