// ========================================
// TERMOLAB OS
// CURSO DE TERMOMETRIA
// ========================================



// ========================================
// CONTEÚDO DAS FASES
// ========================================

const aulas = [

    {
        id:1,

        titulo:"Temperatura",

        resumo:
        "Entenda o que a temperatura representa e como ela descreve o estado térmico de um sistema.",

        texto:`
            <p>
                Temperatura é uma grandeza física utilizada
                para caracterizar o estado térmico de um corpo
                ou sistema.
            </p>

            <p>
                Ela permite comparar estados térmicos:
                podemos identificar quando um corpo está em
                temperatura maior, menor ou igual à de outro.
            </p>

            <p>
                Em modelos microscópicos simples, como o de
                um gás ideal, a temperatura absoluta está
                relacionada à energia cinética média das
                partículas.
            </p>
        `,

        exemploTitulo:
        "Um copo com água e gelo",

        exemplo:
        "Ao colocar gelo em água mais quente, as temperaturas dos dois sistemas inicialmente são diferentes. Com o tempo, elas se aproximam até atingir equilíbrio térmico.",

        conceito:
        "Temperatura não é sinônimo de calor. Temperatura caracteriza o estado térmico; calor é energia transferida devido a uma diferença de temperatura.",

        pergunta:
        "Qual afirmação sobre temperatura está correta?",

        alternativas:[
            "Temperatura e calor são exatamente a mesma grandeza.",
            "Temperatura permite comparar o estado térmico de diferentes sistemas.",
            "Somente objetos quentes possuem temperatura."
        ],

        correta:1
    },


    {
        id:2,

        titulo:"Equilíbrio Térmico",

        resumo:
        "Descubra por que corpos em contato tendem a atingir a mesma temperatura.",

        texto:`
            <p>
                Quando dois sistemas que possuem temperaturas
                diferentes podem trocar energia, ocorre uma
                transferência energética associada à diferença
                de temperatura.
            </p>

            <p>
                Depois de algum tempo, os sistemas podem atingir
                a mesma temperatura.
            </p>

            <p>
                Nesse estado, dizemos que existe
                <strong>equilíbrio térmico</strong>.
            </p>
        `,

        exemploTitulo:
        "Termômetro clínico",

        exemplo:
        "Quando um termômetro entra em contato com o corpo, precisamos esperar alguns instantes. Esse tempo permite que o sensor do termômetro se aproxime do equilíbrio térmico com o corpo.",

        conceito:
        "Dois sistemas em equilíbrio térmico possuem a mesma temperatura.",

        pergunta:
        "Quando dois corpos estão em equilíbrio térmico?",

        alternativas:[
            "Quando possuem o mesmo volume.",
            "Quando possuem a mesma massa.",
            "Quando apresentam a mesma temperatura."
        ],

        correta:2
    },


    {
        id:3,

        titulo:"Como funciona um termômetro",

        resumo:
        "Conheça as propriedades físicas usadas para medir temperatura.",

        texto:`
            <p>
                Um termômetro não observa diretamente a
                temperatura como enxergamos uma cor.
            </p>

            <p>
                Ele utiliza alguma propriedade física que varia
                de maneira previsível com a temperatura.
            </p>

            <p>
                Em termômetros de líquido, por exemplo,
                observamos a expansão do líquido dentro de
                um tubo estreito.
            </p>

            <p>
                Em termômetros digitais, sensores eletrônicos
                transformam variações físicas em sinais elétricos.
            </p>
        `,

        exemploTitulo:
        "Termômetros digitais",

        exemplo:
        "Um termômetro eletrônico pode usar um sensor cuja resistência elétrica varia com a temperatura. O circuito interpreta essa mudança e apresenta o valor no visor.",

        conceito:
        "Uma propriedade usada para indicar temperatura é chamada de propriedade termométrica.",

        pergunta:
        "O que um termômetro precisa utilizar para medir temperatura?",

        alternativas:[
            "Uma propriedade física que varie com a temperatura.",
            "Somente mercúrio.",
            "Obrigatoriamente água."
        ],

        correta:0
    },


    {
        id:4,

        titulo:"Escala Celsius",

        resumo:
        "Aprenda como funciona uma das escalas mais utilizadas no cotidiano.",

        texto:`
            <p>
                A escala Celsius é amplamente utilizada no
                Brasil e em muitos outros países.
            </p>

            <p>
                Em condições padronizadas, o ponto de fusão
                da água corresponde aproximadamente a
                <strong>0 °C</strong>.
            </p>

            <p>
                O ponto de ebulição da água, à pressão
                atmosférica padrão, corresponde a
                aproximadamente <strong>100 °C</strong>.
            </p>
        `,

        exemploTitulo:
        "Previsão do tempo",

        exemplo:
        "Quando a previsão informa 30 °C, estamos utilizando a escala Celsius para representar a temperatura do ar.",

        conceito:
        "O símbolo correto é °C, incluindo o símbolo de grau antes da letra C.",

        pergunta:
        "Qual valor corresponde aproximadamente ao ponto de fusão da água na escala Celsius?",

        alternativas:[
            "0 °C",
            "32 °C",
            "273 °C"
        ],

        correta:0
    },


    {
        id:5,

        titulo:"Escala Fahrenheit",

        resumo:
        "Entenda a escala utilizada principalmente nos Estados Unidos.",

        texto:`
            <p>
                Na escala Fahrenheit, a água congela
                aproximadamente a <strong>32 °F</strong>.
            </p>

            <p>
                A água entra em ebulição aproximadamente
                a <strong>212 °F</strong>, considerando
                pressão atmosférica padrão.
            </p>

            <p>
                Entre esses dois pontos existem 180 divisões.
            </p>
        `,

        exemploTitulo:
        "Viagem para os Estados Unidos",

        exemplo:
        "Uma previsão de 86 °F pode parecer muito alta para quem está acostumado a Celsius. Esse valor corresponde a aproximadamente 30 °C.",

        conceito:
        "0 °C corresponde a 32 °F, e não a 0 °F.",

        pergunta:
        "A temperatura de 0 °C corresponde a aproximadamente:",

        alternativas:[
            "0 °F",
            "32 °F",
            "100 °F"
        ],

        correta:1
    },


    {
        id:6,

        titulo:"Escala Kelvin",

        resumo:
        "Conheça a escala absoluta utilizada em Física e outras ciências.",

        texto:`
            <p>
                A escala Kelvin é uma escala absoluta
                de temperatura.
            </p>

            <p>
                O valor <strong>0 K</strong> corresponde
                ao zero absoluto.
            </p>

            <p>
                Para conversões escolares entre Celsius
                e Kelvin, utilizamos normalmente:
            </p>

            <p>
                <strong>K = °C + 273,15</strong>
            </p>
        `,

        exemploTitulo:
        "Laboratórios científicos",

        exemplo:
        "Experimentos em Física e Química frequentemente utilizam Kelvin porque várias relações científicas exigem uma escala absoluta de temperatura.",

        conceito:
        "Kelvin não utiliza o símbolo de grau. Escrevemos 300 K, e não 300 °K.",

        pergunta:
        "Qual é a escrita correta?",

        alternativas:[
            "300 °K",
            "300 K",
            "300 K°"
        ],

        correta:1
    },


    {
        id:7,

        titulo:"Conversão entre escalas",

        resumo:
        "Aprenda a transformar valores entre Celsius, Fahrenheit e Kelvin.",

        texto:`
            <p>
                Para converter Celsius para Kelvin:
            </p>

            <p>
                <strong>K = °C + 273,15</strong>
            </p>

            <p>
                Para converter Celsius para Fahrenheit:
            </p>

            <p>
                <strong>°F = (°C × 9/5) + 32</strong>
            </p>

            <p>
                O conversor do TermoLab permite testar
                essas relações interativamente.
            </p>
        `,

        exemploTitulo:
        "Temperatura corporal",

        exemplo:
        "Uma temperatura corporal de 37 °C corresponde a aproximadamente 98,6 °F.",

        conceito:
        "As escalas usam valores diferentes para representar o mesmo estado térmico.",

        pergunta:
        "Quanto vale aproximadamente 0 °C em Kelvin?",

        alternativas:[
            "0 K",
            "100 K",
            "273,15 K"
        ],

        correta:2
    },


    {
        id:8,

        titulo:"Zero Absoluto",

        resumo:
        "Entenda o limite inferior da escala termodinâmica de temperatura.",

        texto:`
            <p>
                O zero absoluto corresponde a
                <strong>0 K</strong>.
            </p>

            <p>
                Na escala Celsius, isso equivale a
                aproximadamente
                <strong>-273,15 °C</strong>.
            </p>

            <p>
                Esse valor representa o limite inferior
                da escala termodinâmica de temperatura.
            </p>

            <p>
                Não devemos imaginar simplesmente que
                todas as partículas ficam completamente
                imóveis, pois sistemas quânticos ainda
                apresentam efeitos associados à energia
                do estado fundamental.
            </p>
        `,

        exemploTitulo:
        "Pesquisa em temperaturas ultrabaixas",

        exemplo:
        "Laboratórios especializados conseguem produzir temperaturas extremamente próximas de 0 K para estudar fenômenos que não aparecem em temperaturas comuns.",

        conceito:
        "0 K corresponde a aproximadamente -273,15 °C.",

        pergunta:
        "O zero absoluto corresponde a:",

        alternativas:[
            "0 °C",
            "0 K",
            "100 K"
        ],

        correta:1
    }

];



