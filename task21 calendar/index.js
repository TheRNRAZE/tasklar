const curDate = new Date();
let hourTime  = curDate.getHours();


console.log(hourTime);
if (hourTime<=11 && hourTime>=5){
    console.log("Sabahiniz Xeyir");
}
else if(hourTime<=17 && hourTime>=12){
    console.log("Her vaxtiniz Xeyir");
}
else{
    console.log("Axsaminiz xeyir");
}