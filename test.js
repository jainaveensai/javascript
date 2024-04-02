var a = 1;
function data() {
    console.log('if case',a, !a);

    if (!a) {

        var a = 10;
        console.log('if case');

    }
    console.log(a, !a);
}
data()
console.log(a);