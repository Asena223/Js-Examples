var arkaPlan = document.querySelector("#arkaPlan");
var btn = document.getElementById("krmz");
btn.onclick = kirmiziYap;

var btn2 = document.getElementById("sari");
btn2.onclick = sariYap;

var btn3 = document.getElementById("yesil");
btn3.onclick = yesilYap;

var btn4 = document.getElementById("mavi");
btn4.onclick = maviYap;
var renkler = ["yellow", "red", "green", "blue", "black"];
function kirmiziYap() {
    document.body.style.background = renkler[1];
}
function maviYap() {
    document.body.style.background = renkler[3];
}
function sariYap() {
    document.body.style.background = renkler[0];
}
function yesilYap() {
    document.body.style.background = renkler[2];
}