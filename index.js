const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")
let length = document.getElementById("length-el")
let cpBtn1 = document.getElementById("cp1")
let cpBtn2 = document.getElementById("cp2")

function getRandomChar() {
    let index = Math.floor(Math.random() * characters.length)
    return characters[index]
}
function generateRandomPassword(len) {
    let randomPassword = ""
    for (let i = 0; i < len; i++) {
        randomPassword += getRandomChar()
    }
    return randomPassword
}
function buttonClick(){
    let p1=generateRandomPassword(length.value)
    let p2=generateRandomPassword(length.value)
    passEl1.textContent = p1
    passEl2.textContent = p2
    cpBtn1.addEventListener("click",function(){
        console.log(p1)
})
    cpBtn2.addEventListener("click",function(){
         console.log(p2)
    })

function buttonClick() {
    let p1 = generateRandomPassword(length.value)
    let p2 = generateRandomPassword(length.value)
    passEl1.innerHTML = p1
    passEl2.innerHTML = p2

}
// function to copy password to clipboard from button click
function copyToClipboard1() {
    console.log(passEl1.innerHTML)
    navigator.clipboard.writeText(passEl1.innerHTML)
    alert('Copied: ' + passEl1.innerHTML)
}
function copyToClipboard2() {
    console.log(passEl2.innerHTML)
    navigator.clipboard.writeText(passEl2.innerHTML)
    alert('Copied: ' + passEl2.innerHTML)
}