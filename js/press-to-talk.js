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

    if (!recognition) return;

    if (listenPointer == 0) {

        recognition.start()

        pressToTalkBtn.style.background = '#fff'
        pressToTalkBtn.style.border = '3px solid crimson'
        pressToTalkBtn.style.color = 'crimson'
        pressToTalkBtn.innerText = 'Aperte para parar 🔴'
        pressToTalkBtn.style.fontWeight = 'bold'

        listenPointer = 1

    } else if (listenPointer > 0) {

        textConvertedDiv.style.display = 'flex'
        hiddenInput.value = textResultP.innerText

        recognition.stop()

        pressToTalkBtn.style.background = 'dodgerblue'
        pressToTalkBtn.style.border = 'none'
        pressToTalkBtn.style.color = '#fff'
        pressToTalkBtn.innerText = 'Aperte para falar 🟢'

        listenPointer = 0

    }

}

const recognition = createRecognition()

function createRecognition() {

    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

    if (!recognition) {
        alert("speech not found")
        return
    }

    recognition.lang = "pt_BR"
    recognition.onstart = () => console.log('started')
    recognition.onend = () => console.log('finish')
    recognition.onerror = e => console.log('error', e)
    recognition.onresult = e => textResultP.innerHTML = e.results[0][0].transcript

    return recognition

}