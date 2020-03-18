window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
recognition.interimResults = true;

let template = document.getElementById('template')
let p = document.createElement('p');
template.appendChild(p);

recognition.addEventListener('result', (e)=>{
    let transcript = [...e.results].map(result => result[0])
        .map(result => result.transcript).join("");

    if(e.results[0].isFinal){
        p = document.createElement('p');
        template = document.getElementById('template');
        template.appendChild(p).innerHTML = transcript;
    }
})

recognition.addEventListener('end', recognition.start)
recognition.start();