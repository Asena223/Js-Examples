var sayiNesne=document.getElementById("sayi");
var hesaplaBtn=document.getElementById("hesapla");
 
hesaplaBtn.onclick=islem;
function islem(){
    var sayi=Number(sayiNesne.value);
    var durumGoster=document.getElementById("durumGoster");
    if(sayi<0){
        durumGoster.innerHTML="SAYI NEGATİFTİR.";
    }
    else if(sayi>0){
        durumGoster.innerHTML="SAYI POZİTİFTİR.";
    }
    else{
        durumGoster.innerHTML="SAYI 0' a EŞİTTİR.";
    }
}