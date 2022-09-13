let palindrome1 = [];
let palindrome2 = [];
function Palindrome(A,B) {
    let mul = A*B;
    let reverse = ''
    for (let i=mul.length-1; i >= 0 ;i--)
        reverse += mul[i];

    if (mul == reverse)  {
        palindrome1.push(A);
        palindrome2.push(B);
    }
}

for (let i = 100; i < 1000 ; i++) {
    for (let j = 100; j < 1000; j++) {
        let a = i;
        let b = j;
        Palindrome(a,b);
    }
}
console.log(palindrome1);
console.log(palindrome2);