var btn_=document.getElementById("btn");
btn_.onclick=hesapla;

function hesapla() {
var yenideger;
yenideger=Number(yenideger);
 var birinci=Number(document.getElementById("sayi1").value);
 var ikinci=Number(document.getElementById("sayi2").value);
 var i=0;
 document.write(birinci+","+ikinci+",");
 while(i<=10) {
    yenideger=birinci+ikinci;
    birinci=ikinci;
    ikinci=yenideger;
    document.write(yenideger+",")
    i++;
 }
}
