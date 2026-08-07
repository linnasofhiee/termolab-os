// ========================================
// TERMOLAB OS
// CONVERSOR DE ESCALAS
// ========================================


// ELEMENTOS

const valorTemperatura =
document.getElementById("valorTemperatura");

const escalaOrigem =
document.getElementById("escalaOrigem");

const escalaDestino =
document.getElementById("escalaDestino");

const botaoConverter =
document.getElementById("botaoConverter");

const resultadoPrincipal =
document.getElementById("resultadoPrincipal");

const formulaAtual =
document.getElementById("formulaAtual");

const passoAPasso =
document.getElementById("passoAPasso");

const comparacaoCelsius =
document.getElementById("comparacaoCelsius");

const comparacaoKelvin =
document.getElementById("comparacaoKelvin");

const comparacaoFahrenheit =
document.getElementById("comparacaoFahrenheit");


// ========================================
// CONVERSÃO BASE
// ========================================

function paraCelsius(valor, escala){

    if(escala === "celsius"){
        return valor;
    }

    if(escala === "fahrenheit"){
        return (valor - 32) * 5 / 9;
    }

    if(escala === "kelvin"){
        return valor - 273.15;
    }

}


function deCelsius(celsius, escala){

    if(escala === "celsius"){
        return celsius;
    }

    if(escala === "fahrenheit"){
        return (celsius * 9 / 5) + 32;
    }

    if(escala === "kelvin"){
        return celsius + 273.15;
    }

}


// ========================================
// FORMATAÇÃO
// ========================================

function unidade(escala){

    if(escala === "celsius"){
        return "°C";
    }

    if(escala === "fahrenheit"){
        return "°F";
    }

    return "K";
}


function formatarNumero(numero, casas = 2){

    return Number(numero)
        .toFixed(casas)
        .replace(".",",");

}


// ========================================
// FÓRMULAS DIRETAS
// ========================================

function obterFormula(origem,destino){

    const chave =
    origem + "-" + destino;


    const formulas = {

        "celsius-fahrenheit":
        "°F = (°C × 9/5) + 32",

        "fahrenheit-celsius":
        "°C = (°F - 32) × 5/9",

        "celsius-kelvin":
        "K = °C + 273,15",

        "kelvin-celsius":
        "°C = K - 273,15",

        "fahrenheit-kelvin":
        "K = (°F - 32) × 5/9 + 273,15",

        "kelvin-fahrenheit":
        "°F = (K - 273,15) × 9/5 + 32"

    };


    if(origem === destino){

        return "Nenhuma conversão é necessária.";

    }


    return formulas[chave];

}


// ========================================
// PASSO A PASSO
// ========================================

