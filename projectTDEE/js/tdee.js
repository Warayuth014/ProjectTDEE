function calculateTDEE() {
    let age = document.getElementById("inputAge").value
    let weight = document.getElementById("inputWeight").value
    let height = document.getElementById("inputHeight").value
    let gender = document.querySelector('input[name="gender"]:checked').value
    let activity = document.getElementById("inputActivity").value
    
    if (age === "" || weight === "" || height === "") {
        document.getElementById("resultday").innerHTML = "กรุณากรอกข้อมูลให้ครบทุกช่อง"
        document.getElementById("resultweek").innerHTML = ""
    } else {
        let bmr = calculateBMR(gender, age, weight, height)
    
        let tdeeday = bmr * activity
        let tdeeweek = bmr * activity * 7
    
        document.getElementById("resultday").innerHTML = "TDEE: " + tdeeday.toFixed(2) + " kcal per day."
        document.getElementById("resultweek").innerHTML = "TDEE: " + tdeeweek.toFixed(2) + " kcal per week."
        }
}
function calculateBMR(gender, age, weight, height) {
    let calculateBMR
  
    if (gender === 'male') {
        calculateBMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
    } else if (gender === 'female') {
        calculateBMR = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
    }
  
    return calculateBMR
}