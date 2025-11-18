// combining all the functionalities in a single selection function based on the value that is passed into the function
let operandStack = [];
let operatorStack = [];
let tokenSequence = 0;
let lastActionWasOperator = false; // Track if last action was an operator
function selection (id){
    // better use a swtich case instead of set of 'if'myStack
    const clickedBtn = document.getElementById(id);
    const type = clickedBtn.dataset.type;
    const value = clickedBtn.dataset.value;
    switch(type) {
        case "function":
            if(value === "AC"){
               document.querySelector("#display").innerText = "";
               tokenSequence = 0;
               operandStack = [];
               operatorStack = [];
               lastActionWasOperator = false; // Reset flag
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
            break;
        case "operator":
            // write down all the cases
            if(value === "+"){
                operatorStack.push({
                    type : "operator",
                    val : value,
                    tokenS : tokenSequence
                });
                tokenSequence++;
                lastActionWasOperator = true; // Set flag
                display(value);
                break;
            }
            if(value === "-"){
               operatorStack.push({
                    type : "operator",
                    val : value,
                    tokenS : tokenSequence
                });
                tokenSequence++;
                lastActionWasOperator = true; // Set flag
                display(value);
                break;
            }
            if(value === "%"){
                operatorStack.push({
                    type : "operator",
                    val : value,
                    tokenS : tokenSequence
                });
                tokenSequence++;
                lastActionWasOperator = true; // Set flag
                display(value)
                break;
            }
            if(value === "*"){
                operatorStack.push({
                    type : "operator",
                    val : value,
                    tokenS : tokenSequence
                });
                tokenSequence++;
                lastActionWasOperator = true; // Set flag
                display(value)
                break;
            }
            if(value === "/"){
                operatorStack.push({
                    type : "operator",
                    val : value,
                    tokenS : tokenSequence
                });
                tokenSequence++;
                lastActionWasOperator = true; // Set flag
                display(value)
                break;
            }
            if(value === "."){ // somehow add this to numbers to create decimal numbers
                display(value);
                break;
            }
            break;
        case "number":
           const digit = value 
           const last = operandStack[operandStack.length - 1];
           // If last action was an operator, start a fresh number token
           if(last && !lastActionWasOperator){
            last.val = last.val + digit;
           }
           else{
            operandStack.push({
                type : "number",
                val : digit,
                tokenS : tokenSequence++
            })
           }
           lastActionWasOperator = false; // Reset flag after number entry
           display(digit);
           break;
    const peekOperator = operatorStack[operatorStack.length - 1];
    const peekOperand = operandStack[operandStack.length - 1];
    }
}
// instead of pushiing the entire expression in the stack
// try to maintain a token array where each token specify its type of token 
// it coould be number or a operator 
function display(val){
    document.querySelector("#display").innerText += val;
}
function equal_display(val){
    document.querySelector("#display").innerText = val;
}
function solve(){
    // ---  testing code start ---
    console.log("this is operand stack");
    for(let i = 0 ; i < operandStack.length ; i++){
        console.log(operandStack[i]);
    }
    console.log("this is operator stack")
    for(let i = 0 ; i < operatorStack.length ; i++){
        console.log(operatorStack[i]);
    }   
    // --- testing code end ----
    for(let i = 0; i < operandStack.length - 1; i++){
        let res = 0;
        const Op = operatorStack[operatorStack.length - 1];
        // console.log(Op.val); // testing code 
        switch(Op.val){
            case "+":
                let obj1 = operandStack.pop();
                let num1 = parseInt(obj1.val);
                // console.log((num1)); // testing code 
                let obj2 = operandStack.pop();
                let num2 = parseInt(obj2.val);
                operatorStack.pop()
                res = num1 + num2;
                operandStack.push({
                    type : "number",
                    val : res,
                    tokenSequence : tokenSequence + 1
                });
                equal_display(res);
                console.log(operandStack);
                break;
        }
        }
    }


