//어떤 숫자가 3의 배수인지, 5의 배수인지, 두 수의 공배수인지 맞추는 식을 만드시오

const num = Math.ceil(Math.random()*100)

if (num % 3 == 0 && num % 5 == 0) {
    console.log(`${num}은 FizzBuzz입니다.`);
} else if (num % 3 == 0) {
    console.log(`${num}은 Fizz입니다.`);
} else if (num % 5 == 0) {
    console.log(`${num}은 Buzz입니다.`);
} else{
    console.log(`${num}은 둘 다 아닙니다.`);
}

for (let i=1, i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        Process.stdout.write('FizzBuzz'+' ');
        
    }
}