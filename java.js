const textArea = document.querySelector(".text-area");
const mensagem = document.getElementById("mensage");
let podeCopiar = false


function bntEncriptar(){
    if (textArea.value !== "") {
        const textoMinusculoSemAcento = removeAcento(textArea.value)
        const textoEncriptado = encriptar(textoMinusculoSemAcento);
        mensagem.classList.remove("imagemDeFundo")
        podeCopiar = true
        mensagem.value = textoEncriptado;
        textArea.value = "";
        retira_acentos(textArea);
    }
   
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return  stringEncriptada;
}

function bntDesencriptar(){
    if (textArea.value !== "") {
        executaDesencriptar(textArea.value)
    } else if (mensagem.value !== "") {
        executaDesencriptar(mensagem.value)
    }
}

function executaDesencriptar(texto){
    const textoMinusculoSemAcento = removeAcento(texto)
    const textoDesencriptado = desencriptar(textoMinusculoSemAcento);
    mensagem.classList.remove("imagemDeFundo")
    podeCopiar = true
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return  stringDesencriptada;
}

function copiarTexto() {
    if (podeCopiar) {
        mensagem.select();
        mensagem.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(mensagem.value);
        alert("Texto copiado");
    }
}

function removeAcento (text)
{       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;
}