function criarPassos(
    valor,
    origem,
    destino,
    resultado
){

    if(origem === destino){

        return `
            <strong>As escalas são iguais.</strong>
            <br><br>
            O valor permanece:
            ${formatarNumero(valor)}
            ${unidade(destino)}
        `;

    }


    if(
        origem === "celsius"
        &&
        destino === "fahrenheit"
    ){

        return `
            <strong>1. Use:</strong>
            °F = (°C × 9/5) + 32
            <br><br>

            <strong>2. Substitua:</strong>
            °F = (${formatarNumero(valor)} × 9/5) + 32
            <br><br>

            <strong>3. Resultado:</strong>
            ${formatarNumero(resultado)} °F
        `;

    }


    if(
        origem === "fahrenheit"
        &&
        destino === "celsius"
    ){

        return `
            <strong>1. Use:</strong>
            °C = (°F - 32) × 5/9
            <br><br>

            <strong>2. Substitua:</strong>
            °C = (${formatarNumero(valor)} - 32) × 5/9
            <br><br>

            <strong>3. Resultado:</strong>
            ${formatarNumero(resultado)} °C
        `;

    }


    if(
        origem === "celsius"
        &&
        destino === "kelvin"
    ){

        return `
            <strong>1. Use:</strong>
            K = °C + 273,15
            <br><br>

            <strong>2. Substitua:</strong>
            K = ${formatarNumero(valor)} + 273,15
            <br><br>

            <strong>3. Resultado:</strong>
            ${formatarNumero(resultado)} K
        `;

    }


    if(
        origem === "kelvin"
        &&
        destino === "celsius"
    ){

        return `
            <strong>1. Use:</strong>
            °C = K - 273,15
            <br><br>

            <strong>2. Substitua:</strong>
            °C = ${formatarNumero(valor)} - 273,15
            <br><br>

            <strong>3. Resultado:</strong>
            ${formatarNumero(resultado)} °C
        `;

    }


    if(
        origem === "fahrenheit"
        &&
        destino === "kelvin"
    ){

        const celsius =
        (valor - 32) * 5 / 9;


        return `
            <strong>1. Fahrenheit → Celsius</strong>
            <br>
            °C = (°F - 32) × 5/9
            <br>
            °C = (${formatarNumero(valor)} - 32) × 5/9
            <br>
            °C = ${formatarNumero(celsius)} °C
            <br><br>

            <strong>2. Celsius → Kelvin</strong>
            <br>
            K = °C + 273,15
            <br>
            K = ${formatarNumero(celsius)} + 273,15
            <br><br>

            <strong>Resultado:</strong>
            ${formatarNumero(resultado)} K
        `;

    }


    if(
        origem === "kelvin"
        &&
        destino === "fahrenheit"
    ){

        const celsius =
        valor - 273.15;


        return `
            <strong>1. Kelvin → Celsius</strong>
            <br>
            °C = K - 273,15
            <br>
            °C = ${formatarNumero(valor)} - 273,15
            <br>
            °C = ${formatarNumero(celsius)} °C
            <br><br>

            <strong>2. Celsius → Fahrenheit</strong>
            <br>
            °F = (°C × 9/5) + 32
            <br>
            °F = (${formatarNumero(celsius)} × 9/5) + 32
            <br><br>

            <strong>Resultado:</strong>
            ${formatarNumero(resultado)} °F
        `;

    }

}


// ========================================
// COMPARAÇÃO TRIPLA
// ========================================

function atualizarComparacao(celsius){

    const kelvin =
    celsius + 273.15;


    const fahrenheit =
    (celsius * 9 / 5) + 32;


    comparacaoCelsius.textContent =
    `${formatarNumero(celsius)} °C`;


    comparacaoKelvin.textContent =
    `${formatarNumero(kelvin)} K`;


    comparacaoFahrenheit.textContent =
    `${formatarNumero(fahrenheit)} °F`;

}


// ========================================
// CONVERTER
// ========================================

function converter(){

    if(valorTemperatura.value === ""){

        resultadoPrincipal.textContent =
        "ERRO";

        formulaAtual.textContent =
        "Digite um valor.";

        passoAPasso.textContent =
        "Informe uma temperatura antes de converter.";

        return;

    }


    const valor =
    Number(valorTemperatura.value);


    const origem =
    escalaOrigem.value;


    const destino =
    escalaDestino.value;


    const celsius =
    paraCelsius(valor,origem);


    if(celsius < -273.15){

        resultadoPrincipal.textContent =
        "INVÁLIDO";

        formulaAtual.textContent =
        "Temperatura abaixo do zero absoluto.";

        passoAPasso.textContent =
        "Na escala termodinâmica, valores abaixo de -273,15 °C não são fisicamente válidos.";

        return;

    }


    const resultado =
    deCelsius(celsius,destino);


    resultadoPrincipal.textContent =
    `${formatarNumero(resultado)} ${unidade(destino)}`;


    formulaAtual.textContent =
    obterFormula(origem,destino);


    passoAPasso.innerHTML =
    criarPassos(
        valor,
        origem,
        destino,
        resultado
    );


    atualizarComparacao(celsius);

}


botaoConverter.addEventListener(
    "click",
    converter
);


valorTemperatura.addEventListener(
    "keydown",
    (evento)=>{

        if(evento.key === "Enter"){

            converter();

        }

    }
);


// ========================================
// REFERÊNCIAS REAIS
// ========================================

const referencias =
document.querySelectorAll(
    ".referencia-card"
);


const referenciaDetalhe =
document.getElementById(
    "referenciaDetalhe"
);


