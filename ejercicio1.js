function miCallback(resultado) {
    console.log(`El resultado de la suma es ${resultado}`);
}

function suma(a, b, callback) {
    let c = a + b;
    callback(c);
}

suma(5, 3, miCallback);