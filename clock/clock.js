let myName = prompt("İsminizi giriniz: ");
//İsminizin ilk harfi büyük yapılır.
document.querySelector("#myName").innerHTML = myName.charAt(0).toUpperCase() + myName.slice(1);

function clock () {
    const today = new Date();
    let day = today.getDay()-1;
    let daysArray = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
    let dayName = daysArray[day];
    let date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + (today.getDay()-1) + "." +
    (today.getMonth()+1) +"."+ today.getFullYear() + " " + dayName;
    document.querySelector("#myClock").innerHTML = date;
    setInterval(clock, 1000);
}
clock();





