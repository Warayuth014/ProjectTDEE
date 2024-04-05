let qrt = prompt("จำนวนสินค้า")
let totalprice = 0
for(i = 1; i <= qrt; i++){
    let itemprice = prompt("ราคาสินค้า " + i)
    totalprice += parseInt(itemprice)
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ "+i+" "+ itemprice + " บาท"+"<br>"
}
document.getElementById("result").innerHTML = "ราคารวม " + totalprice + " บาท"