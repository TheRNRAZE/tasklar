//task16
console.log("" + 1 + 0);
console.log("" - 1 + 0 - 1);//niye
console.log("true" - false);
console.log(6 / "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);//niye cix olanda cixir toplama olanda yanina elave edir
console.log("4px" - 2 + "px");//bes niye nan verdi
console.log(7 / 0);
console.log("-9" + 5);
console.log("-9" - 5);
console.log(null + 1);
console.log(undefined + 1);
//task17
var a = parseInt(prompt("4reqemli eded daxil edin"));
var b = a % 10;
console.log(b);
var d = Math.floor(a / 10) % 10;
var c = Math.floor(a / 100) % 10;
var e = Math.floor(a / 1000);
console.log(b + c + d + e);
//task18
var firstName = prompt("Adiniz");
var surName = prompt('Soyadiniz');
console.log(`Salam,${surName} ${firstName}`);
// task19
var a = prompt("Qiymeti daxil edin");
var b = a.slice(0, a.indexOf("."));
var c = a.slice(a.indexOf(".") + 1);
console.log(`${b} manat ${c} qqepik`);
//task20
var maasVergili = parseInt(prompt("Emekhaqqinizi daxil edin"));
var maasVergisiz = maasVergili - maasVergili * 13 / 100;
console.log(maasVergisiz);
// task21
var ad = prompt("Adiniz");
var soyad = prompt('Soyadiniz');
var ataAdi = prompt('Ata adiniz');
var ad = ad[0];
var ataAdi = ataAdi[0];
console.log(`${soyad} ${ad}.${ataAdi}`);
// task22
var price = parseInt(prompt("Meblegi daxil edin"));
var percentage = parseInt(prompt("faizi daxil edin"));
var time = parseInt(prompt("muddeti daxil edin"));
var final_price = (price + price * percentage / 100) * time;
console.log(final_price);
//task23
var value = parseInt(prompt("Eded daxil edin"));
console.log(value < 20);
console.log(value >= 10);
console.log(value >= 0 && value <= 10);
//task24
var age = parseInt(prompt("Yasiniz"));
if (age >= 18) {
    alert("Access Granted");
}
else {
    alert("Access Denied");
}
//task25
var numbers = prompt("30 56 70");
var num1 = parseInt(numbers.split(" ")[0]);
var num2 = parseInt(numbers.split(" ")[1]);
var num3 = parseInt(numbers.split(" ")[2]);
if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1) {
    console.log(num2);
}
else if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
    console.log(num1);
}
else if (num3 > num1 && num3 < num2 || num3 > num2 && num3 < num1) {
    console.log(num3);
}
//task26
var leap_year = parseInt(prompt("ili daxil edin"));
if (leap_year % 4 == 0) {
    console.log("uzun ildir");
}
else {
    console.log("uzun il deyil");
}
//task27
let id = prompt('enter product id:');
switch (id) {
    case "1":
        alert('Available 10 pcs.');
        break;
    case "2":
        alert('Available 256 pcs.');
        break;
    case "3":
        alert('Available 53 pcs.');
        break;
    case "4":
        alert('There are 3 available.');
        break;

    default:
        alert ('Out of stock');
        break;
}
//task28
let gender = prompt("Cinsiniz");
if (gender == "qadin") {
    console.log("female");
}
else{
    console.log("male");
}
//task30
let tarix = prompt("Tarixi yazin bu formatda 2009.12.19");
let gun = tarix.split(".")[2];
let ay_nomresi = parseInt(tarix.split(".")[1]);
let il = tarix.split(".")[0];
let aylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]
let ay_adi = aylar[ay_nomresi+1]
console.log(`${gun} ${ay_adi} ${il}`);
