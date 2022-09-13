//상속
class Person {
    constructor (name, age, gender) {//생성자 (python의 init 역할)
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    toString() {
        return `저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`;
    }
}

const person = new Person('가리비',5,'남자');
console.log(person.toString()); //객체를 string으로 변환시켜줌
console.log(person);

// class Student extends Person { //person을 상속 받음
//     constructor (scholarship){ //생성자
//         this.scholarship = scholarship;
//     }
// }

// const student = new Student('홍길동', 25, '남자');
// console.log(student.toString());
// const hong = new Person();
// console.log(hong.toString());

class Student2 extends Person {
    constructor (name, age, gender, scholarship = 100000) {
        super(name, age, gender);
        this.scholarship = scholarship;
    }
    toString() {
        return super.toString() + '\n' + `장학금은 ${this.scholarship}원 입니다.`;
    }
}

const student2 = new Student2('이은찬', 24, '여자');
console.log(student2.toString());

//teacher 클래스 - person 상속, 속성 : 담당부서 추가, toString() 메소드 재정의
class Teacher extends Person {
    constructor (name, age, gender, department) {
        super(name, age, gender)
        this.department = department
    }
    toString() {
        return super.toString() + '\n' + `담당부서는 ${this.department}입니다.`
    }
}

const teacher = new Teacher('하서현', 24, '여자', '일반 사회 교육학');
console.log(teacher.toString());
