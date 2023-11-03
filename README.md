Clase 2 - Ejercitación
Ejercicio 1
Tengo desarrollada la siguiente función en javascript
function suma (a,b,callback){
let c = a +b;
callback( );
}
¿Que es el tercer parámetro recibido?

El tercer parámetro es un callback
Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la función principal haya terminado su trabajo.
En este caso, se hace el llamado una vez que la suma a + b se ejecute.

¿En que casos es obligatorio desarrollar este tipo de funciones?
Se puede usar cuando se ejecutan operaciones asincronas. o llamados a una api. Tambien como temporizadores o intervalos de tiempo.

Realizar un llamado a la función de ejemplo.



Ejercicio 2
Desarrollador una calculadora que tenga:
● 2 campos inputs para los operadnos
● 4 botones de operadores básicos (suma, resta, multiplicación, división)
Al realizar la cuenta se deberá actualizar el campo resultado
1
