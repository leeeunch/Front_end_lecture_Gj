const month = Math.ceil(Math.random()*12);

if (month == 12 || month == 1 || month == 2) {
    console.log(month, '겨울');
} else if (month < 6 && month > 2) {
    console.log(month, '봄');
} else if (month < 9 && month > 5) {
    console.log(month, '여름');
} else {
    console.log(month, '가을')
}