const one = document.getElementById('one');
const display = document.getElementById('display');
const allClear = document.getElementById('all-clear');
// One button
one.addEventListener('click', function(){
    display.innerHTML = 1
})
//Clear button
allClear.addEventListener('click', function(){
    display.innerHTML = ''
})

//Calculator functions

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    if(a == 0){
        return 0
    } else if(b == 0){
        return "Can't divide by zero"
    }else{
        return a/b
    }
}

