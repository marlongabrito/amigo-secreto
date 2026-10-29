let participantes = [];
let sorteio = document.querySelector('#lista-sorteio')

function adicionar() {
    let campoNome = document.querySelector('#nome-amigo');
    let nome = campoNome.value;
    if (nome == '') {
        alert('Escreva o nome de alguém.');
        return;
    }
    if (participantes.includes(nome)) {
        alert('Essa pessoa já foi adicionada.')
        return
    }
    participantes.push(nome);
    atualizarParticipantes();
    campoNome.value = '';
}

function reiniciar() {
    participantes = [];
    atualizarParticipantes();
    sorteio.innerHTML = '';
}

function atualizarParticipantes() {
    let lista = document.querySelector('#lista-amigos');
    lista.textContent = participantes.join(', ');
}

function sortear() {
    if (participantes.length < 3) {
        alert('É necessário ter pelo menos três pessoas para sortear.');
        return;
    }
    embaralharNomes(participantes);
    for (let i = 0; i < participantes.length; i++) {
        if (i == participantes.length - 1) {
            sorteio.innerHTML += `${participantes[i]} --> ${participantes[0]}<br/>`;
            return
        }
        sorteio.innerHTML += `${participantes[i]} --> ${participantes[i + 1]}<br/>`;
    }
}

function embaralharNomes(lista) {
    for (let i = lista.length; i; i--) {
        const iAleatorio = Math.floor(Math.random() * i);
        [lista[i - 1], lista[iAleatorio]] = 
            [lista[iAleatorio], lista[i - 1]];
    }
}