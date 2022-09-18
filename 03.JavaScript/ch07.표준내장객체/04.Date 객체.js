let today = new Date();
console.log(today); //timezonne 세팅이 안되어 있다!

//timezone 세팅
console.log(today.toDateString()); //날짜, 요일
console.log(today.toLocaleString()); //timezone 반영한 현재 시간


// function myLocalTimeFormat(date) {
//     let result = '';
//     year = date.getFullYear() % 100;
//     result = `${year<10 ? '0'+year : String(year)}` //3항 연산자
// }

//22-09-14 09:16:45
function myLocalTimeFormat(date) {
    let year = String(date.getFullYear()).substring(2); //substring() 공부 //2022 -> 22
    let month = String(date.getMonth() + 1); //9월 -> 09
    month = month.length == 1 ? '0'+month : month;
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${sec}`;
}

console.log(myLocalTimeFormat(today));
console.log(today.getFullYear());

//Unix time
const unixDate = new Date(1.7e12); //유닉스 타임으로 바뀌면 날짜 차이 계산 가능
console.log(unixDate.toLocaleString());

//문자열로 생성
const strDate = new Date('2022-09-14 09:50');
console.log(myLocalTimeFormat(strDate));

//시간 요소로 생성
const elementDate = new Date(2022, 9-1, 14, 9, 50);
console.log(myLocalTimeFormat(elementDate));

//시간 더하고 빼기
today.setDate(today.getDate()+100);
console.log('시간 더하고 빼기');
console.log(myLocalTimeFormat(today));

//시간 간격
const examDay = new Date('2022-11-17');
today = new Date('2022-09-14');
const diff = examDay.getTime() - today.getTime();
const dDay = diff / (24*60*60*1000);
console.log(`오늘은 수능 D-${dDay}입니다.`);

