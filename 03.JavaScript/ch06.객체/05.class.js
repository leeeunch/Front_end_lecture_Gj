//클래스를 사용해서 객체를 찍어내는 틀 만들기
class Person {
    constructor (name, age, gender) {//생성자 (python의 init 역할)
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    intro() {
        console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`);
    }
}

james = new Person('제임스', 28, '남자');
maria = new Person('마리아', 24, '여자');

console.log(james);
console.log(maria);

james.intro(); //intro의 경우, console.log로 작성되어있어 바로 출력 가능
