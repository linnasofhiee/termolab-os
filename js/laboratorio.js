// ========================================
// TERMOLAB OS
// LABORATÓRIO DE TERMOMETRIA
// ========================================


// ========================================
// ELEMENTOS DO SIMULADOR
// ========================================

const sliderTemperatura =
document.getElementById(
    "sliderTemperatura"
);


const temperaturaAtual =
document.getElementById(
    "temperaturaAtual"
);


const termometroLiquido =
document.getElementById(
    "termometroLiquido"
);


const bulboLiquido =
document.getElementById(
    "bulboLiquido"
);


const labCelsius =
document.getElementById(
    "labCelsius"
);


const labKelvin =
document.getElementById(
    "labKelvin"
);


const labFahrenheit =
document.getElementById(
    "labFahrenheit"
);


const estadoSistema =
document.getElementById(
    "estadoSistema"
);


const tituloExplicacao =
document.getElementById(
    "tituloExplicacao"
);


const textoExplicacao =
document.getElementById(
    "textoExplicacao"
);


const particulas =
document.querySelectorAll(
    ".particula"
);



// ========================================
// ATUALIZAR SIMULADOR
// ========================================

function atualizarSimulador(){

    const celsius =
    Number(
        sliderTemperatura.value
    );


    const kelvin =
    celsius + 273.15;


    const fahrenheit =
    (celsius * 9 / 5) + 32;


    temperaturaAtual.textContent =
    celsius;


    labCelsius.textContent =
    `${celsius.toFixed(0)} °C`;


    labKelvin.textContent =
    `${formatarNumero(kelvin,2)} K`;


    labFahrenheit.textContent =
    `${formatarNumero(fahrenheit,1)} °F`;


    atualizarTermometro(celsius);

    atualizarParticulas(celsius);

    atualizarExplicacao(celsius);

}



// ========================================
// TERMÔMETRO
// ========================================

function atualizarTermometro(celsius){

    const minimo = -50;

    const maximo = 100;


    let porcentagem =

    (
        (celsius - minimo)
        /
        (maximo - minimo)
    )

    * 100;


    porcentagem =
    Math.max(
        5,
        Math.min(100,porcentagem)
    );


    termometroLiquido.style.height =
    porcentagem + "%";



    let cor;


    if(celsius <= 0){

        cor = "#62c7ff";

    }

    else if(celsius <= 30){

        cor = "#695cff";

    }

    else if(celsius <= 60){

        cor = "#a455ff";

    }

    else{

        cor = "#ee557f";

    }


    termometroLiquido.style.background =
    cor;


    bulboLiquido.style.background =
    cor;

}



// ========================================
// PARTÍCULAS
// ========================================

function atualizarParticulas(celsius){

    let velocidade;


    if(celsius < 0){

        velocidade = 4.3;

    }

    else if(celsius <= 30){

        velocidade = 2.8;

    }

    else if(celsius <= 60){

        velocidade = 1.7;

    }

    else{

        velocidade = .9;

    }


    particulas.forEach(
        (particula,index)=>{

            particula.style.animation =

            `
            moverParticula
            ${velocidade + index * .06}s
            infinite
            alternate
            ease-in-out
            `;

        }
    );

}



// ========================================
// EXPLICAÇÃO
// ========================================

function atualizarExplicacao(celsius){

    if(celsius < 0){

        estadoSistema.textContent =
        "TEMPERATURA BAIXA";


        tituloExplicacao.textContent =
        "Temperatura baixa";


        textoExplicacao.textContent =

        "A temperatura está abaixo de 0 °C. "
        +
        "Em um modelo microscópico simples, "
        +
        "uma temperatura menor está associada "
        +
        "a uma menor energia cinética média "
        +
        "das partículas.";

    }


    else if(celsius <= 30){

        estadoSistema.textContent =
        "TEMPERATURA MODERADA";


        tituloExplicacao.textContent =
        "Temperatura moderada";


        textoExplicacao.textContent =

        "A temperatura selecionada está em uma "
        +
        "faixa comum no cotidiano. Observe que "
        +
        "o mesmo estado térmico pode ser representado "
        +
        "por valores diferentes nas escalas Celsius, "
        +
        "Kelvin e Fahrenheit.";

    }


    else if(celsius <= 60){

        estadoSistema.textContent =
        "TEMPERATURA ELEVADA";


        tituloExplicacao.textContent =
        "Temperatura elevada";


        textoExplicacao.textContent =

        "Ao aumentar a temperatura, a representação "
        +
        "microscópica mostra partículas mais agitadas. "
        +
        "Em modelos simples, isso ilustra o aumento "
        +
        "da energia cinética média.";

    }


    else{

        estadoSistema.textContent =
        "TEMPERATURA MUITO ELEVADA";


        tituloExplicacao.textContent =
        "Temperatura muito elevada";


        textoExplicacao.textContent =

        "O valor está próximo do limite superior "
        +
        "deste simulador. Compare como a mesma "
        +
        "temperatura é expressa em Celsius, Kelvin "
        +
        "e Fahrenheit.";

    }

}



