function print(name, count) {
    // if (!count) //count가 0인 경우
    //     count = 0;
    count = count ? count :0;
    // count = count || 0;      //ES-11
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과',10);
print('감');

function print2(name, count) { //ES-6
    // if (!count) //count가 0인 경우
    //     count = 0;
    //count = count ? count :0;
    // count = count || 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