referencias.forEach((botao)=>{

    botao.addEventListener(
        "click",
        ()=>{

            const celsius =
            Number(
                botao.dataset.celsius
            );


            const kelvin =
            celsius + 273.15;


            const fahrenheit =
            (celsius * 9 / 5) + 32;


            referenciaDetalhe.innerHTML = `

                <strong>
                    ${botao.querySelector("strong").textContent}
                </strong>

                &nbsp;—&nbsp;

                ${formatarNumero(celsius)} °C
                &nbsp;=&nbsp;
                ${formatarNumero(kelvin)} K
                &nbsp;=&nbsp;
                ${formatarNumero(fahrenheit)} °F

            `;

        }
    );

});


// ========================================
// MINI TREINO
// ========================================

const perguntasTreino = [

    {
        id:"treino-c-f-01",
        pergunta:"Converta 0 °C para Fahrenheit.",
        resposta:32,
        unidade:"°F"
    },

    {
        id:"treino-f-c-01",
        pergunta:"Converta 68 °F para Celsius.",
        resposta:20,
        unidade:"°C"
    },

    {
        id:"treino-c-k-01",
        pergunta:"Converta 27 °C para Kelvin.",
        resposta:300.15,
        unidade:"K"
    },

    {
        id:"treino-k-c-01",
        pergunta:"Converta 310,15 K para Celsius.",
        resposta:37,
        unidade:"°C"
    },

    {
        id:"treino-f-k-01",
        pergunta:"Converta 32 °F para Kelvin.",
        resposta:273.15,
        unidade:"K"
    },

    {
        id:"treino-k-f-01",
        pergunta:"Converta 273,15 K para Fahrenheit.",
        resposta:32,
        unidade:"°F"
    }

];


let indiceTreino = 0;


const perguntaTreino =
document.getElementById(
    "perguntaTreino"
);


const respostaTreino =
document.getElementById(
    "respostaTreino"
);


const unidadeTreino =
document.getElementById(
    "unidadeTreino"
);


const verificarTreino =
document.getElementById(
    "verificarTreino"
);


const novaQuestao =
document.getElementById(
    "novaQuestao"
);


const feedbackTreino =
document.getElementById(
    "feedbackTreino"
);


// progresso do treino

let treinoSalvo =
JSON.parse(
    localStorage.getItem(
        "treinoConversoes"
    )
);


if(!treinoSalvo){

    treinoSalvo = {
        concluidas:[]
    };

}


// ========================================
// MOSTRAR QUESTÃO
// ========================================

function mostrarQuestaoTreino(){

    const questao =
    perguntasTreino[indiceTreino];


    perguntaTreino.textContent =
    questao.pergunta;


    unidadeTreino.textContent =
    questao.unidade;


    respostaTreino.value = "";


    feedbackTreino.textContent = "";

}


// ========================================
// VERIFICAR
// ========================================

verificarTreino.addEventListener(
    "click",
    ()=>{

        const questao =
        perguntasTreino[indiceTreino];


        if(respostaTreino.value === ""){

            feedbackTreino.textContent =
            "Digite uma resposta.";

            return;

        }


        const respostaUsuario =
        Number(
            respostaTreino.value
        );


        const tolerancia = 0.15;


        const acertou =
        Math.abs(
            respostaUsuario
            -
            questao.resposta
        )
        <= tolerancia;


        if(acertou){

            feedbackTreino.textContent =
            "Resposta correta.";


            if(
                !treinoSalvo.concluidas.includes(
                    questao.id
                )
            ){

                treinoSalvo.concluidas.push(
                    questao.id
                );


                localStorage.setItem(
                    "treinoConversoes",
                    JSON.stringify(treinoSalvo)
                );


                adicionarXP(10);


                feedbackTreino.textContent =
                "Resposta correta. +10 XP";

            }

            else{

                feedbackTreino.textContent =
                "Resposta correta. Esta questão já concedeu XP anteriormente.";

            }

        }

        else{

            feedbackTreino.textContent =
            "Ainda não. Revise a fórmula e tente novamente.";

        }

    }
);


// ========================================
// NOVA QUESTÃO
// ========================================

novaQuestao.addEventListener(
    "click",
    ()=>{

        indiceTreino++;


        if(
            indiceTreino >=
            perguntasTreino.length
        ){

            indiceTreino = 0;

        }


        mostrarQuestaoTreino();

    }
);


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
// INICIAR
// ========================================

mostrarQuestaoTreino();