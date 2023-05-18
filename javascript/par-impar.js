let numero

function ingresarNumero (numero) {
	numero = prompt("Igrese un numero entre 1 y 1000")
	validarNumero(numero)
}

function validarNumero (numero) {
	if (numero >= 1 && numero <= 1000) {
		detectarParOImpar(numero)
	} else {
		alert("El numero no se encuentra dentro del rango")
		ingresarNumero(numero)
	}
}

function detectarParOImpar (numero) {
	if (numero%2 == 0) {
		alert("El numero es par")
	} else {
		alert("El numero es impar")
	}
}

ingresarNumero(numero)