// ========================================
// SLIDER
// ========================================

sliderTemperatura.addEventListener(
    "input",
    atualizarSimulador
);



// ========================================
// CENÁRIOS DA VIDA REAL
// ========================================

const cenarios = {

    corpo:{

        titulo:
        "Temperatura corporal",

        temperatura:
        37,

        descricao:
        "Termômetros clínicos são utilizados para medir a temperatura corporal. Sensores digitais transformam uma propriedade física dependente da temperatura em uma leitura apresentada no visor.",

        curiosidade:
        "Uma temperatura de 37 °C corresponde aproximadamente a 310,15 K e 98,6 °F."

    },


    freezer:{

        titulo:
        "Freezer",

        temperatura:
        -18,

        descricao:
        "Freezers domésticos geralmente trabalham em temperaturas negativas. Um termômetro permite verificar se o equipamento está mantendo a faixa de temperatura desejada.",

        curiosidade:
        "A temperatura de -18 °C corresponde aproximadamente a 255,15 K e -0,4 °F."

    },


    clima:{

        titulo:
        "Previsão do tempo",

        temperatura:
        30,

        descricao:
        "A temperatura do ar é uma das informações mais conhecidas em uma previsão meteorológica. No Brasil, normalmente utilizamos a escala Celsius.",

        curiosidade:
        "Uma previsão de 30 °C corresponde a 86 °F. Esse tipo de conversão é útil em viagens para países que utilizam Fahrenheit."

    },


    forno:{

        titulo:
        "Forno",

        temperatura:
        180,

        descricao:
        "Fornos possuem sistemas de controle capazes de estimar e regular sua temperatura interna. As escalas utilizadas podem variar conforme o país e o aparelho.",

        curiosidade:
        "180 °C correspondem aproximadamente a 453,15 K e 356 °F."

    },


    gelo:{

        titulo:
        "Água com gelo",

        temperatura:
        0,

        descricao:
        "Em condições padronizadas, o ponto de fusão do gelo é uma referência importante da escala Celsius e corresponde aproximadamente a 0 °C.",

        curiosidade:
        "0 °C correspondem a aproximadamente 273,15 K e 32 °F."

    }

};



// ========================================
// ELEMENTOS CENÁRIOS
// ========================================

const botoesCenario =
document.querySelectorAll(
    ".cenario-card"
);


const cenarioTemperatura =
document.getElementById(
    "cenarioTemperatura"
);


const cenarioKelvin =
document.getElementById(
    "cenarioKelvin"
);


const cenarioFahrenheit =
document.getElementById(
    "cenarioFahrenheit"
);


const cenarioTitulo =
document.getElementById(
    "cenarioTitulo"
);


const cenarioDescricao =
document.getElementById(
    "cenarioDescricao"
);


const cenarioCuriosidade =
document.getElementById(
    "cenarioCuriosidade"
);



// ========================================
// MOSTRAR CENÁRIO
// ========================================

function mostrarCenario(nome){

    const cenario =
    cenarios[nome];


    if(!cenario){
        return;
    }


    const celsius =
    cenario.temperatura;


    const kelvin =
    celsius + 273.15;


    const fahrenheit =
    (celsius * 9 / 5) + 32;



    cenarioTemperatura.textContent =
    `${formatarNumero(celsius,0)} °C`;


    cenarioKelvin.textContent =
    `${formatarNumero(kelvin,2)} K`;


    cenarioFahrenheit.textContent =
    `${formatarNumero(fahrenheit,1)} °F`;


    cenarioTitulo.textContent =
    cenario.titulo;


    cenarioDescricao.textContent =
    cenario.descricao;


    cenarioCuriosidade.textContent =
    cenario.curiosidade;

}



// ========================================
// CLIQUES NOS CENÁRIOS
// ========================================

botoesCenario.forEach(
    (botao)=>{

        botao.addEventListener(
            "click",
            ()=>{


                botoesCenario.forEach(
                    (item)=>{

                        item.classList.remove(
                            "ativo"
                        );

                    }
                );


                botao.classList.add(
                    "ativo"
                );


                mostrarCenario(
                    botao.dataset.cenario
                );

            }
        );

    }
);



// ========================================
// FORMATAÇÃO
// ========================================

function formatarNumero(
    numero,
    casas
){

    return numero
        .toFixed(casas)
        .replace(".",",");

}



// ========================================
// INICIAR
// ========================================

atualizarSimulador();

mostrarCenario("corpo");