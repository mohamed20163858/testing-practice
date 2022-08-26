function stringLength(string) {
    if(string.length >0 && string.length < 11)
    {
        return string.length ;
    }
    else {
       throw new Error('conditions doesnot met!');
    }
}

function reverseString(string) {
    let newStr = '';
    for(let i = string.length-1;i>=0;--i) {
        newStr += string[i];
    }
    return newStr;
}
class Calculator {
    add (a , b){
        this.throwError(a , b);
        return a + b;
    }

    subtract(a , b){
        this.throwError(a , b);
        return a - b;
    }

    divide( a , b){
        this.throwError(a , b);
        if (b === 0) {
           throw new Error('Error ! you can not divide by 0 ');
        }
        return a / b ;
    }

    multiply(a, b){
        this.throwError(a , b);
        return a * b;
    }

    throwError(a , b){
        if (typeof a !== 'number' || typeof b !== 'number' ) {
            throw new Error('one of your input values is not a number');
        }
    }
}

function capitalize(string) {
    if (typeof string !== 'string')
    {
        throw Error('the given input isnot a string type!');
    }
    return string[0].toUpperCase() + string.slice(1);
}
module.exports = {stringLength ,reverseString, Calculator, capitalize };