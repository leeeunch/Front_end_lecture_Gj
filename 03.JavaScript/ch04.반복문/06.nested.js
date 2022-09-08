//별로 직각 삼각형 그리기

let a = 5;

for (let i=1; i<=a; i++) {
    let stars = '';
    for (let k=1; k<=i; k++){
        stars += '*';
    }
    console.log(stars);
}

//4사분면
for (let i=5; i>=5; i--) {
    let stars = '';
    for (let k=1; k<=i; k++){
        stars += '*';
    }
    console.log(stars);
}

//2사분면
for (let i=1; i<=a; i++) {
    let stars = '';
    for (let k=1; k<=i; k++){
        stars += ' ';
    }
    for (let h=5; h<=i; h--){
        stars += '*';
    }
    console.log(stars);
}