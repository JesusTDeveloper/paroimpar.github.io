/**
 * Evento que se dispara cuando el DOM ha cargado completamente.
 * Define las funciones y variables necesarias para el funcionamiento del programa.
 */
document.addEventListener("DOMContentLoaded", function() {
	const inputContenedor = document.getElementById("input-contenedor");
	const outputContenedor = document.getElementById("output-contenedor");
	let numeroInput;
  
	/**
	 * Imprime la interfaz de entrada en el contenedor de entrada.
	 * Asigna el elemento de entrada a la variable numeroInput.
	 */
	function imprimirInput() {
	  const sectionInput = `
		<h1>Ingresa un numero entre 1 y 1000</h1>
		<section>
		  <input type="text" id="numero-input" placeholder="Ingresa aquí..">
		  <button onclick="ingresarNumero()">Enter</button>
		</section>
	  `;
	  inputContenedor.innerHTML = sectionInput;
	  numeroInput = document.getElementById("numero-input");
	}
  
	/**
	 * Función llamada cuando se hace clic en el botón "Enter".
	 * Obtiene el número ingresado, lo convierte a entero y llama a la función validarNumero.
	 */
	window.ingresarNumero = function() {
	  const numero = parseInt(numeroInput.value);
	  validarNumero(numero);
	};
  
	/**
	 * Valida si el número ingresado es un número válido.
	 * Si es válido, llama a la función validarRango, de lo contrario muestra un mensaje de error.
	 */
	function validarNumero(numero) {
	  if (!isNaN(numero)) {
		validarRango(numero);
	  } else {
		alert("Error: debe ingresar un número");
	  }
	}
  
	/**
	 * Valida si el número ingresado está dentro del rango válido (1 a 1000).
	 * Si está dentro del rango, llama a la función detectarParOImpar, de lo contrario muestra un mensaje de error y vuelve a imprimir la interfaz de entrada.
	 */
	function validarRango(numero) {
	  if (numero >= 1 && numero <= 1000) {
		detectarParOImpar(numero);
	  } else {
		alert("Error: número fuera de rango");
		imprimirInput();
	  }
	}
  
	/**
	 * Detecta si el número es par o impar.
	 * Oculta el contenedor de entrada, define el resultado y llama a la función imprimirOutput.
	 */
	function detectarParOImpar(numero) {
	  let resultado;
	  if (numero % 2 === 0) {
		inputContenedor.style.display = "none";
		resultado = "par";
		imprimirOutput(numero, resultado);
	  } else {
		inputContenedor.style.display = "none";
		resultado = "impar";
		imprimirOutput(numero, resultado);
	  }
	}
  
	/**
	 * Imprime la interfaz de salida en el contenedor de salida.
	 * Muestra el número y el resultado (par o impar).
	 * Proporciona un botón para reiniciar el programa.
	 */
	function imprimirOutput(numero, resultado) {
	  const sectionOutput = `
		<section>
		  <h1>El número ${numero} es ${resultado}</h1>
		  <h4>¿Quieres ingresar otro número?</h4>
		  <button onclick="reiniciar()" id="boton-reiniciar">Reiniciar</button>
		</section>
	  `;
	  outputContenedor.innerHTML = sectionOutput;
	}
  
	/**
	 * Función llamada cuando se hace clic en el botón "Reiniciar".
	 * Recarga la página para reiniciar el programa.
	 */
	window.reiniciar = function() {
	  location.reload();
	};
  
	// Evento que se dispara cuando la página ha cargado completamente.
	// Llama a la función imprimirInput para comenzar el programa.
	window.addEventListener("load", imprimirInput);
  });
  