// ========================================
// PROGRESSO
// ========================================

let progresso =
JSON.parse(
    localStorage.getItem(
        "progressoTermometria"
    )
);


if(!progresso){

    progresso = {

        concluidas:[],

        faseAtual:1

    };

}



// ========================================
// ELEMENTOS
// ========================================

const mapaFases =
document.getElementById("mapaFases");


const aulaElemento =
document.getElementById("aula");


const arquivoAula =
document.getElementById("arquivoAula");


const tituloAula =
document.getElementById("tituloAula");


const textoAula =
document.getElementById("textoAula");


const tituloExemplo =
document.getElementById("tituloExemplo");


const textoExemplo =
document.getElementById("textoExemplo");


const conceitoChave =
document.getElementById("conceitoChave");


const perguntaAula =
document.getElementById("perguntaAula");


const alternativasAula =
document.getElementById(
    "alternativasAula"
);


const feedbackAula =
document.getElementById("feedbackAula");


const concluirAula =
document.getElementById("concluirAula");


const fecharAula =
document.getElementById("fecharAula");


const barraCurso =
document.getElementById("barraCurso");


const porcentagemCurso =
document.getElementById(
    "porcentagemCurso"
);


const fasesConcluidas =
document.getElementById(
    "fasesConcluidas"
);


