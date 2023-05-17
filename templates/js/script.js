var msgOriginal=document.querySelector("textarea#input-text");
var msgResultado=document.querySelector("div.show-text-msg>span");


var btnEncriptar=document.querySelector("button#codificar");
var btnDesencriptar=document.querySelector("button#decodificar");

var btnCopyText=document.querySelector("button.copy-text");


btnCopyText.style.display="none";
document.querySelector("div.show-text-msg").style.display="none";


btnEncriptar.onclick=encriptar;
btnDesencriptar.onclick=desencriptar;
btnCopyText.onclick=copiaTexto;




function encriptar(){
    var paragraph=msgOriginal.value.toLowerCase().trim();
    var msgModificado="";
    if(paragraph!=""){
        msgModificado=replaceVowelsAscendent(paragraph)
        cleanSection();
        mostrarMensaje("div.show-text-msg>span",msgModificado);
        msgOriginal.value="";
        //alert(msgModificado);
        console.log("MSG Original: "+paragraph)
        console.log("MSG Encriptado: "+msgModificado)
               

    }else{
        // Agregar MSG alert vacio en DOM
        showEmptySection();
        
        alert("Ingresar texto a Encriptar, por favor!");
    }
}

function desencriptar(){
    var paragraph=msgOriginal.value.toLowerCase().trim();
    var msgModificado="";
    if(paragraph!=""){
        msgModificado=replaceVowelsDesendent(paragraph)
        cleanSection();
        mostrarMensaje("div.show-text-msg>span",msgModificado);
        msgOriginal.value="";
        //alert(msgModificado);
        console.log("MSG Original: "+paragraph)
        console.log("MSG Desencriptado: "+msgModificado)
               

    }else{

        // Agregar MSG alert vacio en DOM
        showEmptySection();
        
        alert("Ingresar texto a Desencriptar, por favor!");
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

    msgResultado.textContent="";
    // Mostrar mensaje de éxito
    //alert("¡Texto copiado!");
}



function cleanSection(){
    
    var elementosArray =[".show-text-muneco",".result-text",".action-text","div.show-text-imprimir"];

    // Iterar sobre los elementos y eliminarlos uno por uno
    elementosArray.forEach(function(elemento) {
        if(document.querySelector(elemento)){
            document.querySelector(elemento).style.display="none";
        }
        
    });
    btnCopyText.style.display = "block";
    document.querySelector("div.show-text-msg").style.display="block";
}

function showEmptySection(){
    
    var elementosArray =[".show-text-muneco",".result-text",".action-text","div.show-text-imprimir"];

    // Iterar sobre los elementos y eliminarlos uno por uno
    elementosArray.forEach(function(elemento) {
        if(document.querySelector(elemento)){
            document.querySelector(elemento).style.display = "block";
        }
        
    });
    btnCopyText.style.display = "none";
    document.querySelector("div.show-text-msg").style.display="none";

}

