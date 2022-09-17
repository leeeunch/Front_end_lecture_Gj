/*3. random number로 10보다 크고 100보다 작은 두개의 정수가 주어집니다.
두 숫자의 공약수를 세트 형태로 구하도록 프로그램을 작성하세요. */

let A = Math.floor(Math.random()*(99-11)+11);
let B = Math.floor(Math.random()*(99-11)+11);

let aMeasure = [];

function measure(num) { //약수 array만드는 함수
    let measureList = [];
    for (let i=1; i<=num; i++) { 
        if (num%i == 0) {
            measureList.push(i);
        }
    }
    return measureList;
}

function addArray(set, array) { //약수를 set에 넣는 함수
    for (i of array) {
        set.add(i);
    } 
    return set;
}

function commonFactor(A,B) { //두 값의 약수를 set에 넣는 함수
    let set = new Set();
    let aMeasure = measure(A), bMeasure = measure(B);
    addArray(set,measure(A));
    addArray(set,measure(B));

    let allMeasure = measure(A).concat(measure(B))
    //let measureArray = Array.from(set); //약수 총 합의 set을 array로 변환
    for (i of Array.from(set)) {
        allMeasure.splice(allMeasure.indexOf(i),1);
    }
    return set, allMeasure;

}

let s = new Set();
console.log(A,B, measure(A), measure(B));
console.log(measure(A).concat(measure(B))); //두 약수의 총합 array

//약수의 총 합의 array에서 두 약수 set의 요소를 뺴라? -> array는 중복 가능하니 빼도 중복값은 남음
console.log(Array.from(addArray(s,measure(A)))); //약수 총합의 set을 array로 변환

console.log(commonFactor(A,B));
