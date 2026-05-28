let vec = [];
let prom = 0;
function comprobarCodigo() {
    let textoUsuario = parseInt(document.getElementById("escoja").value);
    let pipi = document.getElementById("escoja");
    let parrafoResultado = document.getElementById("resultado");
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    let button = document.getElementById("button")
    let may = -999
    let men = 999
    let suma = 0;
    let acum = 0;
    let porc = 0;
    let posi = vec.length + 1;
    if (isNaN(textoUsuario)) {
        parrafoResultado.textContent = "Por favor escribe un numero valido.";
        document.getElementById("escoja").value="";
        return;
    }
    vec.push(textoUsuario);
    parrafoResultado.textContent = "[" + vec + "]" ;
    document.getElementById("escoja").value="";
    pipi.placeholder = "escoja el numero de la pocision " + (posi + 1)

    if (vec.length >= 5) {
        button.disabled = true;
        button.style.cursor = "none";
        button.style.backgroundColor = "#5f5f5f";
        pipi.placeholder = "finalizado";
        pipi.disabled = true;
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
        for (let i = 0; i < vec.length; i++) {
            if (vec[i] > prom) {
                acum += 1;
            }
        }
        porc = acum/5*100;
        a.textContent = "el numero mayor es " + may ;
        b.textContent = "el numero menor es " + men ;
        c.textContent = "el promedio es " + prom ;
        d.textContent = "porcentaje de mayores a el promedio es: " + porc + "%";
        return;
    }
}