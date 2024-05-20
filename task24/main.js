//task1 functions
function funk1(username) {
    console.log(`${username} is active now`);
}
funk1("Nurlan");
//task2
function funk2(a, b, c) {
    if (a > b && a > c) {
        console.log(`${a}`);
    } else if (b > a && b > c) {
        console.log(`${b}`);
    }
    else if (c > a && c > b) {
        console.log(`${c}`);
    }
}
funk2(10, 29, 100);
//task3
function funk3(rubl, dollar) {
    var generalMoney = rubl + dollar * 75;
    console.log(`${generalMoney} butun depozitler`);
}
funk3(20, 30);
//task4
function funk4(eded) {
    var onluq = Math.floor(eded / 10);
    var teklik = eded % 10;
    var array1 = ['bir', 'iki', 'uc', 'dord', 'bes', 'alti', 'yeddi', 'sekkiz', 'doqquz'];
    var array2 = ['on', 'iyirmi', 'otuz', 'qirx', 'elli', 'altmis', 'yetmis', 'seksen', 'doxsan']
    if (onluq >= 1 && teklik >= 1) {
        console.log(array2[onluq - 1], array1[teklik - 1]);
    } else if (onluq >= 1 && teklik == 0) {
        console.log(array2[onluq - 1]);
    }
    else {
        console.log(array1[teklik - 1]);
    }
}
funk4(50);
//task5
function min(eded1, eded2) {
    if (eded1 > eded2) {
        console.log(eded2);
    } else {
        console.log(eded1);
    }
}
min(34, 50);
//task6
function funk5(a, b, c) {
    var netice;
    if (c == '+') {
        netice = a + b;
        console.log(netice);
    } else if (c == "*") {
        netice = a * b;
        console.log(netice);
    }
    else if (c == "-") {
        netice = a - b;
        console.log(netice);
    }
    else if (c == "/") {
        netice = a / b;
        console.log(netice);
    }

}
funk5(20, 30, '/');
//task7
function isLucky(eded) {
    a = Math.floor(eded / 100000) % 10;
    b = Math.floor(eded / 10000) % 10;
    c = Math.floor(eded / 1000) % 10;
    d = Math.floor(eded / 100) % 10;
    e = Math.floor(eded / 10) % 10;
    f = eded % 10;
    console.log(a, b, c, d, e, f);
    if ((a + b + c) == (d + e + f)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isLucky(203203);
//task8
function capitalizeWords(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word[0].toUpperCase() + word.substr(1);
    }).join(' ');
}

console.log(capitalizeWords("hello world"));//ai destek map ne ise yariyir?

//task9
function isEven(params) {
    if (params % 2 == 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
isEven(4);

//task10
function isValidNumber(a) {
    a.toString();
    if (a[0] == '+' && a[1]=='7' && a.length == 12){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
isValidNumber('+71234567891');
//task11
function regex(a) {
    a = a + '';
    console.log(a.length); 
}
regex(233432);
//object tasks
//task1
user = {
    ad:'Nurlan',
    soyad : 'Rustemli',
    gender: 'male',
    birthdate:'10.02.2006' 
}

console.log(user.birthdate);
//task2
user.age = 18;
delete user.birthdate;
console.log(user);
//task3

user = {
    ad:'Nurlan',
    soyad : 'Rustemli',
    gender: 'male',
    birthdate:'10.02.2006' ,
    setAge: function (newAge) {
        this.age =newAge;
    }
}
user.setAge(50);
console.log(user);

//task5
