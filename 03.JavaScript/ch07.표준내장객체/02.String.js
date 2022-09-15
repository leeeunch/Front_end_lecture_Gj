//String 객체
let hello = '안녕하세요'; //literal로 부터 생성
let helloFromConstructor = new String('안녕하세요'); //생성자 함수로 생성

//속성
console.log(hello.length); //문자열의 길이를 알려줌
console.log(hello[1], hello.charAt(1)); //charAt은 잘 안씀
console.log(hello.concat(' 여러분!!!')); //+로 붙이는 것이 일반적
console.log(hello.indexOf('하')); //문자열 내의 특정 문자의 인덱스 값 반환 //해당 문자가 없으면 -1을 리턴함

//문제
//디지털 시계(00:00 ~ 23:59)가 있다.
//디지털 시계에서 3이라는 숫자가 있는 시간은 하루에 총 몇 초인가?
let three = 0;
for (let h = 0; h < 24; h++) {
    h = String(h);
    if (h.indexOf('3') == -1) {
        for (let m = 0; m < 60; m++) {
            m = String(m);
            if (m.indexOf('3') != -1) {
                three += 60;
            }
        } 
    } else {
        three += 3600;
    }
} 

console.log(three);

//Regular Expression (정규 표현식)
let sample = 'A quick brown fox 갈색의 재빠른 여우가 over the lazy dog.'
let newStr = sample.replace(/[A-Z]/, ' '); //대문자를 공백으로 만들어라
console.log(newStr);
newStr = sample.replace(/r/, 'R'); //첫 번째로 등장하는 문자만 변경됨
console.log(newStr); 
newStr = sample.replace(/r/g, 'R'); //등장하는 모든 문자를 변경
console.log(newStr); 
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g,''); //등장하는 모든 한글 제거
console.log(newStr); 

//문자열의 일부분 추출
let str = 'Apple, Banana, Kiwi';
console.log(str.slice(7,13)); //str.slice(start,stop) //python에서 처럼 stop직전에서 멈춘다
console.log(str.slice(7)); //stop값을 안주면 시작 인덱스에서 끝까지 반환
console.log(str.slice(7,-1));
console.log(str.substring(7,13));

//문자열을 배열로 만들기
const fruits = str.split('');
console.log(fruits);

//문제
//1에서부터 1000까지 숫자가 있음
//0,1,2,,,,9가 각각 몇 번 나오는지?
/*let numCount = {}
for (i = 0; i < 10; i++) {
    numCount[i] = 0;
}

for (num = 1; num <= 10; i++) {
    allNum = String(num).split('');
    for (j of allNum) {
        numCount[j] += 1;
    }
}

console.log(numCount);*/


//정답
let numbers = '';
for (let i=1; i <= 1000; i++)
    numbers += String(i);

let obj = {};
for (let i=0; i<10; i++) {
    obj[String(i)] = numbers.split(String(i)).length -1;
}
console.log(obj);