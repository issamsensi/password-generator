
function generate(lenght, allowedLowerChrars, allowedUpperChars, allowedNumbers, allowedSymbols){

    pass = "";
    
    pass += allowedLowerChrars ? lowerChrars : "";
    pass += allowedUpperChars ? upperChars : "";
    pass += allowedNumbers ? numbers : "";
    pass += allowedSymbols ? symbols : "";

    if(lenght < 1){
        password = "the lenght of the password must be 1 at least!"
    }else if(pass.length === 0){
        password = "you should select at least one compenent for the password!"
    }else{
    password = "";
        for(let i = 0; i < lenght; i++){
            randomIndex = Math.floor(Math.random() * pass.length);
            password += pass[randomIndex];
        }
    }
    return password;
}

let lowerChrars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = lowerChrars.toUpperCase();
let numbers = "0123456789";
let symbols = "²&é(-è_çà)=+*ù%$£^<>:.!?/}]@|[{#~¬,;'";
let password = "";
let pass = "";
let lenght = document.getElementById("lenght");


let allowedLowerChrars = document.getElementById("lowerChars");
let allowedUpperChars = document.getElementById("upperChars");
let allowedNumbers = document.getElementById("numbers");
let allowedSymbols = document.getElementById("symbols");

let generateBtn = document.querySelector("#generate");
let generated = document.querySelector("#generatedPass");

generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    generated.innerHTML = `Generated Password: <strong>${generate(Number(lenght.value), allowedLowerChrars.checked, allowedUpperChars.checked, allowedNumbers.checked, allowedSymbols.checked)}</strong>`;
})