let aulaAtual = null;

let respostaCorreta = false;



// ========================================
// CRIAR FASES
// ========================================

function criarFases(){

    mapaFases.innerHTML = "";


    aulas.forEach((aula)=>{

        const fase =
        document.createElement("article");


        fase.classList.add("fase");


        const concluida =
        progresso.concluidas.includes(aula.id);


        const disponivel =
        aula.id === progresso.faseAtual;


        if(concluida){

            fase.classList.add(
                "fase-concluida"
            );

        }

        else if(disponivel){

            fase.classList.add(
                "fase-disponivel"
            );

        }

        else{

            fase.classList.add(
                "fase-bloqueada"
            );

        }


        fase.innerHTML = `

            <div class="fase-topo">

                <span class="numero-fase">
                    ${String(aula.id).padStart(2,"0")}
                </span>

                <span class="status-fase">

                    ${
                        concluida
                        ? "CONCLUÍDA"
                        :
                        disponivel
                        ? "DISPONÍVEL"
                        :
                        "BLOQUEADA"
                    }

                </span>

            </div>


            <h2>
                ${aula.titulo}
            </h2>


            <p>
                ${aula.resumo}
            </p>


            <button
                class="botao-fase"
                ${(!concluida && !disponivel) ? "disabled" : ""}
            >

                ${
                    concluida
                    ? "REVISAR"
                    :
                    disponivel
                    ? "INICIAR"
                    :
                    "BLOQUEADO"
                }

            </button>

        `;


        const botao =
        fase.querySelector(
            ".botao-fase"
        );


        if(concluida || disponivel){

            botao.addEventListener(
                "click",
                ()=>abrirAula(aula.id)
            );

        }


        mapaFases.appendChild(fase);

    });


    atualizarProgresso();

}



