var btn=document.getElementById("bul");
btn.onclick=bul;
function bul(){
    const deger=Number(document.querySelector("#sayi").value);
    var kalan;
    var yenideger=deger;
    var basamak=deger.toString().length;
    document.write("Sayı: "+yenideger+"-"+"Basamak Sayısı: "+basamak+"<br>");
        while(basamak>0){
        kalan=yenideger%10;
        var yenideger=Math.floor(yenideger/10);
        document.write("Kalan:"+kalan+"-"+"Yeni Değer:"+yenideger+"<br>");
        basamak--;
    }
 }