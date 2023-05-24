const inputTexto1 = document.querySelector(".escreva1");
const inputTexto2 = document.querySelector(".escreva2");


function botaoEncriptar(){
    const textoEncriptado = encriptar(inputTexto1.value);
    inputTexto2.value = textoEncriptado;
    var rightTextarea = document.getElementById('rightTextarea');
    if (textoEncriptado.length > 0){
        rightTextarea.style.backgroundImage = 'none';
        inputTexto1.value = '';
    } else{
        rightTextarea.style.backgroundImage = 'url(/imagens/img.png)';
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function botaoDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto1.value)
    inputTexto2.value = textoDesencriptado;
    var rightTextarea = document.getElementById('rightTextarea');
    if (textoDesencriptado.length > 0){
        rightTextarea.style.backgroundImage = 'none';
        inputTexto1.value = '';
    } else{
        rightTextarea.style.backgroundImage = 'url(/imagens/img.png)';
    }
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}


function copiarConteudo() {
    var rightTextarea = document.getElementById('rightTextarea');
    var conteudo = rightTextarea.value;
    if (conteudo.length > 0) {
        navigator.clipboard.writeText(conteudo)
        .then(function() {
            rightTextarea.value = "";
            if (rightTextarea.value.length === 0) {
                rightTextarea.style.backgroundImage = 'url(/imagens/img.png)';
            }
        })
    }
}