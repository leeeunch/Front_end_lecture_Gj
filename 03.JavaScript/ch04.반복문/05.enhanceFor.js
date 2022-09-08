const array = [52, 273.1, '아침밥', '점심밥', true, false];

//for-of
for (let item of array) {
    console.log(itwm, typeof(item));
}

//for-in, 파이선의 enumerate와 유사 //배열의 인덱스를 받아옴
for (let i in array) {
    console.log(i, array[i]);
}