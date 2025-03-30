const display = document.querySelector(".password-generator-display");
const lengthInp = document.querySelector("input[type='range']");
const easySell = document.querySelector("#easy");
const mediumSell = document.querySelector("#medium");
const hardSell = document.querySelector("#hard");
const uppercaseSwitch = document.querySelector("#uppercase");
const symbolsSwitch = document.querySelector("#symbols");
const numbersSwitch = document.querySelector("#numbers");
const generateBtn = document.querySelector("#generate");

let charset = "abcdefghijklmnopqrstuvwxyz";
let password = "";
let upperChars = "ABCDEFJHIKKLMNOPQRSTUVWXYZ";
let symbolsChars = "!@#$%^&*(){}[]\|/;:><,.?=-+_~";
let numberChars = "0123456789";

function generatePassword(){
    let password_length = lengthInp.value;
    password = '';
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if(uppercaseSwitch.checked){
        charset += upperChars;
    }
    if(symbolsSwitch.checked){
        charset += symbolsChars;
    }
    if(numbersSwitch.checked){
        charset += numberChars;
    }

    for(let i=0;i < password_length; i++){
        password += charset[Math.floor(Math.random() * charset.length)];
    }


    if(password_length < 8){
        easySell.style.background = "red";
        mediumSell.style.background = "none";
        hardSell.style.background = "none";
    }else if(password_length > 8 && password_length < 14){
        easySell.style.background = "orange";
        mediumSell.style.background = "orange";
        hardSell.style.background = "none";
    }else if(password_length > 14){
        easySell.style.background = "green";
        mediumSell.style.background = "green";        
        hardSell.style.background = "green";
    }

    display.innerHTML = password;
}

generateBtn.addEventListener("click",generatePassword)