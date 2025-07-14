const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Inicia o jogo
function iniciarJogo() {
    console.clear();
    reiniciarPerguntas();
    console.log("Bem-vindo ao Show do Milhão!\n");
    perguntarNome();
}


// Variáveis de controle do jogo
let jogador = "";
let rodadaAtual = 0;
let premioFinal = 0;


// Solicita o nome do jogador e inicia a primeira rodada
function perguntarNome() {
    rl.question("Digite seu nome para começar o Show do Milhão: ", (nome) => {
        if (!nome.trim()) {
            console.log("Nome inválido. Por favor, digite um nome válido.");
            return perguntarNome();
        }
        jogador = nome.trim();
        console.log(`\nOlá, ${jogador}! Vamos começar!\n`);
        jogarRodada();
    });
}


// Banco de perguntas seraparadas por nível de dificuldade
const bancoPerguntasFaceis = [
    {
        pergunta: "Qual foi a primeira capital do Brasil?",
        alternativas: ["A) Salvador", "B) Rio de Janeiro", "C) Brasília", "D) São Paulo"],
        correta: "A"
    },
    {
        pergunta: "Qual o nome do macho da abelha?",
        alternativas: ["A) Zangão", "B) Operário", "C) Rainho", "D) Soldado"],
        correta: "A"
    },
    {
        pergunta: "Qual é o planeta mais próximo do Sol?",
        alternativas: ["A) Mercúrio", "B) Terra", "C) Marte", "D) Vênus"],
        correta: "A"
    },
    {
        pergunta: "Qual casal foi expulso do paraíso?",
        alternativas: ["A) Adão e Eva", "B) José e Maria", "C) Abraão e Sara", "D) Caim e Abel"],
        correta: "A"
    },
     {
        pergunta: "Qual desses animais é um mamífero?",
        alternativas: ["A) Golfinho", "B) Jacaré", "C) Pinguim", "D) Papagaio"],
        correta: "A"
    },
    {
        pergunta: "Qual é o nome do movimento da Terra em torno do Sol?",
        alternativas: ["A) Translação", "B) Rotação", "C) Gravitação", "D) Revolução"],
        correta: "A"
    },
    {
        pergunta: "Quem libertou os escravos em 1888?",
        alternativas: ["A) Princesa Isabel", "B) Dom Pedro II", "C) Marechal Deodoro", "D) José Bonifácio"],
        correta: "A"
    }
];

const bancoPerguntasMedias = [
    {
        pergunta: "Qual é o maior país do mundo em extensão territorial?",
        alternativas: ["A) Estados Unidos", "B) Canadá", "C) China", "D) Rússia"],
        correta: "D"
    },
    {
        pergunta: "Quem escreveu o livro 'Dom Casmurro'?",
        alternativas: ["A) José de Alencar", "B) Jorge Amado", "C) Clarice Lispector", "D) Machado de Assis"],
        correta: "D"
    },
    {
        pergunta: "Qual é a capital do Canadá?",
        alternativas: ["A) Toronto", "B) Montreal", "C) Vancouver", "D) Ottawa"],
        correta: "D"
    },
    {
        pergunta: "Qual é o elemento químico representado pelo símbolo 'O'?",
        alternativas: ["A) Ouro", "B) Zinco", "C) Prata", "D) Oxigênio"],
        correta: "D"
    },
    {
        pergunta: "Qual oceano banha a costa leste do Brasil?",
        alternativas: ["A) Pacífico", "B) Índico", "C) Ártico", "D) Atlântico"],
        correta: "D"
    },
    {
        pergunta: "Em que continente fica o Egito?",
        alternativas: ["A) Europa", "B) América", "C) Ásia", "D) África"],
        correta: "D"
    },
    {
        pergunta: "Qual é o plural de 'cidadão'?",
        alternativas: ["A) Cidadões", "B) Cidades", "C) Cidadãs", "D) Cidadãos"],
        correta: "D"
    }
];

const bancoPerguntasDificeis = [
    {
        pergunta: "Quem pintou o teto da Capela Sistina?",
        alternativas: ["A) Leonardo da Vinci", "B) Rafael", "C) Michelangelo", "D) Donatello"],
        correta: "C"
    },
    {
        pergunta: "Qual é a fórmula química da água oxigenada?",
        alternativas: ["A) H2O", "B) HO2", "C) H2O2", "D) H2O3"],
        correta: "C"
    },
    {
        pergunta: "Quem foi o autor de 'A República'?",
        alternativas: ["A) Sócrates", "B) Aristóteles", "C) Platão", "D) Nietzsche"],
        correta: "C"
    },
    {
        pergunta: "Qual tratado pôs fim à Primeira Guerra Mundial?",
        alternativas: ["A) Tratado de Tordesilhas", "B) Tratado de Paris", "C) Tratado de Versalhes", "D) Tratado de Genebra"],
        correta: "C"
    },
    {
        pergunta: "Qual o nome do processo pelo qual as plantas produzem seu alimento?",
        alternativas: ["A) Germinação", "B) Respiração", "C) Fotossíntese", "D) Fermentação"],
        correta: "C"
    },
    {
        pergunta: "Qual é o nome do cientista que propôs a teoria da relatividade?",
        alternativas: ["A) Isaac Newton", "B) Galileo Galilei", "C) Albert Einstein", "D) Nikola Tesla"],
        correta: "C"
    },
    {
        pergunta: "Quem foi o primeiro presidente do Brasil?",
        alternativas: ["A) Getúlio Vargas", "B) Dom Pedro II", "C) Marechal Deodoro da Fonseca", "D) Juscelino Kubitschek"],
        correta: "C"
    }
];


