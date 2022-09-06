let name = prompt("Adınızı giriniz:");

let myName = document.querySelector("#myName");

myName.innerHTML = ` ${myName.innerHTML} ${name}`

function date() {

    let momentary = new Date()
    let saat = momentary.getHours()
    let dakika = momentary.getMinutes()
    let saniye = momentary.getSeconds()
    let date = new Date()
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let omeradan = document.querySelector("#myClock")
    omeradan.innerHTML = saat + ":" + dakika + ":" + saniye + " " + days[date.getDay()]

}

setInterval(date,100)
    
