// ========================================
// TERMOLAB OS
// QUESTION SYSTEM 2.0
// ========================================


let questoes = [];

let filtroAtual = "facil";


// ========================================
// PROGRESSO
// ========================================

let progresso =
JSON.parse(
    localStorage.getItem(
        "progressoQuestoes"
    )
);


if(!progresso){

    progresso = {

        respondidas:[],
        acertos:[],
        xpObtido:0,
        simuladosConcluidos:[]

    };

}


if(!progresso.simuladosConcluidos){

    progresso.simuladosConcluidos = [];

}


// ========================================
// ELEMENTOS
// ========================================

const listaQuestoes =
document.getElementById(
    "listaQuestoes"
);


const filtros =
document.querySelectorAll(
    ".filtro-questao"
);


const modos =
document.querySelectorAll(
    ".modo-questao"
);


const modoTreino =
document.getElementById(
    "modoTreino"
);


const modoProva =
document.getElementById(
    "modoProva"
);


// ========================================
// CARREGAR JSON
// ========================================

async function carregarQuestoes(){

    try{

        const resposta =
        await fetch(
            "data/questoes.json"
        );


        if(!resposta.ok){

            throw new Error(
                "Não foi possível carregar questoes.json"
            );

        }


        questoes =
        await resposta.json();


        mostrarQuestoes();

        atualizarEstatisticas();

    }

    catch(erro){

        console.error(erro);


        listaQuestoes.innerHTML = `

            <p style="padding:30px;">
                Não foi possível carregar
                o banco de questões.
                Verifique se o projeto está
                aberto pelo Live Server.
            </p>

        `;

    }

}


// ========================================
// MOSTRAR BANCO
// ========================================

function mostrarQuestoes(){

    listaQuestoes.innerHTML = "";


    const filtradas =
    questoes.filter(
        questao =>
        questao.categoria === filtroAtual
    );


    filtradas.forEach(
        (questao,index)=>{

            const card =
            criarCardQuestao(
                questao,
                index
            );


            listaQuestoes.appendChild(
                card
            );

        }
    );

}


// ========================================
// CRIAR CARD
// ========================================

function criarCardQuestao(
    questao,
    indice
){

    const artigo =
    document.createElement("article");


    artigo.classList.add(
        "questao-card"
    );


    const jaAcertou =
    progresso.acertos.includes(
        questao.id
    );


    artigo.innerHTML = `

        <div class="questao-card-topo">

            <span>
                QUESTÃO
                ${String(indice + 1).padStart(2,"0")}
            </span>

            <span>
                ${
                    jaAcertou
                    ? "XP OBTIDO"
                    : "+" + questao.xp + " XP"
                }
            </span>

        </div>


        <div class="questao-card-conteudo">

            <span class="questao-origem">
                ${questao.origem}
            </span>


            <h2>
                ${questao.enunciado}
            </h2>


            <div class="questao-alternativas"></div>


            <div class="resolucao-questao">

                <strong></strong>

                <p>
                    ${questao.explicacao}
                </p>

            </div>

        </div>

    `;


    const areaAlternativas =
    artigo.querySelector(
        ".questao-alternativas"
    );


    questao.alternativas.forEach(
        (texto,index)=>{

            const botao =
            document.createElement(
                "button"
            );


            botao.classList.add(
                "questao-alternativa"
            );


            botao.textContent =
            `${String.fromCharCode(65 + index)}) ${texto}`;


            botao.addEventListener(
                "click",
                ()=>responderQuestao(
                    questao,
                    index,
                    artigo
                )
            );


            areaAlternativas.appendChild(
                botao
            );

        }
    );


    return artigo;

}


// ========================================
// RESPONDER QUESTÃO
// ========================================

