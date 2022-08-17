const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passEl1=document.getElementById("pass1")

function getRandomChar(){
    let index= Math.floor( Math.random()*characters.length )
    return characters[index]
}
function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i<8; i++) {
        randomPassword += getRandomChar()         
    }
    return randomPassword
}

let passEl2=document.getElementById("pass2")
function getRandomChar(){
    let index= Math.floor( Math.random()*characters.length )
    return characters[index]
}
function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i<8; i++) {
        randomPassword += getRandomChar()         
    }
    return randomPassword
}
function buttonClick(){
    passEl1.textContent = generateRandomPassword()
    passEl2.textContent = generateRandomPassword()
}