// ========================================
// ABRIR AULA
// ========================================

function abrirAula(id){

    aulaAtual =
    aulas.find(
        aula => aula.id === id
    );


    if(!aulaAtual){
        return;
    }


    arquivoAula.textContent =
    `LESSON_${String(id).padStart(2,"0")}.EXE`;


    tituloAula.textContent =
    aulaAtual.titulo;


    textoAula.innerHTML =
    aulaAtual.texto;


    tituloExemplo.textContent =
    aulaAtual.exemploTitulo;


    textoExemplo.textContent =
    aulaAtual.exemplo;


    conceitoChave.textContent =
    aulaAtual.conceito;


    perguntaAula.textContent =
    aulaAtual.pergunta;


    criarAlternativas();


    feedbackAula.textContent = "";

    respostaCorreta = false;

    concluirAula.disabled = true;


    aulaElemento.classList.add(
        "aberta"
    );


    aulaElemento.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}



// ========================================
// ALTERNATIVAS
// ========================================

function criarAlternativas(){

    alternativasAula.innerHTML = "";


    aulaAtual.alternativas.forEach(
        (texto,index)=>{

            const botao =
            document.createElement("button");


            botao.classList.add(
                "alternativa-aula"
            );


            botao.textContent =
            `${String.fromCharCode(65 + index)}) ${texto}`;


            botao.addEventListener(
                "click",
                ()=>responder(botao,index)
            );


            alternativasAula.appendChild(
                botao
            );

        }
    );

}



// ========================================
// RESPONDER DESAFIO
// ========================================

function responder(botao,index){

    const botoes =
    document.querySelectorAll(
        ".alternativa-aula"
    );


    botoes.forEach((item)=>{

        item.classList.remove(
            "correta",
            "errada"
        );

    });


    if(index === aulaAtual.correta){

        botao.classList.add("correta");


        feedbackAula.textContent =
        "Resposta correta. Fase pronta para ser concluída.";


        respostaCorreta = true;

        concluirAula.disabled = false;

    }

    else{

        botao.classList.add("errada");


        feedbackAula.textContent =
        "Essa alternativa não está correta. Leia novamente a explicação e tente outra.";


        respostaCorreta = false;

        concluirAula.disabled = true;

    }

}



// ========================================
// CONCLUIR AULA
// ========================================

concluirAula.addEventListener(
    "click",
    ()=>{

        if(
            !aulaAtual ||
            !respostaCorreta
        ){
            return;
        }


        const jaConcluida =
        progresso.concluidas.includes(
            aulaAtual.id
        );


        if(!jaConcluida){

            progresso.concluidas.push(
                aulaAtual.id
            );


            adicionarXP(20);

        }


        if(
            aulaAtual.id < aulas.length
        ){

            progresso.faseAtual =
            Math.max(
                progresso.faseAtual,
                aulaAtual.id + 1
            );

        }


        salvarProgresso();

        criarFases();


        aulaElemento.classList.remove(
            "aberta"
        );


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }
);



// ========================================
// FECHAR AULA
// ========================================

fecharAula.addEventListener(
    "click",
    ()=>{

        aulaElemento.classList.remove(
            "aberta"
        );

    }
);



// ========================================
// PROGRESSO VISUAL
// ========================================

function atualizarProgresso(){

    const total =
    aulas.length;


    const concluidas =
    progresso.concluidas.length;


    const porcentagem =
    Math.round(
        (concluidas / total) * 100
    );


    barraCurso.style.width =
    porcentagem + "%";


    porcentagemCurso.textContent =
    porcentagem + "%";


    fasesConcluidas.textContent =
    `${concluidas} de ${total} fases concluídas`;

}



// ========================================
// SALVAR
// ========================================

function salvarProgresso(){

    localStorage.setItem(

        "progressoTermometria",

        JSON.stringify(progresso)

    );

}



// ========================================
// XP
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
        aluno.xp >= aluno.xpMaximo
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
// INICIAR
// ========================================

criarFases();