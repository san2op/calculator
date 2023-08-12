let operator ='';
let previousValue ='' ;
let currentValue = '';

document.addEventListener("DOMContentLoaded",function(){

    let Del = document.querySelector("#del-btn");
    let clear = document.querySelector("#clear-btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");
    

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator")

    let previousscreen = document.querySelector(".previous");
    let currentscreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentscreen.textContent = currentValue;

    }))

    operators.forEach((op) => op.addEventListener("click",function(e){
        handleOperator(e.target.textContent)
        previousscreen.textContent = previousValue + " " + operator;
        currentscreen.textContent = currentValue;
    }))

    clear.addEventListener("click",function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousscreen.textContent = currentValue;
        currentscreen.textContent = currentValue;
    })
    
    equal.addEventListener("click",function(){
                if(currentValue != '' && previousValue != ''){
                calculate()
                previousscreen.textContent = '';
                if(previousValue.length <= 10){
                    currentscreen.textContent = previousValue;
                }else{
                    currentscreen.textContent = previousValue.slice(0,10) + "...";
                }
            }
              
    })
    decimal.addEventListener("click",function(){
        addDecimal();
    })

    Del.addEventListener("click",function(){
        backspace();
    })

})

function handleNumber(num){
    if(currentValue.length <= 10){
       currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';

}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    


    if(operator === "+"){
        previousValue += currentValue;
    }else if(operator === "-"){
        previousValue -= currentValue;
    }else if(operator === "x"){
        previousValue *= currentValue;
    }else{
        previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}


function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}


function backspace(){
    if(currentValue !== ''){
      currentValue = currentValue.substring(0, currentValue.length - 1);
      currentscreen.innerText = currentValue;
    }
  }