// Listas que serão manipuladas durante o jogo
let perguntasFaceis = [];
let perguntasMedias = [];
let perguntasDificeis = [];


// Restaura as listas perguntas a cada novo jogador
function reiniciarPerguntas() {
    perguntasFaceis = [...bancoPerguntasFaceis];
    perguntasMedias = [...bancoPerguntasMedias];
    perguntasDificeis = [...bancoPerguntasDificeis];
}


// Seleciona uma pergunta de acordo com a rodada
function selecionarPergunta(rodada) {      
    let listaPerguntas;

    if (rodada < 4) {        // Rodadas 0 a 3 = perguntas fáceis
        listaPerguntas = perguntasFaceis;
    } else if (rodada < 7) {  // Rodadas 4 a 6 = perguntas médias
        listaPerguntas = perguntasMedias;
    } else {                  // Rodadas 7 a 9 = perguntas difíceis
        listaPerguntas = perguntasDificeis;
    }

    if (listaPerguntas.length === 0) {
        return null;
    }

    const index = Math.floor(Math.random() * listaPerguntas.length);
    const perguntaSelecionada = listaPerguntas[index];
    listaPerguntas.splice(index, 1); // Remove a pergunta já realizada
    return perguntaSelecionada;
}


// Lista de prêmios
const premios = [1000, 2000, 3000, 5000, 10000, 20000, 30000, 50000, 75000, 100000];


// Executa as rodadas do jogo
function jogarRodada() {
    if (rodadaAtual >= 10) {
        encerrarJogo("Parabéns! Você venceu o Show do Milhão!");
        return;
    }

    const pergunta = selecionarPergunta(rodadaAtual);

    if (!pergunta) {
        encerrarJogo("Acabaram as perguntas disponíveis para esta rodada.");
        return;
    }

    console.log(`\nRODADA ${rodadaAtual + 1} de 10`);
    console.log(`-------Jogador(a): ${jogador}-------`);
    console.log(`Essa pergunta vale: R$ ${premios[rodadaAtual].toLocaleString('pt-BR')}`);
    console.log(`Se você ERRAR: R$ 0 | Se você PARAR: R$ ${premioFinal.toLocaleString('pt-BR')}`);
    console.log(`\nPergunta: ${pergunta.pergunta}`);
    pergunta.alternativas.forEach(alt => console.log(alt));
    console.log("\nDigite A, B, C ou D para responder, ou P para parar o jogo.");

    rl.question("Sua resposta: ", (resposta) => {
        const respostaFormatada = resposta.toUpperCase();

        if (respostaFormatada === "P") {
            encerrarJogo("Você decidiu parar.");
            return;
        }

        if (!["A", "B", "C", "D"].includes(respostaFormatada)) {
            console.log("Opção inválida! Responda com A, B, C ou D. Caso deseje parar digite P.");
            return jogarRodada(); // repete a mesma rodada
        }

        if (respostaFormatada === pergunta.correta) {
            const premioGanho = premios[rodadaAtual];
            console.log(`Parabéns, resposta correta! Você ganhou R$ ${premioGanho.toLocaleString('pt-BR')}`);
            premioFinal = premioGanho;
            rodadaAtual++;

            if (rodadaAtual === 10) {
                encerrarJogo("Parabéns! Você chegou ao prêmio máximo do Show do Milhão!");
            } else {
                rl.question("\nVocê deseja continuar ou parar? (C para continuar / P para parar): ", (decisao) => {
                    if (decisao.toUpperCase() === "P") {
                        encerrarJogo("Que pena, você decidiu parar.");
                    } else {
                        jogarRodada();
                    }
                });
            }
        } else {
            premioFinal = 0;
            encerrarJogo("Resposta errada!");
        }
    });
}


// Encerra o jogo e exibe a premiação
function encerrarJogo(motivo) {
    const perguntasRestantes = 10 - rodadaAtual;
    const ultimaRodada = rodadaAtual > 0 ? rodadaAtual : 0;
    const mensagemFinal =
        motivo.includes("parar")
            ? "Você decidiu parar e levou o prêmio acumulado!"
            : motivo.includes("errada")
            ? "Infelizmente você errou a pergunta."
            : motivo;

    console.log(`\n ${mensagemFinal}`);
    console.log(`Jogador(a): ${jogador}`);
    console.log(`Você chegou até a rodada: ${ultimaRodada} de 10`);
    console.log(`Havia ${perguntasRestantes} perguntas restantes`);
    console.log(`Sua premiação final: R$ ${premioFinal}`);

    rl.question("\nDeseja jogar novamente? (S/N): ", (resposta) => {
        if (resposta.toUpperCase() === "S") {
            rodadaAtual = 0;
            premioFinal = 0;
            jogador = "";
            reiniciarPerguntas();
            perguntarNome();
        } else {
            console.log("\nObrigado por jogar! Até a próxima!");
            rl.close();
        }
    });
}

// Incia o jogo
iniciarJogo();