let number = prompt("กรอกเลข : ")
let random = Math.floor(Math.random()*10)
document.getElementById("inputnum").innerHTML = number
document.getElementById("random").innerHTML = random

if (number == random) {
    document.getElementById("result").innerHTML = "คุณถูกรางวัล"
}else{
    document.getElementById("result").innerHTML = "คุณไม่ถูกรางวัล"
}

if (number == random) {
    document.getElementById("lucky").style.display = "block"
}else{
    document.getElementById("unlucky").style.display = "block"
}