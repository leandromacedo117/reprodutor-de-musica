var musicas = {
    1: ["Skyfall", "Adele", "../songs/jujutsu.mp3", "../img/jujutsuKaisen.jpg"],
    2: ["Empty Bed", "Adele", "../songs/kali uchis - telepatía (slowed n reverb)(MP3_160K).mp3", "../img/jujutsuKaisen.jpg"],
    3: ["Por Supuesto", "Adele", "../songs/jujutsu.mp3", "../img/jujutsuKaisen.jpg"],
    4: ["Cachimbo da paz", "Marina Sena", "../songs/jujutsu.mp3", "../img/jujutsuKaisen.jpg"],
    5: ["Me deixa", "Marina Sena", "../songs/jujutsu.mp3", "../img/jujutsuKaisen.jpg"]
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
    img.setAttribute('src', '../img/square.png');
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
            index = 14
        }
        renderizarMusic(index)
        playMusic()
        })

        document.querySelector(".next").addEventListener("click", () => {
        index++
        if(index > 15) {
            index = 0
        }
        renderizarMusic(index)
        playMusic()
        
        })

        // functions
        function renderizarMusic(indexPosition){
            audio.setAttribute('src' , musicas[indexPosition][2])
            document.getElementById("musicName").innerHTML = musicas[indexPosition][0];
            document.getElementById("musicAuthor").innerHTML = musicas[indexPosition][1];
            document.getElementById("songImg").innerHTML = musicas[indexPosition][3];
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
