'use strict'

//ponteiros
var listenPointer = 0

//botoes
var pressToTalkBtn = document.getElementById('press-to-talk')
var closeResults = document.getElementById('close-results')
var copyText = document.getElementById('copy-text')

//div resultado
var textConvertedDiv = document.getElementById('text-converted-div')
var textResultP = document.getElementById('text-result-p')
var hiddenInput = document.getElementById('hidden-input')
var selectedP = hiddenInput.value

function closeResultsFunc() {
    textConvertedDiv.style.display = 'none'
    copyText.innerHTML = 'Copiar Texto <i class="fa fa-copy"></i>'

}

function copyTextFunc() {

    /* Deixamos o texto selecionado (em azul) */
    //hiddenInput.select();
    hiddenInput.setSelectionRange(0, 99999); /* Para mobile */

    /* Copia o texto que está selecionado */
    document.execCommand("copy");

    copyText.innerText = 'Copiado ✔'


}

function startListen() {

    if (listenPointer == 0) {

        pressToTalkBtn.style.background = '#fff'
        pressToTalkBtn.style.border = '3px solid crimson'
        pressToTalkBtn.style.color = 'crimson'
        pressToTalkBtn.innerText = 'Aperte para parar 🔴'
        pressToTalkBtn.style.fontWeight = 'bold'

        listenPointer = 1

    } else if (listenPointer > 0) {

        textConvertedDiv.style.display = 'flex'
        hiddenInput.value = textResultP.innerText

        pressToTalkBtn.style.background = 'dodgerblue'
        pressToTalkBtn.style.border = 'none'
        pressToTalkBtn.style.color = '#fff'
        pressToTalkBtn.innerText = 'Aperte para falar 🟢'

        listenPointer = 0

    }

}