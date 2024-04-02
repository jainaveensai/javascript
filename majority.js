function majority(params) {
    // console.log('sort', params.sort((a, b) => {
    //     params.filter(v => v === a).length - params.filter(v => v === b).length
    // }));
    return params.sort((a, b) => {
        // console.log("a value", a,
        //     "b Value", b,
        //     "a filter ", params.filter(v => v === a),
        //     'a filter length', params.filter(v => v === a).length,
        //     "b filtet", params.filter(v => v === b),
        //     'b filter length', params.filter(v => v === b).length,

        //     "final", params.filter(v => v === a).length - params.filter(v => v === b).length
        // );
        params.filter(v => v === a).length - params.filter(v => v === b).length
    }).pop();
}



function reverse(params) {
    k = k % params.length - 1
    return params.reverse()
}

console.log(majority([9, 9, 1, 3, 2, 7, 9]), 'majority');
const arr = [9, 9, 1, 3, 2, 7, 9]

const output = arr.reduce(function (acc, curr) {
    if (acc[curr]) {
        acc[curr] = 1+acc[curr]
    }
    else {
        acc[curr] = 1
    }
    return acc

}, {})

console.log('output', output);