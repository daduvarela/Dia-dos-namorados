let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "A data do nosso primeiro encontro foi dia...",
    alternativaA : "04/05",
    alternativaB : "10/05",
    alternativaC : "07/05",
    correta      : "07/05",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "No dia que nos conhecemos eu estava usando...",
    alternativaA : "Vestido",
    alternativaB : "Jean e camiseta",
    alternativaC : "Macacão",    
    correta      : "Vestido",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "O que eu mais gosto em mim é...",
    alternativaA : "Minha boca",
    alternativaB : "Minha cintura",
    alternativaC : "Meus olhos",
    correta      : "Meus olhos",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Minha sobremesa favorita é ...",
    alternativaA : "Brigadeiro",
    alternativaB : "Brownie",
    alternativaC : "Torta de limão",
    correta      : "Brownie",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "A cor dos meus olhos é...",
    alternativaA : "Castanho claro",
    alternativaB : "Castanho",
    alternativaC : "Preto",
    correta      : "Castanho claro",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Minha programação favorita num dia de folga depois de uma semana intensa de trabalho seria...",
    alternativaA : "Praia",
    alternativaB : "Filme/série na cama + pedir comida",
    alternativaC : "Jantar fora",
    correta      : "Filme/série na cama + pedir comida",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "O que eu mais tenho medo é de...",
    alternativaA : "Lugares pequenos",
    alternativaB : "Me afogar",
    alternativaC : "Altura",
    correta      : "Me afogar",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Minha maior qualidade é...",
    alternativaA : "Humor",
    alternativaB : "Ser amorosa",
    alternativaC : "Lealdade",
    correta      : "Lealdade",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "O que mais me deixa estressada é...",
    alternativaA : "TPM",
    alternativaB : "Atraso",
    alternativaC : "Bagunça",
    correta      : "TPM",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Você vai me deixar excluir as meninas do seu instagram?",
    alternativaA : "Sim",
    alternativaB : "É claro",
    alternativaC : "Óbvio e eu odeio todas elas, são muito feias",
    correta      : "Óbvio e eu odeio todas elas, são muito feias",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 200000)
}