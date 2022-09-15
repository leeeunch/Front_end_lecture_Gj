//Palindrome
//세자리 정수 두개를 곱한 결과가 Palindrome일때
//가장 큰 수와 그때 두 개의 정수는?

// 1) 문자를 거꾸로 만드는 함수
function reverseString(str) {
    let result = ''
    for (let i=str.length-1; i >= 0 ;i--)
        result += str[i];
    return result;
}

console.log(reverseString('고양이'));

// 2) 주어진 문자열이 palindrome인지 확인하는 함수
function isPalindrome(str) {
    return str == reverseString(str);
}
console.log(isPalindrome('우영우'));

// 3) 배열에서 가장 큰 수와 그것의 인덱스 구하기
const array = [3, 98, 27, 51, 46];
//최대값을 임의로 선정, 제일 첫 번째 원소
let maxVal = array[0];
let maxIdx = 0;
for (let i=1; i<array.length; i++) {
    if (array[i] > maxVal) {
        maxVal = array[i];
        maxIdx = i;
    }
}
console.log(maxIdx,maxVal);

//palindrome 예제 답
let maxPal = 0, maxI = 0, maxK = 0;  //값 초기화
for (let i=100; i<=999; i++) { //100~99까지 범위
    for (let k=i; k<=999; k++) { //중복을 방지하기 위해 k는 i이상인 수
        let product = i * k; //두 수의 곱을 product 변수에 선언
        if (isPalindrome(String(product))) { //isPalindrome함수의 반환값이 참이면, 
            if (product > maxPal) { //product 값이 기존의 maxPal보다 크면 값 재설정
                maxPal = product;
                maxI = i;
                maxK = k;
            }
        }
    }
}

console.log(`${maxI} X ${maxK} = ${maxPal}`);