const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual time de futebol ganhou mais Copas do Mundo?",
        alternativas: [
            {
                texto: "Brasil",
                afirmacao: "afirmação"
            },
            {
                texto: "Alemanha",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quem ganhou a Copa do Mundo de 2010?",
        alternativas: [
            {
                texto: "Espanha",
                afirmacao: "afirmação"
            },
            {
                texto: "Brasil",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Em que time italiano jogou Diego Maradona?",
        alternativas: [
            {
                texto: "Napoli",
                afirmacao: "afirmação"
            },
            {
                texto: "Barcelona",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual time ganhou mais Champions League na história?",
        alternativas: [
            {
                texto: "Real Mradri",
                afirmacao: "afirmação"
            },
            {
                texto: "Liverpool",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quanto tempo dura uma partida de futebol?",
        alternativas: [
            {
                texto: "45",
                afirmacao: "afirmação"
            },
            {
                texto: "90",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
