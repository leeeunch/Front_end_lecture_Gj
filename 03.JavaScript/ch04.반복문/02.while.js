// 1에서 얼마까지 더하면 1000을 초과하는가?

let number = 1, sum = 0;

while (true) {
    sum += number;
    if (sum > 1000)
        break;
    number++;
}

console.log(sum, number);

sum = 0;
for (let i=1; i<1000; i++) { //변수 i는 {}안에서만 유효(scope rule)
    sum += i;
    if (sum > 1000)
        break;
}

//console.log(sum, i); //i는 지역변수

let i=0;
sum = 0;
for (i=1; i<1000; i++) { //변수 i는 {}안에서만 유효(scope rule)
    sum += i;
    if (sum > 1000)
        break;
}
console.log(sum,i);

a = 0;
console.log(a);