function responderQuestao(
    questao,
    resposta,
    artigo
){

    const botoes =
    artigo.querySelectorAll(
        ".questao-alternativa"
    );


    const resolucao =
    artigo.querySelector(
        ".resolucao-questao"
    );


    const tituloResolucao =
    resolucao.querySelector("strong");


    botoes.forEach((botao)=>{

        botao.disabled = true;

    });


    if(resposta === questao.correta){

        botoes[resposta]
        .classList.add(
            "correta"
        );


        tituloResolucao.textContent =
        "Resposta correta";


        registrarQuestao(
            questao,
            true
        );

    }

    else{

        botoes[resposta]
        .classList.add(
            "errada"
        );


        botoes[
            questao.correta
        ]
        .classList.add(
            "correta"
        );


        tituloResolucao.textContent =
        "Resposta incorreta";


        registrarQuestao(
            questao,
            false
        );

    }


    resolucao.classList.add(
        "visivel"
    );


    atualizarEstatisticas();

}


// ========================================
// REGISTRAR RESPOSTA
// ========================================

function registrarQuestao(
    questao,
    acertou
){

    const primeiraResposta =
    !progresso.respondidas.includes(
        questao.id
    );


    if(!primeiraResposta){
        return;
    }


    progresso.respondidas.push(
        questao.id
    );


    if(acertou){

        progresso.acertos.push(
            questao.id
        );


        progresso.xpObtido +=
        questao.xp;


        adicionarXP(
            questao.xp
        );

    }


    salvarProgresso();

}


// ========================================
// FILTROS
// ========================================

filtros.forEach((botao)=>{

    botao.addEventListener(
        "click",
        ()=>{

            filtros.forEach(
                item =>
                item.classList.remove(
                    "ativo"
                )
            );


            botao.classList.add(
                "ativo"
            );


            filtroAtual =
            botao.dataset.filtro;


            mostrarQuestoes();

        }
    );

});


// ========================================
// MODOS
// ========================================

modos.forEach((botao)=>{

    botao.addEventListener(
        "click",
        ()=>{

            modos.forEach(
                item =>
                item.classList.remove(
                    "ativo"
                )
            );


            botao.classList.add(
                "ativo"
            );


            const modo =
            botao.dataset.modo;


            if(modo === "treino"){

                modoTreino.classList.add(
                    "ativo"
                );


                modoProva.classList.remove(
                    "ativo"
                );

            }

            else{

                modoTreino.classList.remove(
                    "ativo"
                );


                modoProva.classList.add(
                    "ativo"
                );

            }

        }
    );

});


// ========================================
// ESTATÍSTICAS
// ========================================

function atualizarEstatisticas(){

    const respondidas =
    progresso.respondidas.length;


    const acertos =
    progresso.acertos.length;


    let precisao = 0;


    if(respondidas > 0){

        precisao =
        Math.round(
            (acertos / respondidas)
            * 100
        );

    }


    document.getElementById(
        "estatRespondidas"
    ).textContent =
    respondidas;


    document.getElementById(
        "estatAcertos"
    ).textContent =
    acertos;


    document.getElementById(
        "estatPrecisao"
    ).textContent =
    precisao + "%";


    document.getElementById(
        "estatXP"
    ).textContent =
    progresso.xpObtido;

}


// ========================================
// SALVAR
// ========================================

function salvarProgresso(){

    localStorage.setItem(

        "progressoQuestoes",

        JSON.stringify(progresso)

    );

}


// ========================================
// XP GLOBAL
// ========================================

function adicionarXP(valor){

    let aluno =
    JSON.parse(
        localStorage.getItem(
            "dadosAluno"
        )
    );


    if(!aluno){

        aluno = {

            nivel:1,
            xp:0,
            xpMaximo:100

        };

    }


    aluno.xp += valor;


    while(
        aluno.xp >=
        aluno.xpMaximo
    ){

        aluno.xp -=
        aluno.xpMaximo;


        aluno.nivel++;


        aluno.xpMaximo += 50;

    }


    localStorage.setItem(

        "dadosAluno",

        JSON.stringify(aluno)

    );

}


// ========================================
// MODO PROVA
// ========================================

