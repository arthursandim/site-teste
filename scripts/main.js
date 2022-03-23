let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/firefox-logo.png') {
      minhaImagem.setAttribute ('src','images/firefox2.png');
    } else {
      minhaImagem.setAttribute ('src','images/firefox-logo.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
        defineNomeUsuario();
    }
    else{
        localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Mozilla é muito legal, ' + meuNome;
    }
}
    

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
}
else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla é muito legal, ' + nomeGuardado;
}

meuBotao.onclick = function() {
    defineNomeUsuario();
}