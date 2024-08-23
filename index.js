var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaEsquerda.style ="display:flex; margin-top:35px"
    setaDireita.style ="display:none"
}

function RolarParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    samantha.style ="display:flex"
    setaEsquerda.style ="display:none; margin-top:145%"
    setaDireita.style ="display:flex; margin-top:55px"
}

