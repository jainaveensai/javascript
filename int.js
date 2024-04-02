
const str = 'helllorrtiofhggllkii'
function string(str) {
    let result = {}
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (!result[ch]) {
            result[ch] = 1
        } else {
            result[ch]+= 1
        }
    }
    return result
}

console.log('result', string(str));

function callbackFunction(name) {
    console.log("Hello " + name);
  }
  
  function outerFunction(callback) {
    let name = "Please enter your name.";
    callback(name);
  }
  
  outerFunction(callbackFunction);