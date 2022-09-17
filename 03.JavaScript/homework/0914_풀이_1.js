/* 1. random number로 두개의 정수가 주어집니다.
첫번째 값의 범위는 1~20, 두 번째 값의 범위는 10~30
첫 번째 값이 두 번째 값보다 4이상 작아야함
첫 번째 정수부터 두 번째 정수까지를 지수로 하는 2의 거듭제곱 배열 출력
단, 배열의 두 번째 요소와 뒤에서 두 번째 요소는 삭제한 뒤 출력하세요. */

let A = Math.floor(Math.random()*(20-1)+1);
let B = Math.floor(Math.random()*(30-10)+10);

let result = [];
//let indices = [];
if ((B - A) >= 4) {
    for (let i = A; i <= B; i++) {
        result.push(2**i);
        //indices.push(i);
    } //console.log(result, result.length);
    result.splice(1,1);
    result.splice(-2,1);
    console.log(result);
    //console.log(result.length);
    //console.log(indices);
}

// console.log(A,B);