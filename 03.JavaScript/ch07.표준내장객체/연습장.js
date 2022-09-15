// three = 0;

// let a = 1;
// console.log(String(a).indexOf('3') == -1);

// let b = 13;
// console.log(String(b).indexOf('3') != -1);

// console.log(3 == (3 || 13));

// let a = {1:0, 2:3, 4:5};
// console.log(2 in a);

// let g = {};
// g[0] = 1;
// console.log(g);

// let h = 199;
// console.log(String(h).split(''));

// let strNum = String(1888).split('');
// console.log(strNum);

// let num = {};
// num[0] = 1;
// console.log(num);

let a = 'afb';
// console.log(Array(a).reverse());

let set = new Set();
set.add([1,2,3,3]);
// console.log(set);

let A = [ 1, 2,  3, 4, 6, 12, 5, 11, 55]; //set
let B = [1, 2, 3, 4, 6, 12, 1, 2,3, 5, 11, 55];  //전체

for (i of A) {
    B.splice(B.indexOf(i),1);
}
console.log(B);

let cc = 'cj jds vdsnvj';
console.log(cc.split(' '))