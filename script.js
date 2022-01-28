
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesncriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");
var cajaTexto = document.querySelector("#input-texto");
var cajaResultado = document.querySelector("#msg");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    cajaResultado.value = Encriptar(cajaTexto.value);
});

botonDesncriptar.addEventListener("click",function(event){
    event.preventDefault();
    cajaResultado.value = Desencriptar(cajaTexto.value);
});

botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    CopiarAlPortapapeles(cajaResultado.value);
});

function Encriptar(texto){
    texto = PrepararTexto(texto)
    texto = texto.replaceAll("e", "enter");
    texto = texto.replaceAll("i", "imes");
    texto = texto.replaceAll("a", "ai");
    texto = texto.replaceAll("o", "ober");
    texto = texto.replaceAll("u", "ufat");
    return texto;
}

function Desencriptar(texto){
    texto = PrepararTexto(texto)
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
    return texto;
}

function PrepararTexto(texto){
    //esta funcion pasa el texto a minuscula y cambia los acentos, para que siempre se pueda usar la aplicacion
    texto = texto.toLowerCase();
    texto = texto.replaceAll("á", "a");
    texto = texto.replaceAll("é", "e");
    texto = texto.replaceAll("í", "i");
    texto = texto.replaceAll("ó", "o");
    texto = texto.replaceAll("ú", "u");
    return texto;
}

function CopiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(function() {
        console.log("el texto " + texto + " fue copiado al portapapeles");
    }, function() {
        console.log("error al intentar copiar al portapapeles");
    });
  }
  