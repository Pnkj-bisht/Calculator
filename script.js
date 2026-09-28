let input = document.querySelector(".input");
let btns = document.querySelectorAll(".button");
let body = document.body;
let string = "";

let arr = Array.from(btns);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

body.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    string = eval(string);
    input.value = string;
  } else if (
    e.key == "+" ||
    e.key == "-" ||
    e.key == "/" ||
    e.key == "*" ||
    e.key == "%"
  ) {
    string += e.key;
    input.value = string;
  } else if(e.key=="Delete"){
    string=''
    input.value=string
  }else if(e.key=="Backspace"){
    string=string.substring(0, string.length-1)
    input.value=string
  } else if(e.key>="0" && e.key<="9"){
    string+=e.key
    input.value=string
  }
});


