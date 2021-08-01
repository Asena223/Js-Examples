var tarih=new Date();
var gun=tarih.getDate();
var ay=tarih.getMonth();
var sene=tarih.getFullYear();
var saat=tarih.getHours();
var dakika=tarih.getMinutes();
var saniye=tarih.getSeconds();
document.getElementById("belirt").innerHTML=gun+":"+ay+":"+sene+"<br>"+saat+"."+dakika+"."+saniye;

