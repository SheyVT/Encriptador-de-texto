function encriptar() {
  let cajatext = document.getElementById("cajatext").value;
  let mensaje = document.getElementById("mensaje");
  let parrafo = document.getElementById("parrafo");
  let personaje = document.getElementById("personaje");

  
  // Verifica si el texto cumple con los requisitos
  if (/[A-ZáéíóúÁÉÍÓÚ]/.test(cajatext)) {
    swal("Ooops!", "Solo se permiten letras minúsculas y sin acentos.", "warning");
    return;
  }
  let textoCifrado = cajatext
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (cajatext.length != 0) { // Cambiado de texto.length a cajatext.length
    document.getElementById("cajatext").value = textoCifrado;
    mensaje.textContent = "El texto ha encriptado exitosamente";
    parrafo.textContent = "";
    personaje.src = "./imagenes/aprobado.png";
  } else {
    personaje.src = "./imagenes/munecco.svg"; // Cambiado de /imagenes/Muñeco.svg a ./imagenes/Muñeco.svg
    mensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto para encriptar", "warning");
  }
}

function desencriptar() {
  let cajatext = document.getElementById("cajatext").value;
  let mensaje = document.getElementById("mensaje");
  let parrafo = document.getElementById("parrafo");
  let personaje = document.getElementById("personaje");
  
   // Verifica si el texto cumple con los requisitos
   if (/[A-ZáéíóúÁÉÍÓÚ]/.test(cajatext)) {
    swal("Ooops!", "Solo se permiten letras minúsculas y sin acentos.", "warning");
    return;
  }
  let textoCifrado = cajatext
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
  if (cajatext.length != 0) { // Cambiado de texto.length a cajatext.length
    document.getElementById("cajatext").value = textoCifrado;
    mensaje.textContent = "El texto ha desencriptado exitosamente";
    parrafo.textContent = "";
    personaje.src = "./imagenes/aprobado.png"; // Cambiado de muñeco.src a personaje.src
  } else {
    personaje.src = "./imagenes/muneco.svg";
    mensaje.textContent = "Ningún mensaje fue encontrado.";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto para desencriptar.", "warning");
  }
}

function copiarTexto() {
  var cajatext = document.getElementById("cajatext");
  
  if (cajatext.value.length !== 0) {
      cajatext.select();
      document.execCommand("copy");
      swal("¡Copiado!", "El texto se ha copiado al portapapeles", "success");
  } else {
      swal("Ooops!", "No hay texto para copiar.", "warning");
  }
}
