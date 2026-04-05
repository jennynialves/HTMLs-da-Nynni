
var display = false
document.getElementById("inicio").style.display = "block";
document.getElementById("conteudo").style.display = "none";

function abrir() {
    display = !display
    console.log(display)

    if (display == true) {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
    } else {
        document.getElementById("inicio").style.display = "block";
        document.getElementById("conteudo").style.display = "none";
    }
}
function trocarTema() {
    document.body.classList.toggle("Temaazul");    
    
}  

