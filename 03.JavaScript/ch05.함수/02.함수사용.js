//어레이를 매개변수로 받아서 합을 변환하는 함수
function sumArray(array) {
    let sum = 0;
    for (let div of array) {
        sum += div;
    }
    return sum;
}

for (let i=2; i<=10000; i++) {
    const array = getDvisors(i);
    const arrSum = sumArray(array);
    if (arrSum == i) {
        console.log(i);
        console.log(array.toString());
    } 
}