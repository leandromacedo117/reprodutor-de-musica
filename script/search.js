var musicas = {
    1: ["Jujutsu Kaisen", "Eve", "../songs/jujutsu.mp3", "../img/jujutsuKaisen.jpg"],
    2: ["Amiga Da Minha Mulher", "Seu Jorge", "../songs/Amiga da Minha Mulher.mp3", "../img/2.jpg"],
    3: ["Cypher 4", "BTS", "../songs/BTS Cypher 4.mp3", "../img/3.jpg"],
    4: ["Can You Feel My Heart", "Bring Me The Horizon", "../songs/Can You Feel My Heart.mp3", "../img/4.jpg"],
    5: ["Trepada Em Cuiabá", "Leno Brega", "../songs/Trepada em Cuiabá.mp3", "../img/5.jpg"],
    6: ["Chop Suey", "System Of A Down", "../songs/Chop Suey!.mp3", "../img/6.jpg"],
    7: ["Cupid", "FIFTY FIFTY", "../songs/Cupid.mp3", "../img/7.jpg"],
    8: ["Dimble", "BTS", "../songs/Dimble.mp3", "../img/8.jpg"],
    9: ["DNA", "BTS", "../songs/DNA.mp3", "../img/9.jpg"],
    10: ["Euphoria", "BTS", "../songs/Euphoria.mp3", "../img/10.jpg"],
    11: ["Evidências", "Chitãozinho E Xororó", "../songs/Evidências.mp3", "../img/11.jpg"],
    12: ["Fake Love", "BTS", "../songs/Fake Love.mp3", "../img/12.jpg"],
    13: ["For Whom The Bell Tolls", "Metallica", "../songs/For Whom The Bell Tolls.mp3", "../img/13.jpg"],
    14: ["Telepatía", "Kali Uchis", "../songs/Telepatía.mp3", "../img/14.jpg"],
    15: ["Numb", "Linkin Park", "../songs/Numb.mp3", "../img/15.jpg"],
    16: ["Mina Do Condomínio", "Seu Jorge", "../songs/Mina do Condomínio.mp3", "../img/16.jpg"],
    17: ["Não Quero Dinheiro", "Tim Maia", "../songs/Não quero Dinheiro.mp3", "../img/17.jpg"],
    18: ["Nem De Graça", "Pixote", "../songs/Nem de Graça.mp3", "../img/18.jpg"],
    19: ["Pense Em Mim", "Leandro e Leonardo", "../songs/Pense em mim.mp3", "../img/19.jpg"],
    20: ["Cheia De Manias", "Raça Negra", "../songs/Cheia de Manias.mp3", "../img/20.jpg"],
    21: ["Welcome To The Jungle", "Guns N' Roses", "../songs/Welcome to the Jungle.mp3", "../img/21.jpg"],
    22: ["Wings", "BTS", "../songs/Wings.mp3", "../img/22.jpg"]
};

function search(searched) {  
    document.getElementById("search_result").innerHTML = "";
    for (let i = 1; i <= Object.keys(musicas).length; i++) {
        console.log(musicas[i][0], searched);
        if(musicas[i][0] === searched) {
            cardBuilder(i);
        } else if(musicas[i][1] === searched) {
            cardBuilder(i);
        }
    }
}

function cardBuilder(value) {

    // Criando elementos: 
    var a_result = document.createElement('a');
    var div_result = document.createElement('div');
    var div_result_content = document.createElement('div');
    var img =document.createElement('img');
    var p_name = document.createElement('p');
    var p_author = document.createElement('p');

    // Colocando conteúdo:
    p_name.innerHTML = musicas[value][0];
    p_author.innerHTML = musicas[value][1];
    img.setAttribute('src', musicas[value][3]);
    a_result.setAttribute('href', "../pages/music.html");
    a_result.setAttribute('data-internalid', value);
    a_result.setAttribute('onClick', 'changePage(this)');

    // Setando classes:
    img.setAttribute('class', 'result_img');
    p_name.setAttribute('class', 'result_name');
    p_author.setAttribute('class', 'result_author');
    div_result_content.setAttribute('class', 'result_content');
    div_result.setAttribute('class', 'result');
    a_result.setAttribute('class', 'result_link')
    
    // Encadeando:
    a_result.appendChild(div_result);
    div_result.appendChild(img);
    div_result.appendChild(div_result_content);
    div_result_content.appendChild(p_name);
    div_result_content.appendChild(p_author);
    
    // Executando:
    document.getElementById("search_result").appendChild(a_result);
}

function changePage(element) {
    localStorage.setItem('music_value', element.getAttribute("data-internalid"));
}

function musicPage() {

    let index = localStorage.getItem('music_value');

        const audio = document.querySelector("audio")
        const playButton = document.querySelector(".play-button")
        const pauseButton = document.querySelector(".pause-button")

        renderizarMusic(index)

        let imagem = document.querySelector("img")
        let nameMusic = document.querySelector(" .description h2")
        let nameAuthor = document.querySelector(" .description i") 
        // Event 

        let duraationMusic = document.querySelector(".end")
        duraationMusic.textContent = segundsforMinutes(Math.floor(audio.duration))

        updateBar()

        // tocar Musica
        playButton.addEventListener("click", function() {
        playMusic()
        playButton.classList.toggle("hide")
        pauseButton.classList.toggle("hide")
        
        })

        // pausar musica
        pauseButton.addEventListener("click" , function(){
        pauseMusic()
        pauseButton.classList.toggle("hide")
        playButton.classList.toggle("hide")
        })

        audio.addEventListener("timeupdate", updateBar)

        document.querySelector(".prev").addEventListener("click", () => {
        index--
        if(index < 0){
            index = 21
            playButton.classList.toggle("hide")
            pauseButton.classList.toggle("hide")
             
        }
        renderizarMusic(index)
        playMusic()
        })

        document.querySelector(".next").addEventListener("click", () => {
        index++
        if(index > 22) {
            index = 0
            playButton.classList.toggle("hide")
            pauseButton.classList.toggle("hide")

        }
        renderizarMusic(index)
        playMusic()
        
        })

        // functions
        function renderizarMusic(indexPosition){
            audio.setAttribute('src' , musicas[indexPosition][2])
            document.getElementById("musicName").innerHTML = musicas[indexPosition][0];
            document.getElementById("musicAuthor").innerHTML = musicas[indexPosition][1];
            document.getElementById("songImg").setAttribute("src", musicas[indexPosition][3])
            audio.addEventListener("loadeddata" , () =>{
            // nameMusic.textContent = music[indexPosition].name
            // nameAuthor.textContent = music[indexPosition].author
            // imagem.src = music[indexPosition].img
            duraationMusic.textContent = segundsforMinutes(Math.floor(audio.duration))
        })
        }

        const playMusic = () =>{
        audio.play()
        }

        const pauseMusic = () =>{
        audio.pause()
        }

        // carregando Barra...
        function updateBar(){
            let bar = document.querySelector("progress")
            bar.style.width = Math.floor((audio.currentTime / audio.duration) * 100) + '%'
            let currentTimes = document.querySelector(".init")
            currentTimes.textContent = segundsforMinutes(Math.floor(audio.currentTime))
        }

        function segundsforMinutes(segundos){
            let minutes = Math.floor(segundos / 60)
            let segunds = segundos % 60

        if(segunds < 10 ){
            segunds =  '0' +segunds
        }

        return minutes+ ':' +segunds
        }



}
