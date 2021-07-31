var btn_ = document.getElementById("btn");
btn_.onclick = hesapla;
var sonuc;
function hesapla() {
    var s1 = Number(document.getElementById("sayi1").value);
    var s2 = Number(document.getElementById("sayi2").value);
    var islemler = document.getElementById("islemler").value;

    if (islemler == 'topla')
        sonuc = s1 + s2;

    else if (islemler == 'cikar')
        sonuc = s1 - s2;

    else if (islemler == 'carp')
        sonuc = s1 * s2;

    else
        sonuc = s1 / s2;

    document.getElementById("sonuc").innerHTML = "SONUCU: " + sonuc;

}