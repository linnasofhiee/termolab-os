// ========================================
// TERMOLAB OS
// PERFIL
// ========================================


// DADOS GERAIS

let aluno =
JSON.parse(
    localStorage.getItem("dadosAluno")
);


if(!aluno){

    aluno = {
        nivel:1,
        xp:0,
        xpMaximo:100
    };

}


// PROGRESSO DO CURSO

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


// QUESTÕES

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
        xpObtido:0
    };

}


// ========================================
// XP
// ========================================

document.getElementById(
    "nivelPerfil"
).textContent =
String(aluno.nivel).padStart(2,"0");


document.getElementById(
    "xpAtualPerfil"
).textContent =
aluno.xp;


document.getElementById(
    "xpMaximoPerfil"
).textContent =
aluno.xpMaximo;


const porcentagemXP =
Math.min(
    100,
    (aluno.xp / aluno.xpMaximo) * 100
);


document.getElementById(
    "xpBarraPerfil"
).style.width =
porcentagemXP + "%";


// ========================================
// ESTATÍSTICAS
// ========================================

const aulasConcluidas =
progressoCurso.concluidas.length;


const respondidas =
progressoQuestoes.respondidas.length;


const acertos =
progressoQuestoes.acertos.length;


let precisao = 0;


if(respondidas > 0){

    precisao =
    Math.round(
        (acertos / respondidas) * 100
    );

}


document.getElementById(
    "aulasConcluidas"
).textContent =
`${aulasConcluidas} / 8`;


document.getElementById(
    "questoesRespondidas"
).textContent =
respondidas;


document.getElementById(
    "questoesAcertadas"
).textContent =
acertos;


document.getElementById(
    "precisaoPerfil"
).textContent =
precisao + "%";


// ========================================
// CONQUISTAS
// ========================================

const conquistas = [

    {
        titulo:"Primeiros Passos",

        descricao:
        "Conclua sua primeira fase do curso.",

        desbloqueada:
        aulasConcluidas >= 1
    },


    {
        titulo:"Estudante de Escalas",

        descricao:
        "Conclua quatro fases de Termometria.",

        desbloqueada:
        aulasConcluidas >= 4
    },


    {
        titulo:"Curso Completo",

        descricao:
        "Conclua todas as oito fases.",

        desbloqueada:
        aulasConcluidas >= 8
    },


    {
        titulo:"Primeiro Acerto",

        descricao:
        "Acerte uma questão.",

        desbloqueada:
        acertos >= 1
    },


    {
        titulo:"Treino Intensivo",

        descricao:
        "Responda pelo menos cinco questões.",

        desbloqueada:
        respondidas >= 5
    },


    {
        titulo:"Alta Precisão",

        descricao:
        "Tenha pelo menos 80% de acertos após responder cinco questões.",

        desbloqueada:
        respondidas >= 5 &&
        precisao >= 80
    }

];


const areaConquistas =
document.getElementById("conquistas");


conquistas.forEach((conquista)=>{

    const card =
    document.createElement("article");


    card.classList.add("conquista");


    if(!conquista.desbloqueada){

        card.classList.add(
            "conquista-bloqueada"
        );

    }


    card.innerHTML = `

        <div class="conquista-icone"></div>

        <div class="conquista-info">

            <h3>
                ${conquista.titulo}
            </h3>

            <p>
                ${conquista.descricao}
            </p>

            <span class="conquista-status">

                ${
                    conquista.desbloqueada
                    ? "DESBLOQUEADA"
                    : "BLOQUEADA"
                }

            </span>

        </div>

    `;


    areaConquistas.appendChild(card);

});


// ========================================
// RESETAR PROGRESSO
// ========================================

const resetar =
document.getElementById(
    "resetarProgresso"
);


resetar.addEventListener(
    "click",
    ()=>{

        const confirmar =
        window.confirm(
            "Tem certeza? Todo o progresso do TermoLab OS salvo neste navegador será apagado."
        );


        if(!confirmar){
            return;
        }


        localStorage.removeItem(
            "dadosAluno"
        );


        localStorage.removeItem(
            "progressoTermometria"
        );


        localStorage.removeItem(
            "progressoQuestoes"
        );


        window.location.reload();

    }
);