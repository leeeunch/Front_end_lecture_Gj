let A = Math.floor(Math.random()*(20-1)+1);
let B = Math.floor(Math.random()*(30-10)+10);

let result = [];

if ((B - A) >= 4) {
    for (let i = A; i <= B; i++) {
        result.push(2**i);
    } 
    result.splice(1,1);
    result.splice(-2,1);
    console.log(result);
}
