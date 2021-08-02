var btn=document.getElementById("hesapla");
btn.onclick=Cevir;
function Cevir(){
    var deger=document.getElementById("giris");
    deger=Number(deger.value);
    metre=Math.floor(deger/1000);
    var cm=deger%1000;
    document.getElementById("sonuc").innerHTML=metre+" metre "+cm+" santimetre' dir.";
}