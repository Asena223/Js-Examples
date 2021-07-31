function arttir() {
    var sonuc1 = document.getElementById("sonuc");
    sonuc1.value = Number(sonuc1.value) + 1;
    if(sonuc1.value==5){
        sonuc1.value =Number(sonuc1.value)+10;
    }
}
function azalt() {
    var sonuc1 = document.getElementById("sonuc");
    sonuc1.value = Number(sonuc1.value) - 1;
}