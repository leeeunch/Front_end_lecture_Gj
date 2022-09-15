//ES-6(2015년) 추가된 사항

//1.Destructuring assignment
//한 번에 값 할당 가능
const fruits = ['apple','banana','cherry','grape'];
const [a,b,c,d] = fruits;
console.log(a,b,c,d);

const product = {name:'mouse', price:20000};
const {name, price} = product;
console.log(name, price);

//2. Spread syntax
const fruits1 = ['grape', 'mango'];
const fruits2 = [fruits, fruits1];
console.log(fruits2);
const fruits3 = [...fruits ,...fruits1];
console.log(fruits3);

const numbers = [4, 16, 9, 25, 36];
console.log(Math.max(numbers));     //값이 아닌 주소가 들어와서 결과가 NaN
console.log(Math.max(...numbers));  //Math.max(4, 16, 9, 25, 36)

//3. let, const
//4. template literals : ``
//5. 3항 연산자
//6. 화살표 함수
//7. default parameters : 함수 인자의 default 값 설정 가능
//8. object shorthand property : {name:name, price:price} => {name, price}
//9. class

//10. Set
const mySet = new Set();
mySet.add(1);
mySet.add(3);
mySet.add(1);
console.log(mySet);
console.log(mySet.has(3));
console.log(mySet.size);
