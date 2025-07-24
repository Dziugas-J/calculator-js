let a = 0;
let b = 0;
let operator = 0;
let countOp = 0;
let arrayForAB = "";
let arrayForCheck = [];
let sum = 0;
let str = document.querySelector(".text");

function addNumberToArray(element){
    const value = element.dataset.number;
    arrayForCheck += value;
    const checkForFirstOperator = arrayForCheck.charAt(arrayForCheck.length-2);
    const checkForDuplicateOperators = arrayForCheck.charAt(arrayForCheck.length-1);
    if (/[+\-*/]/.test(checkForDuplicateOperators) && /[+\-*/]/.test(checkForFirstOperator)){
        resetChars();
        return;
    }
    else if (/[+\-*/]/.test(value)) {
        console.log(" operator= " + operator + " arrayForAB= " + arrayForAB);
        if (operator===0){
            operator = value;
            console.log("a irasytas")
            a = Number(arrayForAB);
        }
        else {
            operate();
            operator = value;
        }
    }
    arrayForAB += value;
    return str.innerHTML += value;
}

function operate(element){
    if (element && element.dataset && element.dataset.operator !== undefined) {
        b = Number(arrayForAB.slice(String(a).length+1,arrayForAB.length));
        if (operator==="+"){
            sum = add(a,b);
            resetCharsWithinFunction();
            return str.innerHTML = sum;
        }
        else if (operator==="-"){
            sum = subtract(a,b);
            resetCharsWithinFunction();
            return str.innerHTML = sum;
        }
        else if (operator==="*"){
            sum = multiply(a,b);
            resetCharsWithinFunction();
            return str.innerHTML = sum;
        }
        else if (operator==="/"){
            sum = divide(a,b);
            resetCharsWithinFunction();
            return str.innerHTML = sum;
        }
    } 
    else {
        b = Number(arrayForAB.slice(String(a).length+1,arrayForAB.length));
        if (operator==="+"){
            sum = add(a,b);
            resetCharsWithinFunction();
            return str.innerHTML = sum;
        }
        else if (operator==="-"){
            sum = subtract(a,b);
            resetCharsWithinFunction();
            return str.innerHTML = sum;
        }
        else if (operator==="*"){
            sum = multiply(a,b);
            resetCharsWithinFunction();
            return str.innerHTML = sum;
        }
        else if (operator==="/"){
            sum = divide(a,b);
            resetCharsWithinFunction();
            return str.innerHTML = sum;
        }
    }
}

function resetChars(){
    a = 0;
    b = 0;
    operator = 0;
    countOp = 0;
    arrayForAB = "";
    arrayForCheck = [];
    return str.innerHTML = "";
}

function clearChars(){
    return str.innerHTML = "";
}

function resetCharsWithinFunction(){
    clearChars();
    operator=0;
    a = sum;
    arrayForAB = String(a);
    arrayForCheck = String(a);
}

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}