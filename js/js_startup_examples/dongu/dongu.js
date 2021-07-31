var dongu=Number(10);
      var toplam=0;
      var ortalama=0;
      for(var i=1;i<=dongu;i++){
          var yas=Number(prompt("Yaşınızı giriniz: "));
          toplam=Number(toplam)+yas;
          var ortalama=Number(ortalama);
          ortalama=toplam/10;
          
      }
      alert("10 KİŞİNİN YAŞLARI TOPLAMI: "+toplam+"\n"+"10 KİŞİNİN YAŞLARI ORTALAMASI: "+ ortalama);
      