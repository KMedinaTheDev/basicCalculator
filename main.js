//* build a calculator *\\

//What Can the User Do?

//the User can enter 2 numbers (2 inputs)  and click 1 of 4 buttons(operators)

//What does the User expect?
  //the User expects a result after entering num1 (operator) num2
//What does the User see?
  //the user sees two input fields
  //the user sees operator buttons (4)-user expects operation
  //the user sees a result (or answer) after they pick two numbers and either add, subtract, divide, or multiply

alert(">--Don't Sweat Math!---> Simply enter a number in each input field and choose your operator!");
document.getElementById("divide").onclick=divide;
document.getElementById("multiply").onclick=multiply;
document.getElementById("sub").onclick=sub;
document.getElementById("add").onclick=add;
document.getElementById("clear").onclick=clear;

function add(){
//get values out of inputs
  var num1= parseFloat(document.getElementById("firstNum").value)
  var num2= parseFloat(document.getElementById("secondNum").value)
  //do the math
  var sum= num1+num2
  //display result
  document.getElementById("answer").innerHTML=sum

}

function sub(){
  var num1= parseFloat(document.getElementById("firstNum").value)
  var num2= parseFloat(document.getElementById("secondNum").value)
  var sum= num1 - num2
  document.getElementById("answer").innerHTML=sum

}

function divide(){
  var num1= parseFloat(document.getElementById("firstNum").value)
  var num2= parseFloat(document.getElementById("secondNum").value)
  var sum= num1 / num2
  document.getElementById("answer").innerHTML=sum

}

function multiply(){
  var num1= parseFloat(document.getElementById("firstNum").value)
  var num2= parseFloat(document.getElementById("secondNum").value)
  var sum= num1 * num2
  document.getElementById("answer").innerHTML=sum

}
function clear(){

  document.getElementById("firstNum").value=""
  document.getElementById("secondNum").value=""
  document.getElementById("answer").innerHTML=""
}
