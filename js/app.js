// ========================================
// TERMOLAB OS
// HOME DASHBOARD 3.0
// ========================================


// ========================================
// DADOS DO ALUNO
// ========================================

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


    localStorage.setItem(

        "dadosAluno",

        JSON.stringify(aluno)

    );

}



// ========================================
// PROGRESSO DO CURSO
// ========================================

let progressoCurso =
JSON.parse(
    localStorage.getItem(
        "progressoTermometria"
    )
);


if(!progressoCurso){

    progressoCurso = {

        concluidas:[],
        faseAtual:1

    };

}



// ========================================
// QUESTÕES
// ========================================

let progressoQuestoes =
JSON.parse(
    localStorage.getItem(
        "progressoQuestoes"
    )
);


if(!progressoQuestoes){

    progressoQuestoes = {

        respondidas:[],
        acertos:[],
        xpObtido:0,
        simuladosConcluidos:[]

    };

}



// ========================================
// TREINO DE CONVERSÕES
// ========================================

let treinoConversoes =
JSON.parse(
    localStorage.getItem(
        "treinoConversoes"
    )
);


if(!treinoConversoes){

    treinoConversoes = {

        concluidas:[]

    };

}



// ========================================
// TÍTULOS DAS FASES
// ========================================

const fasesCurso = [

    {
        id:1,

        titulo:
        "Temperatura",

        descricao:
        "Entenda o que é temperatura e como ela caracteriza o estado térmico."
    },

    {
        id:2,

        titulo:
        "Equilíbrio Térmico",

        descricao:
        "Descubra quando dois sistemas atingem a mesma temperatura."
    },

    {
        id:3,

        titulo:
        "Como funciona um termômetro",

        descricao:
        "Conheça propriedades termométricas e formas de medir temperatura."
    },

    {
        id:4,

        titulo:
        "Escala Celsius",

        descricao:
        "Aprenda os principais pontos de referência da escala Celsius."
    },

    {
        id:5,

        titulo:
        "Escala Fahrenheit",

        descricao:
        "Entenda como funciona a escala Fahrenheit e onde ela é utilizada."
    },

    {
        id:6,

        titulo:
        "Escala Kelvin",

        descricao:
        "Conheça a escala absoluta utilizada em Física."
    },

    {
        id:7,

        titulo:
        "Conversão entre escalas",

        descricao:
        "Converta temperaturas entre Celsius, Fahrenheit e Kelvin."
    },

    {
        id:8,

        titulo:
        "Zero Absoluto",

        descricao:
        "Entenda o significado físico do limite de 0 K."
    }

];



// ========================================
// ELEMENTOS
// ========================================

const nivelElemento =
document.getElementById("nivel");


const xpAtualElemento =
document.getElementById(
    "xpAtual"
);


const xpMaximoElemento =
document.getElementById(
    "xpMaximo"
);


const xpBarra =
document.getElementById(
    "xpBarra"
);



// ========================================
// XP
// ========================================

function atualizarXP(){

    nivelElemento.textContent =
    String(
        aluno.nivel
    ).padStart(
        2,
        "0"
    );


    xpAtualElemento.textContent =
    aluno.xp;


    xpMaximoElemento.textContent =
    aluno.xpMaximo;


    const porcentagemXP =

    Math.min(

        100,

        (
            aluno.xp
            /
            aluno.xpMaximo
        )
        * 100

    );


    xpBarra.style.width =
    porcentagemXP + "%";

}



// ========================================
// CURSO
// ========================================

function atualizarCurso(){

    const concluidas =
    progressoCurso.concluidas.length;


    const total =
    fasesCurso.length;


    const porcentagem =

    Math.round(
        (
            concluidas
            /
            total
        )
        * 100
    );


    document.getElementById(
        "homeAulas"
    ).textContent =

    `${concluidas} / ${total}`;


    document.getElementById(
        "homeCoursePercentage"
    ).textContent =
    porcentagem + "%";


    const liquido =
    document.getElementById(
        "homeThermometerLiquid"
    );


    /*
       Mantemos um mínimo visual
       para o líquido aparecer.
    */

    liquido.style.height =

    Math.max(
        5,
        porcentagem
    )
    + "%";



    atualizarProximaFase();

}



// ========================================
// PRÓXIMA FASE
// ========================================

function atualizarProximaFase(){

    const todasConcluidas =

    progressoCurso.concluidas.length
    >=
    fasesCurso.length;


    const numeroElemento =
    document.getElementById(
        "proximaFaseNumero"
    );


    const tituloElemento =
    document.getElementById(
        "proximaFaseTitulo"
    );


    const descricaoElemento =
    document.getElementById(
        "proximaFaseDescricao"
    );


    if(todasConcluidas){

        numeroElemento.textContent =
        "08";


        tituloElemento.textContent =
        "Curso concluído";


        descricaoElemento.textContent =

        "Você concluiu todas as fases. Revise conteúdos ou continue praticando no Banco de Questões.";


        return;

    }


    let fase =

    fasesCurso.find(
        item =>
        !progressoCurso
        .concluidas
        .includes(item.id)
    );


    if(!fase){

        fase =
        fasesCurso[0];

    }


    numeroElemento.textContent =

    String(fase.id)
    .padStart(
        2,
        "0"
    );


    tituloElemento.textContent =
    fase.titulo;


    descricaoElemento.textContent =
    fase.descricao;

}



// ========================================
// QUESTÕES
// ========================================

function atualizarQuestoes(){

    const respondidas =
    progressoQuestoes
    .respondidas
    .length;


    const acertos =
    progressoQuestoes
    .acertos
    .length;


    let precisao = 0;


    if(respondidas > 0){

        precisao =

        Math.round(
            (
                acertos
                /
                respondidas
            )
            * 100
        );

    }


    document.getElementById(
        "homePrecisao"
    ).textContent =
    precisao + "%";


    document.getElementById(
        "homeQuestoes"
    ).textContent =
    respondidas;


    document.getElementById(
        "homeAcertos"
    ).textContent =
    acertos;

}



// ========================================
// CONVERSÕES
// ========================================

function atualizarConversoes(){

    const concluidas =
    treinoConversoes
    .concluidas
    .length;


    document.getElementById(
        "homeConversoes"
    ).textContent =

    `${concluidas} / 6`;

}



// ========================================
// INICIAR HOME
// ========================================

function iniciarHome(){

    atualizarXP();

    atualizarCurso();

    atualizarQuestoes();

    atualizarConversoes();

}


iniciarHome();