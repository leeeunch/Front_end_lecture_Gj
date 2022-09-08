//홀수를 입력으로 받아 다이아몬드를 그리는 프로그램
let su;
su = 7

for (let i=1; i<=su; i++) {
    let stars = '';
    if (i < 4) {
        for (let k=3; k<=4-i; k--)
            stars += ' ';
        for (let h=1; h<=i+1; h+=2)
            stars += '*';
        console.log(stars);}
    // } else if (i == 4) {
    //     console.log('*******')}
    // } else {
    //     for (let k=1; k>=su-i; k--)
    //         stars += ' ';
    //     for (let k=1; k>=i; k--)
    //         stars += '*';
    // }
}

