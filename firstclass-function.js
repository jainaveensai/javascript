//function Statement also as function declaration 
function a(){
    console.log('function statement')
}

// function expression
var b = function(){
    console.log('function expression')
}

//Anonymous function


//Named function expression
var b = function xyz(parameters){
    console.log('named function expression ' + parameters);
}
b('arguments')


//First class functions
var fun = function(parm){
    return function xyz(){

    }
}

console.log(b());