function carpma(sayi1, sayi2){
    var carpma=sayi2*sayi1;
    document.write("ÇARPMA SONUCU:"+carpma+"<br>");
}
function toplama(deger1,deger2){
    var toplam=deger1+deger2;
    document.write("TOPLAMLARI: "+toplam);
}
function cikarma(){
    var sayi1=prompt("sayi 1: ");
    var sayi2=prompt("sayi 2: ");
    var fark=sayi1-sayi2;
    alert("FARKALARI: "+fark);
}
carpma(12,12);
toplama(43,32);
cikarma();
