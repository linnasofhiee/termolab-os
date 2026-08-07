// ========================================
// TERMOLAB OS
// BIBLIOTECA DE VIDEOAULAS
// ========================================


let videos = [];

let temaAtual = "todos";



// ========================================
// ELEMENTOS
// ========================================

const gradeVideos =
document.getElementById("gradeVideos");


const buscarVideo =
document.getElementById("buscarVideo");


const contadorVideos =
document.getElementById("contadorVideos");


const nenhumVideo =
document.getElementById("nenhumVideo");


const filtros =
document.querySelectorAll(".filtro-video");


const videoDetalhes =
document.getElementById("videoDetalhes");


const fecharVideo =
document.getElementById("fecharVideo");


const youtubePlayer =
document.getElementById("youtubePlayer");


const linkYoutube =
document.getElementById("linkYoutube");



// ========================================
// CARREGAR JSON
// ========================================

async function carregarVideos(){

    try{

        const resposta =
        await fetch(
            "data/videos.json"
        );


        if(!resposta.ok){

            throw new Error(
                "Erro ao carregar videos.json"
            );

        }


        videos =
        await resposta.json();


        mostrarVideos();

    }


    catch(erro){

        console.error(erro);


        gradeVideos.innerHTML = `

            <div class="nenhum-video"
                 style="display:block;">

                Não foi possível carregar
                as videoaulas.

                <br><br>

                Verifique se o projeto está
                aberto pelo Live Server.

            </div>

        `;

    }

}



// ========================================
// FILTRAGEM
// ========================================

function obterVideosFiltrados(){

    const pesquisa =

    buscarVideo
        .value
        .toLowerCase()
        .trim();


    return videos.filter((video)=>{


        const correspondeTema =

        temaAtual === "todos"

        ||

        video.tema === temaAtual;



        const conteudoPesquisa =

        `
            ${video.titulo}
            ${video.descricao}
            ${video.temaNome}
            ${video.canal}
        `

        .toLowerCase();



        const correspondePesquisa =

        conteudoPesquisa.includes(
            pesquisa
        );


        return (

            correspondeTema

            &&

            correspondePesquisa

        );

    });

}



// ========================================
// CRIAR CATÁLOGO
// ========================================

function mostrarVideos(){

    const filtrados =
    obterVideosFiltrados();


    gradeVideos.innerHTML = "";


    contadorVideos.textContent =
    filtrados.length;



    if(filtrados.length === 0){

        nenhumVideo.style.display =
        "block";

        return;

    }


    nenhumVideo.style.display =
    "none";



    filtrados.forEach((video)=>{


        const card =
        document.createElement(
            "article"
        );


        card.classList.add(
            "video-card"
        );



        const thumbnail =

        `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;



        card.innerHTML = `

            <div class="video-thumbnail">

                <img
                    src="${thumbnail}"
                    alt="Miniatura da videoaula ${video.titulo}"
                    loading="lazy"
                >


                <div class="thumbnail-overlay">

                    <div class="play-card"></div>

                </div>

            </div>



            <div class="video-card-conteudo">


                <span class="video-tema">

                    ${video.temaNome.toUpperCase()}

                </span>


                <h2>
                    ${video.titulo}
                </h2>


                <p>
                    ${video.descricao}
                </p>


                <div class="video-meta">

                    <span>
                        ${video.nivel}
                    </span>

                    <span>
                        ${video.canal}
                    </span>

                </div>


                <button
                    type="button"
                    class="abrir-video"
                >
                    ASSISTIR VIDEOAULA
                </button>


            </div>

        `;



        const botao =
        card.querySelector(
            ".abrir-video"
        );


        botao.addEventListener(
            "click",
            ()=>abrirVideo(video)
        );



        gradeVideos.appendChild(
            card
        );

    });

}



// ========================================
// ABRIR VIDEOAULA
// ========================================

function abrirVideo(video){

    document.getElementById(
        "arquivoVideo"
    ).textContent =

    `VIDEO_${String(video.id).padStart(2,"0")}.EXE`;



    document.getElementById(
        "detalheTitulo"
    ).textContent =
    video.titulo;



    document.getElementById(
        "detalheTema"
    ).textContent =
    video.temaNome.toUpperCase();



    document.getElementById(
        "detalheNivel"
    ).textContent =
    video.nivel.toUpperCase();



    document.getElementById(
        "detalheDuracao"
    ).textContent =
    video.duracao.toUpperCase();



    document.getElementById(
        "detalheDescricao"
    ).textContent =
    video.descricao;



    document.getElementById(
        "detalheCanal"
    ).textContent =
    video.canal;



    youtubePlayer.src =

    `https://www.youtube.com/embed/${video.youtubeId}?rel=0`;



    linkYoutube.href =

    `https://www.youtube.com/watch?v=${video.youtubeId}`;



    videoDetalhes.classList.add(
        "aberto"
    );



    setTimeout(()=>{

        videoDetalhes.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    },50);

}



// ========================================
// FECHAR VIDEOAULA
// ========================================

fecharVideo.addEventListener(
    "click",
    ()=>{


        videoDetalhes.classList.remove(
            "aberto"
        );


        // Para o vídeo quando fecha

        youtubePlayer.src = "";


    }
);



// ========================================
// PESQUISA
// ========================================

buscarVideo.addEventListener(
    "input",
    ()=>{

        mostrarVideos();

    }
);



// ========================================
// FILTROS
// ========================================

filtros.forEach((botao)=>{


    botao.addEventListener(
        "click",
        ()=>{


            filtros.forEach((item)=>{

                item.classList.remove(
                    "ativo"
                );

            });



            botao.classList.add(
                "ativo"
            );



            temaAtual =
            botao.dataset.tema;



            mostrarVideos();

        }
    );

});



// ========================================
// INICIAR
// ========================================

carregarVideos();