let vec = [];
let prom = 0;
function comprobarCodigo() {
    let textoUsuario = parseInt(document.getElementById("escoja").value);
    let parrafoResultado = document.getElementById("resultado");
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    let button = document.getElementById("button")
    let may = -999
    let men = 999
    let suma = 0;
    if (isNaN(textoUsuario)) {
        parrafoResultado.textContent = "Por favor escribe un numero valido.";
        document.getElementById("escoja").value="";
        return;
    }
    vec.push(textoUsuario);
    parrafoResultado.textContent = vec ;
    document.getElementById("escoja").value="";

    if (vec.length >= 5) {
        button.disabled = true;
        button.style.cursor = "none";
        button.style.backgroundColor = "#5f5f5f";
        for (let i = 0; i < vec.length; i++) {
            if (vec[i] > may){
            may = vec[i];
            }
            if (vec[i] < men){
            men = vec[i];
            }
            suma = suma + vec[i];
        }
        prom=suma/5;
        a.textContent = "el numero mayor es " + may ;
        b.textContent = "el numero menor es " + men ;
        c.textContent = "el promedio es " +prom ;
        return;
    }
}