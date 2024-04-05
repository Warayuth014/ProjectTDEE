let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?")
var score = 0
for(i=1; i<=round; i++){
    var answer = prompt("หัว หรือ ก้อย")
    var random_answer = ""
    if(Math.floor(Math.random()*10) <= 4){
        random_answer = "หัว"
    }else{
        random_answer = "ก้อย"
    }
    if(answer == random_answer){
        score += 1
        alert("คุณตอบถูกต้อง")
    }else{
        alert("ตอบผิด")
    }
    console.log(random_answer+" : "+answer)
    if(answer == random_answer){
        document.getElementById("game-list").innerHTML += "รอบที่ " +i+" ที่ผู้ใช้งานกรอก "+answer+" : "+"คำตอบที่ถูกต้อง "+random_answer+" คุณชนะ"+"<br>"
    }else{
        document.getElementById("game-list").innerHTML += "รอบที่ " +i+" ที่ผู้ใช้งานกรอก "+answer+" : "+"คำตอบที่ถูกต้อง "+random_answer+"   คุณแพ้"+"<br>"
    }
}
document.getElementById("score").innerHTML = "คะแนนรวม "+score+" คะแนน"
document.getElementById("round").innerHTML = "เล่นทั้งหมด "+round+" รอบ"