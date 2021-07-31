var yas_deger=document.getElementById("yas_gir");
    var yas_deger2=Number(yas_deger.value);
    var kontrolEt=document.getElementById("gonder");
    kontrolEt.onclick=kontrol;
    function kontrol(){
        if(yas_deger2<18){
            document.getElementById("durum").innerHTML="GEÇEMEZSİNİZ";
        }
        else if(yas_deger2>18){
            document.getElementById("durum").innerHTML="GEÇ";
        }
        else{
            document.getElementById("durum").innerHTML="DÜŞÜNECEĞİZ";
        }
    }