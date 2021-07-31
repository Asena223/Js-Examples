
    var sayilar = new Array(20); //rastgele dizi içerisinde 20 tane sayı üretir.
    var min, max;
    
    for (var i = 0; i < sayilar.length; i++) {
        sayilar[i] = Math.floor(Math.random() * 100);
    }
//başlangıçta en küçük değeri de en büyük değeri de 1. eleman olarak belirliyoruz.
    min = sayilar[0];
    max = sayilar[0];


//min değer için liste boyutu kadar ilerleyip karşılaştırdığımız indexteki küçükse onu min olarak atıyoruz
//max değer için liste boyutu kadar ilerleyip karşılaştırdığımız indexteki büyükse onu max olarak atıyoruz
for (var i = 0; i < sayilar.length; i++) {
        /*min dizideki değerden büyükse mini dizideki ile değiştiriyoruz.*/
        if (min > sayilar[i]) {
            min = sayilar[i];
        }
        /*mak dizideki değerden küçükse makı dizideki değer ile değiştiriyoruz.*/
        if (max < sayilar[i]) {
            max = sayilar[i];
        }
    }

    /*ekran çıktısı*/
    document.write("<hr>" + "<br>");
    for (var i = 0; i < sayilar.length; i++) {
        document.write(sayilar[i] + "<br>");
    }
    document.write("<hr>" + "<br>");
    document.write("Dizi içindeki en büyük sayı: " + max + "<br>");
    document.write("Dizi içindeki en küçük sayı: " + min + "<br>");