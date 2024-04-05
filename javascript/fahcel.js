function toCelsius(value){
    let celsius = (value-32)*5/9
    return celsius.toFixed(2)+" C"
}
function display(elementId, value){
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
}
function toFahrenheit(value){
    let fahrenheit = (9/5*value)+32
    return fahrenheit.toFixed(2)+" F"
}
/*alert(toCelsius(150))
display("celsius",toCelsius(150))
alert(toFahrenheit(150))
//display("fahrenheit",toFahrenheit(150))
document.getElementById("fahrenheit").innerHTML = "<b>"+toFahrenheit(150)+"</b>"*/
function toCelsiusProgram(value1){
    alert(toCelsius(value1))
}
function toFahrenheitProgram(value2){
    alert(toFahrenheit(value2))
}