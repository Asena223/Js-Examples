const giris=document.querySelector("#giris");
const ekle=document.querySelector("#ekle");
const liste=document.querySelector("#liste");
//querySelector id'si verilen ile eşleşir ve .js alanında kullanılmak üzere yeni bir değişkene atanır
var button=document.getElementById("ekle");
button.onclick=eklemeİslemi;
function eklemeİslemi(){
    let li=document.createElement("li");
    //createElement bellek üzerinde html elementi oluşturmak için kullanılmaktadır
    li.textContent=giris.value;
    //textContent tüm html öğelerinin içeriğini döndürmektedir
    liste.appendChild(li);
    //belirtilen öğe sonuna yeni gelen elemanı eklemekle sorumludur
    giris.value="";
    //giris.value değer girildikten sonra input alanını temizlemektedir.
    giris.focus();
    //focusun odaklanmaya yaradığını okudum fakat kullanmayınca da hiçbir şey değişmedi
}