let suma = 0;
let i = 1;

do {
    suma += i;
    i++;
} while (i <= 100);

document.getElementById('resultado').innerHTML = `La suma de los números del 1 al 100 es: ${suma}`;
