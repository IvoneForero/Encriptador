//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    let palabra = document.querySelector(".areaTexto").value;
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    let nuevaPalabra = "";
    let nuevaLetra="";

    for(let letra of palabra)
    {
        nuevaLetra=letra.toLowerCase();
        for(let llave of matrizCodigo){

            if (letra == llave [0]){                
                nuevaLetra=llave[1];
                break;
            }
            
        }

        nuevaPalabra+=nuevaLetra;
        
    }
    document.querySelector(".mensaje").value = nuevaPalabra;
    document.querySelector(".areaTexto").value = "";
}


function btnDesencriptar(){
    let palabra=document.querySelector(".areaTexto").value;
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    let nuevaPalabra = palabra.toLowerCase();
    
    for(let llave of matrizCodigo){
        nuevaPalabra=nuevaPalabra.replace(llave[1],llave[0])
    }
    document.querySelector(".mensaje").value = nuevaPalabra;
}

function btnCopiar(){
    document.querySelector(".areaTexto").value = document.querySelector(".mensaje").value
    document.querySelector(".mensaje").value = "";
}

