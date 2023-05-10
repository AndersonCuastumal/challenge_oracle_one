var msgOriginal=document.querySelector("textarea#input-text");
var msgResultado=document.querySelector("span.action-text");
var msgModificado="";

var btnEncriptar=document.querySelector("button#codificar");
var btnDesencriptar=document.querySelector("button#decodificar");

var btnCopyText=document.querySelector("button.copy-text");


btnCopyText.style.display="none";


btnEncriptar.onclick=encriptar;
btnDesencriptar.onclick=desencriptar;
btnCopyText.onclick=copiaTexto;




function encriptar(){
    var paragraph=msgOriginal.value.trim();
    if(paragraph!=null || paragraph!=undefined || paragraph!=""){
        msgModificado=replaceVowelsAscendent(paragraph)
        cleanSection();
        mostrarMensaje("span.action-text",msgModificado);
        alert(msgModificado);
        console.log(paragraph)
        btnCopyText.style.display = "block";
        

    }else{
        alert("There is not msg for encoding");
    }
}

function desencriptar(){
    var paragraph=msgOriginal.value.trim();
    if(paragraph!=null || paragraph!=undefined || paragraph!=""){
        msgModificado=replaceVowelsDesendent(paragraph)
        cleanSection();
        mostrarMensaje("span.action-text",msgModificado);
        alert(msgModificado);
        console.log(paragraph);
        btnCopyText.style.display = "block";
        

    }else{
        alert("There is not msg for encoding");
    }
}


// Metodo de codificacion
function replaceVowelsAscendent(msg){
    msg=msg.replaceAll("e","enter");
    msg=msg.replaceAll("i","imes");
    msg=msg.replaceAll("a","ai");
    msg=msg.replaceAll("o","ober");
    msg=msg.replaceAll("u","ufat");

    return msg;

}

// metodo decodificacion
function replaceVowelsDesendent(msg){
    msg=msg.replaceAll("ufat","u");
    msg=msg.replaceAll("ober","o");
    msg=msg.replaceAll("ai","a");
    msg=msg.replaceAll("imes","i");
    msg=msg.replaceAll("enter","e");
    return msg;

}


function mostrarMensaje(elemId,texto){
    
    var textoMostrar=document.querySelector(elemId);
    
    textoMostrar.textContent=texto;
    
}


function copiaTexto(){

    // Crear un campo de entrada de texto temporal
    const tempInput=document.createElement("input");
    tempInput.value=msgResultado.textContent;
   

    // Agregar el campo temporal al DOM
    document.body.appendChild(tempInput);

    // Seleccionar el contenido del campo temporal
    tempInput.select();

    // Copiar el contenido al portapapeles
    document.execCommand('copy');

    // Eliminar el campo temporal del DOM
    document.body.removeChild(tempInput);

    // Mostrar mensaje de éxito
    alert("Texto copiado al portapapeles");
}



function cleanSection(){
    
    var elementosArray =[".show-text-muneco",".result-text"];

    // Iterar sobre los elementos y eliminarlos uno por uno
    elementosArray.forEach(function(elemento) {
        if(document.querySelector(elemento)){
            document.querySelector(elemento).remove();
        }
        
    });
}

