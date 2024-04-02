const p1 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('p1') }, 10000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('p2 ') }, 5000);
    // setTimeout(() => { resolve('p2') }, 1000);
})

async function handlePromise(params) {
    console.log('hello world')
    const val1 = await p1;
    console.log('val1', val1);
    const val2 = await p2;
    console.log('val2', val2);
}
handlePromise()