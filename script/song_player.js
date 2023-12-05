let music = [
  {
    src :"../songs/jujutsu.mp3",
    name : " JUJUTSU KAISEN - Opening | kaikai kitan ",
    author : "Eve",
    img : "../img/jujutsuKaisen.jpg",
  },

  {
    src : "../songs/kali uchis - telepatía (slowed n reverb)(MP3_160K).mp3",
    name : " Leno Brega - Trepada em Cuiabá ",
    author: "tes",
    img : "../img/jujutsuKaisen.jpg",
  },
]

let index = 0
const audio = document.querySelector("audio")
const playButton = document.querySelector(".play-button")
const pauseButton = document.querySelector(".pause-button")

let imagem = document.querySelector("img")
let nameMusic = document.querySelector(" .description h2")
let nameAuthor = document.querySelector(" .description i") 
// Event 

let duraationMusic = document.querySelector(".end")
duraationMusic.textContent = segundsforMinutes(Math.floor(audio.duration))

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
  audio.setAttribute('src' ,music[indexPosition].src)
  audio.addEventListener("loadeddata" , () =>{
    nameMusic.textContent = music[indexPosition].name
    nameAuthor.textContent = music[indexPosition].author
    imagem.src = music[indexPosition].img
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


