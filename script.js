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
                afirmacao: "porque o Brasil levou mais copas que todas equipe"
            },
            {
                texto: "Alemanha",
                afirmacao: "porque a alemanha nunca foi um time muito agrecivo"
            }
        ]
    },
    {
        enunciado: "Quem ganhou a Copa do Mundo de 2010?",
        alternativas: [
            {
                texto: "Espanha",
                afirmacao: "porque eles estavam com um time bem bom, e eram favorito"
            },
            {
                texto: "Brasil",
                afirmacao: "o Brasil não era um time tão competitivo"
            }
        ]
    },
    {
        enunciado: "Em que time italiano jogou Diego Maradona?",
        alternativas: [
            {
                texto: "Napoli",
                afirmacao: "foi joagar la porque eles pagavam mais"
            },
            {
                texto: "Barcelona",
                afirmacao: "Barcelona não optou em contratar"
            }
        ]
    },
    {
        enunciado: "Qual time ganhou mais Champions League na história?",
        alternativas: [
            {
                texto: "Real Mradri",
                afirmacao: "Real tinha uma leve vantagem com seus jogadores todos de seleção"
            },
            {
                texto: "Liverpool",
                afirmacao: "Liverpool não era um time para disputar champions"
            }
        ]
    },
    {
        enunciado: "Quanto tempo dura uma partida de futebol?",
        alternativas: [
            {
                texto: "45",
                afirmacao: "a partida não dura 40 minutos e sim 90"
            },
            {
                texto: "90",
                afirmacao: "partida completa dura exatamente 90 minutos"
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
