function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
         console.log(i)
        }, i * 1000)
    }
    console.log('jai');
}
x()
/*
output
jai
1
2
3
4
5
*/