const iniciarProva =
document.getElementById(
    "iniciarProva"
);


const inicioProva =
document.getElementById(
    "inicioProva"
);


const provaEmAndamento =
document.getElementById(
    "provaEmAndamento"
);


const resultadoProva =
document.getElementById(
    "resultadoProva"
);


const alternativasProva =
document.getElementById(
    "alternativasProva"
);


const confirmarRespostaProva =
document.getElementById(
    "confirmarRespostaProva"
);


const erroProva =
document.getElementById(
    "erroProva"
);


const refazerProva =
document.getElementById(
    "refazerProva"
);


let questoesDaProva = [];

let indiceProva = 0;

let respostaSelecionada = null;

let respostasDaProva = [];


// ========================================
// EMBARALHAR
// ========================================

function embaralhar(array){

    const copia = [...array];


    for(
        let i = copia.length - 1;
        i > 0;
        i--
    ){

        const j =
        Math.floor(
            Math.random() * (i + 1)
        );


        [
            copia[i],
            copia[j]
        ]
        =
        [
            copia[j],
            copia[i]
        ];

    }


    return copia;

}


// ========================================
// INICIAR PROVA
// ========================================

iniciarProva.addEventListener(
    "click",
    iniciarSimulado
);


function iniciarSimulado(){

    questoesDaProva =
    embaralhar(questoes)
    .slice(
        0,
        Math.min(10,questoes.length)
    );


    indiceProva = 0;

    respostaSelecionada = null;

    respostasDaProva = [];


    inicioProva.style.display =
    "none";


    resultadoProva.classList.remove(
        "ativo"
    );


    provaEmAndamento.classList.add(
        "ativo"
    );


    mostrarQuestaoProva();

}


// ========================================
// MOSTRAR QUESTÃO DA PROVA
// ========================================

function mostrarQuestaoProva(){

    const questao =
    questoesDaProva[indiceProva];


    respostaSelecionada = null;


    erroProva.textContent = "";


    document.getElementById(
        "numeroQuestaoProva"
    ).textContent =

    `QUESTÃO ${indiceProva + 1} DE ${questoesDaProva.length}`;



    const percentual =
    Math.round(
        (
            (indiceProva + 1)
            /
            questoesDaProva.length
        )
        * 100
    );


    document.getElementById(
        "percentualProva"
    ).textContent =
    percentual + "%";


    document.getElementById(
        "barraProva"
    ).style.width =
    percentual + "%";


    document.getElementById(
        "origemQuestaoProva"
    ).textContent =
    questao.origem;


    document.getElementById(
        "enunciadoProva"
    ).textContent =
    questao.enunciado;


    alternativasProva.innerHTML = "";


    questao.alternativas.forEach(
        (texto,index)=>{

            const botao =
            document.createElement(
                "button"
            );


            botao.classList.add(
                "alternativa-prova"
            );


            botao.textContent =
            `${String.fromCharCode(65 + index)}) ${texto}`;


            botao.addEventListener(
                "click",
                ()=>{

                    document
                    .querySelectorAll(
                        ".alternativa-prova"
                    )
                    .forEach(
                        item =>
                        item.classList.remove(
                            "selecionada"
                        )
                    );


                    botao.classList.add(
                        "selecionada"
                    );


                    respostaSelecionada =
                    index;

                }
            );


            alternativasProva
            .appendChild(botao);

        }
    );

}


// ========================================
// CONFIRMAR NA PROVA
// ========================================

confirmarRespostaProva
.addEventListener(
    "click",
    ()=>{

        if(
            respostaSelecionada === null
        ){

            erroProva.textContent =
            "Selecione uma alternativa.";

            return;

        }


        const questao =
        questoesDaProva[indiceProva];


        respostasDaProva.push({

            questao:questao,

            resposta:
            respostaSelecionada,

            acertou:
            respostaSelecionada
            ===
            questao.correta

        });


        indiceProva++;


        if(
            indiceProva <
            questoesDaProva.length
        ){

            mostrarQuestaoProva();

        }

        else{

            finalizarProva();

        }

    }
);


