var vize_not=document.getElementById("vize");
        var final_not=document.getElementById("final");
        var hesaplaBtn=document.getElementById("hesapla");
        hesaplaBtn.onclick=islemler;
        function islemler(){
            var vize1=Number(vize_not.value);
            var final1=Number(final_not.value);
            var ortalamaPuani=document.getElementById("ortalama");
            var durumGoster=document.getElementById("durum");
            var ortalamaNot=(vize1*40/100)+(final1*60/100);
            if(ortalamaNot<50){
                ortalamaPuani.innerHTML=ortalamaNot;
                durumGoster.innerHTML="Kaldınız";
            }
            else{
                ortalamaPuani.innerHTML=ortalamaNot;
                durumGoster.innerHTML="Geçtiniz";
            }
        }