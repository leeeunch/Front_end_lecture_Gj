try {
    let array = new Array(-2000);
} catch(e) {                    //오류 발생시 실행      //e는 예외 객체  
    console.log(e.name);        //RangeError
    console.log(e.massage);     //Invalid array length
} finally {
    console.log('처리여부와 상관없이 실행');
}

const error = new Error();
error.name = '내 마음대로 에러';
error.messag = '오류 메세지';

try {
    throw error;    //강제 오류 발생
} catch(e) {
    console.log(e.name);
    console.log(e.massage);  //undefinde가 맞나
}


//1개의 loop 탈출
let sum = 0;
for (let i=0; i<10000; i++) {
    for (let j=0; j<10000; j++) {
        for (let k=0; k<10000; k++) {
            sum += i + j + k;
            if (sum > 1000000) {
                break;         //k loop만 탈출
            }
        }
    }
}

//의도적으로 예외를 생성해 전체 loop탈출
try{
    for (let i=0; i<10000; i++) {
        for (let j=0; j<10000; j++) {
            for (let k=0; k<10000; k++) {
                sum += i + j + k;
                if (sum > 1000000) {
                    throw error;        //전체 loop 탈출
                }
            }
        }
    } 
} catch(e) {};

console.log('loop 탈출 성공');