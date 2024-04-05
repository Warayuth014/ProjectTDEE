let sco = prompt("คะแนนของคุณ")
if(sco >= 80){
    document.getElementById("result").innerHTML = "เกรด A"
}else if(sco >= 70){
    document.getElementById("result").innerHTML = "เกรด B"
}else if(sco >= 60){
    document.getElementById("result").innerHTML = "เกรด C"
}else if(sco >= 50){
    document.getElementById("result").innerHTML = "เกรด D"
}else{
    document.getElementById("result").innerHTML = "เกรด F"
}