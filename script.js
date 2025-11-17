// combining all the functionalities in a single selection function based on the value that is passed into the function
let operandStack = [];
let operatorStack = [];
const peekOperator = operatorStack[operatorStack.length - 1];
const peekOperand = operandStack[operandStack.length - 1];

function selection (id){
    // better use a swtich case instead of set of 'if'myStack
    const clickedBtn = document.getElementById(id);
    const type = clickedBtn.dataset.type;
    const value = clickedBtn.dataset.value;
    switch(type) {
        case "function":
            if(value === "AC"){
                document.querySelector("#display").innerText = "";
                break;
            }
            if(value === "+/-"){
                toggleSign();
                break;
            }
            if(value === "="){
                solve();
                break;
            }
        case "operator":
            // write down all the cases
            if(value === "+"){
                document.querySelector("#display").innerText += value;
                operatorStack.push(value);
                break;
            }
            if(value === "-"){
                document.querySelector("#display").innerText += value;operatorStack.push(value);
                break;
            }
            if(value === "%"){
                document.querySelector("#display").innerText += value;
                operatorStack.push(value);
                break;
            }
            if(value === "*"){
                document.querySelector("#display").innerText += value;
                operatorStack.push(value);
                break;
            }
            if(value === "/"){
                document.querySelector("#display").innerText += value;
                operatorStack.push(value);
                break;
            }
            if(value === "."){
                document.querySelector("#display").innerText += value;
                break;
            }
            break;
        case "number":
            document.querySelector("#display").innerText += value;
            operandStack.push(value);
            break;
        case "decimal":
            document.querySelector("#display").innerText += value;
    }
}
// instead of pushiing the entire expression in the stack
// try to maintain a token array where each token specify its type of token 
// it coould be number or a operator 
function solve(){
    // ---  testing code to check if the operators and elements pushed correctly  --- 
    console.log("this is operand stack");
    for(let i = 0 ; i < operandStack.length ; i++){
        console.log(operandStack[i]);
    }
    console.log("this is operator stack")
    for(let i = 0 ; i < operatorStack.length ; i++){
        console.log(operatorStack[i]);
    }   
}

