"use strict"

var buttons = document.getElementsByClassName("buttons");
var answer = document.getElementById("ans");

var operand1 = "";
var operand2 = "";
var active = 1;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute("data-value");
        console.log("operand1 : " + operand1);
        if (value <= 9) {
            if (active == 1) {
                operand1 += value;
                answer.innerText = operand1;
            } else {
                operand2 += value;
                answer.innerText = operand2;
            }
        } else {
            if(value==="AC"){
                operand1 = "";
                operand2 = "";
                active = 1;
                answer.innerText = "0";
                return;
            }
            if (value==="=") {
                var display = eval(operand1 + operand2);
                answer.innerText = display;
                operand1 = display;
                operand2 = "";
                active = 1;
            } else {
                if(operand1!=""&&operand2!=""){
                    return;
                }
                if(operand1==""){
                    answer.innerText = "Enter Number First";
                }else{
                    answer.innerText = value;
                    operand1 += value;
                    active = 2;
                }
            }
        }
    });
}