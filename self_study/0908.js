// 삼항 연산자
var x = 10
var result = x % 2 ? '홀수' : '짝수';
console.log(result); 

//쉼표 연산자
var x,y,z;
x=1, y=2, z=3;
console.log(x=1, y=2, z=3);
var x = 10;
var x = 11; //됨
//let x = 9; //인됨

let d = 1;
d = (2,3,4); //됨
console.log(d);
//let d = 'o'; //안됨
console.log(d);

//for문
for (let i=0; i<2; i++) {
    console.log(`i:${i}`);
    for (let k = 2; k >0; k--)
        console.log(`k:${k}`);
}                                                                                                                                                                                                                                                                                                                                   
