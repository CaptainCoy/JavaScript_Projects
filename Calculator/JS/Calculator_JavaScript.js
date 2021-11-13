// object that keeps track of values
const Calculator = {
    // displays 0 on screen
    Display_Value: '0',
    // this wil hold the first operand for any expressions
    First_Operand: null,
    // this checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    // this will hold the operator
    operator: null,
};

// this modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // checking to see if Wait_Second_Operand is true and set
    // Display_Value to the key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // overwrites Display_Value
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// this section handles decimals
function Input_Decimal(dot) {
    //this ensures that accidental decimal click doesn't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// this section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //converts current number when operator key is pressed
    const Value_of_Input = parseFloat (Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
    }
}