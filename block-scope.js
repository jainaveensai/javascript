var b = 100
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}
console.log(b);  // 100

var a1 = 10
{
    let a1 = 20 // refferce error
    var b = 200
    console.log(a1);
}
console.log(a1, b, 'a1');
