//Palindrome
// 1) 문자를 거꾸로 만드는 함수
function reverseString(str) {
    let result = ''
    for (let i=str.length-1; i >= 0 ;i--)
        result += str[i];
    return result;
}

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

//세자리 정수 두개를 곱한 결과가 Palindrome일때
//가장 큰 수와 그때 두 개의 정수는?
let maxPal = 0; maxA = 0; maxB = 0;
for (let i = 100; i < 1000; i++) {
    for (let j = i; j <1000; j++) {
        var pal = i*j;
        if (isPalindrome(String(pal))) {
            if (pal > maxPal) {
                maxPal = pal;
                maxA = i;
                maxB = j;
            }
        }

    }
}
console.log(`${maxA} X ${maxB} = ${maxPal}`);

//String
//1에서부터 1000까지 숫자가 있음
//0,1,2,,,,9가 각각 몇 번 나오는지?
let numCount = {}

for (let i = 1; i <= 1000; i++) {
    let strNum = String(i).split('');
    for (num of strNum) {
        if (num in numCount) {
            numCount[num] += 1;
        } else {
            numCount[num] = 1;
        }
    }
}
console.log(numCount);

//product 클래스를 정의할 것(속성 : 이름, 가격, toString 메소드)
//5가지의 상품을 만들 것(instance)

//Cart 클래스 (속성 : 상품, 수량, 메소드 : add()- 상품명, 수량 카드에 물건 담음, sum()) 
//Cart의 총 가격 구하기
class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `${this.name} 상품의 가격은 ${this.price}원 입니다.`;
    }
}   

class Cart {
    constructor(product, count, price) {
        this.product = product;
        this.count = count;
        this.price = price;
        this.cartList = [];
    }
    add() {
        for (let i = 1; i <= this.count; i++) {
            this.cartList.push(this.product);
        }
    }
    sum() {
        this.allPrice = this.count*this.price;
    }
    toString() {
        return `장바구니에는 ${this.cartList}이 있습니다. \n총 가격은 ${this.allPrice}원 입니다.`
    }
}

catFood = new Cart('고양이 밥',20,100);
catFood.add();
catFood.sum();
console.log(catFood.toString());

let a =  10;
let b = 200;
console.log(a*b);

class Cart2 {
    constructor(product, count, price) {
        this.product = product;
        this.count = count;
        this.price = price;
        this.cartList = [];
    }
    add() {
        for (let i = 1; i <= this.count; i++) {
            this.cartList.push(this.product);
        }
    }
    sum() {
        this.allPrice = this.count*this.price;
    }
    toString() {
        this.add();
        this.sum();
        return `장바구니에는 ${this.cartList}이 있습니다. \n총 가격은 ${this.allPrice}원 입니다.`
    }
}

catFood2 = new Cart2('고양이 똥',2000,100);
console.log(catFood2.toString());