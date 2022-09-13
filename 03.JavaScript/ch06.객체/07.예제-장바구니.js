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

class Cart extends Product {
    constructor (name, price, count) {
        super(name, price);        
        this.count = count;
        this.cart = [];
        this.allCount = 0;
    }
    add() {
        this.cart.push(this.name);
    }
    sum() {
        for (let i = 0; i < this.count; i++) {
            this.allCount += this.price;
        }
    }
    toString() {
        return super.toString() + '\n' + `상품의 갯수는 ${this.count}개로, 상품의 총 가격은 ${this.allCount}원 입니다.`
    }
}

const cat = new Cart('고양이 밥',100,22);
cat.add();
cat.sum();
console.log(cat.toString()); 

let food = new Product('고양이 밥', 1000);
let sand = new Product('고양이 모래', 500);
let snack = new Product('츄르', 100);

productName = [];
productName.push(food.name);
console.log(productName);

