const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
                    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
                    "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];






let randomPassword1 = document.getElementById("passbox1");
let randomPassword2 = document.getElementById("passbox2");


function generatePassword1() {
    let password = "";
    let lengthInput = Math.min(Number(document.getElementById("passwordLength").value), 20);
    for (let i=0; i<lengthInput;i++){
       let randomMath= Math.floor(Math.random() * characters.length);
        password += characters[randomMath];
        randomPassword1.textContent = password
    }
}

function generatePassword2() {
    let password = "";
    let lengthInput = Math.min(Number(document.getElementById("passwordLength").value), 20);
    for (let i=0; i<lengthInput;i++){
       let randomMath= Math.floor(Math.random() * characters.length);
        password += characters[randomMath];
        randomPassword2.textContent = password
    }
}
