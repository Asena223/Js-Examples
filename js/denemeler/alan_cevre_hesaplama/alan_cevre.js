function dikdortgenAlan(){
    var kkenar=prompt("Kısa kenarı giriniz: ");
    var ukenar=prompt("Uzun kenarı giriniz: ");
    var alan=ukenar*kkenar;
    document.write("Dikdörtgenin alanı: "+alan+"<hr>");
    var cevre=kkenar*2+ukenar*2;
    document.write("Dikdörtgenin çevresi: "+cevre);
}
dikdortgenAlan();
dikdortgenCevre();