// ========================================
// FINALIZAR PROVA
// ========================================

function finalizarProva(){

    provaEmAndamento.classList.remove(
        "ativo"
    );


    resultadoProva.classList.add(
        "ativo"
    );


    const acertos =
    respostasDaProva.filter(
        resposta =>
        resposta.acertou
    ).length;


    const percentual =
    Math.round(
        (
            acertos
            /
            respostasDaProva.length
        )
        * 100
    );


    document.getElementById(
        "resultadoAcertos"
    ).textContent =

    `${acertos} / ${respostasDaProva.length}`;


    document.getElementById(
        "resultadoPercentual"
    ).textContent =
    percentual + "%";


    let mensagem;


    if(percentual >= 80){

        mensagem =
        "Excelente desempenho. Seu domínio das principais relações de Termometria está muito bom.";

    }

    else if(percentual >= 60){

        mensagem =
        "Bom resultado. Revise as questões erradas para fortalecer os pontos que ainda geram dúvida.";

    }

    else{

        mensagem =
        "Vale revisar as aulas e o conversor antes de realizar outro simulado.";

    }


    document.getElementById(
        "mensagemResultado"
    ).textContent =
    mensagem;


    calcularXPProva(acertos);


    criarRevisao();

}


// ========================================
// XP DA PROVA
// ========================================

function calcularXPProva(acertos){

    const ids =
    questoesDaProva
    .map(questao => questao.id)
    .sort()
    .join("-");


    const assinatura =
    btoa(ids).slice(0,40);


    let xpGanho = 0;


    const jaRecebeuXP =
    progresso.simuladosConcluidos
    .includes(assinatura);


    if(!jaRecebeuXP){

        xpGanho =
        acertos * 5;


        if(xpGanho > 0){

            adicionarXP(
                xpGanho
            );

        }


        progresso.simuladosConcluidos
        .push(
            assinatura
        );


        salvarProgresso();

    }


    document.getElementById(
        "xpProvaFinal"
    ).textContent =

    jaRecebeuXP
    ? "XP já obtido neste simulado"
    : `+${xpGanho} XP`;

}


// ========================================
// REVISÃO
// ========================================

function criarRevisao(){

    const area =
    document.getElementById(
        "revisaoProva"
    );


    area.innerHTML = "";


    respostasDaProva.forEach(
        (resposta,index)=>{

            const item =
            document.createElement(
                "article"
            );


            item.classList.add(
                "revisao-item"
            );


            item.classList.add(
                resposta.acertou
                ? "acertou"
                : "errou"
            );


            item.innerHTML = `

                <strong>

                    Questão ${index + 1}
                    —
                    ${
                        resposta.acertou
                        ? "CORRETA"
                        : "INCORRETA"
                    }

                </strong>


                <p>
                    ${resposta.questao.explicacao}
                </p>

            `;


            area.appendChild(
                item
            );

        }
    );

}


// ========================================
// NOVO SIMULADO
// ========================================

refazerProva.addEventListener(
    "click",
    ()=>{

        resultadoProva.classList.remove(
            "ativo"
        );


        inicioProva.style.display =
        "block";


        window.scrollTo({

            top:
            modoProva.offsetTop - 20,

            behavior:"smooth"

        });

    }
);


// ========================================
// LINK #VESTIBULARES
// ========================================

function verificarURL(){

    if(
        window.location.hash
        ===
        "#vestibulares"
    ){

        filtroAtual =
        "vestibulares";


        filtros.forEach(
            botao =>{

                botao.classList.toggle(

                    "ativo",

                    botao.dataset.filtro
                    ===
                    "vestibulares"

                );

            }
        );


        mostrarQuestoes();

    }

}


// ========================================
// INICIAR
// ========================================

carregarQuestoes()
.then(()=>{

    verificarURL();

});