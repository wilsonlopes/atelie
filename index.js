const imagens = ["images/99.png", "images/88.png", "images/77.png"];
let posicaoImagemAtual = 0;


function vaiParaAnterior () {
    const tamanhoDoArrayDeImagens = imagens.length;
    const posicaoDaUltimaImagem = tamanhoDoArrayDeImagens - 1

    if (posicaoImagemAtual === 0) {
        document.getElementById("imagem1").src=imagens[posicaoDaUltimaImagem];
        posicaoImagemAtual = posicaoDaUltimaImagem;
    } else {
        document.getElementById("imagem1").src=imagens[posicaoImagemAtual - 1];
        posicaoImagemAtual = posicaoImagemAtual - 1;
    }
}

function vaiParaProximo () {
    const tamanhoDoArrayDeImagens = imagens.length;
    const posicaoDaUltimaImagem = tamanhoDoArrayDeImagens - 1

    if (posicaoImagemAtual === posicaoDaUltimaImagem) {
        document.getElementById("imagem1").src = imagens[0];
        posicaoImagemAtual = 0;
    } else {
        document.getElementById("imagem1").src = imagens[posicaoImagemAtual + 1];
        posicaoImagemAtual = posicaoImagemAtual + 1;
    }
}