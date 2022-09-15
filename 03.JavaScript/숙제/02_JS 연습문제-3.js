let A = Math.floor(Math.random()*(99-11)+11);
let B = Math.floor(Math.random()*(99-11)+11);

function measure(num) {
    let measureList = [];
    for (let i=1; i<=num; i++) { 
        if (num%i == 0) {
            measureList.push(i);
        }
    }
    return measureList;
}

function addArray(set, array) { 
    for (i of array) {
        set.add(i);
    } 
    return set;
}

function commonFactor(A,B) { 
    let set = new Set();
    let aMeasure = measure(A), bMeasure = measure(B);
    addArray(set,measure(A));
    addArray(set,measure(B));

    let allMeasure = measure(A).concat(measure(B))

    for (i of Array.from(set)) {
        allMeasure.splice(allMeasure.indexOf(i),1);
    }
    return set, allMeasure;

}

console.log(commonFactor(A,B));