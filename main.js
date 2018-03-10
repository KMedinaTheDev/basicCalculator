//* build a calculator *\\

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
