let outputScreen=document.getElementById("output");
function display(number){
  outputScreen.value+=number;
}

//output screen-operator
function display(operator){
  if (operator == '%') {
    // Check if the previous input was a number
    var previousInput = outputScreen.value.slice(-1);
    if (!isNaN(previousInput)) {
      // Calculate percentage
      outputScreen.value = parseFloat(outputScreen.value) / 100;
    }
  } else {
    // If it's not a percentage, handle it as usual
    outputScreen.value += operator;
  }
}

//clear the output screen
function clearDisplay(){
  outputScreen.value = "";
}

//calculate
function calculate(){
  const expression=outputScreen.value;
  const result=eval(expression);
  outputScreen.value = result;

}

//delete one character from display
function deleteOne() {
  var currentValue = outputScreen.value;
  var newValue = currentValue.slice(0,-1);
  outputScreen.value = newValue;
}
