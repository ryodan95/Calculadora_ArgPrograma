function sumar () {

    let numero1 = parseFloat(document.querySelector("#numero1").value);
    let numero2 = parseFloat(document.querySelector("#numero2").value);
    let resultado = numero1 + numero2;
    document.querySelector("#resultado").textContent = resultado;

}

function restar () {

    let numero1 = parseFloat(document.querySelector("#numero1").value);
    let numero2 = parseFloat(document.querySelector("#numero2").value);
    let resultado = numero1 - numero2;
    document.querySelector("#resultado").textContent = resultado;
    
}

function multiplicar () {

    let numero1 = parseFloat(document.querySelector("#numero1").value);
    let numero2 = parseFloat(document.querySelector("#numero2").value);
    let resultado = numero1 * numero2;
    document.querySelector("#resultado").textContent = resultado;
    
}

function dividir () {

    let numero1 = parseFloat(document.querySelector("#numero1").value);
    let numero2 = parseFloat(document.querySelector("#numero2").value);
    if (numero2 === 0) {
        document.querySelector("#resultado").textContent = "No se puede dividir por cero"
    }
    else {
        let resultado = numero1 / numero2;
        document.querySelector("#resultado").textContent = resultado;
    }
    
    
}