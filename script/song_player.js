import songs from "./music.js"


const prevButton = document.querySelector("#prev-button")
const playPauseButton = document.querySelector("#play-pause-button")
const nextButton = document.querySelector("#next-button")

const player = document.querySelector("#player")
const duration = document.querySelector("#duration")
const musicName = document.querySelector("#music-name")
const currentTime = document.querySelector("#current-time")
const progressBar = document.querySelector("#progress-bar")
const progress = document.querySelector("#progress")

const textButtonPlay = "<i class='bx bx-caret-right'></i>";
const textButtonPause = "<i class='bx bx-pause'></i>";


let index = 0;

prevButton.onclick = () => nextMusic("prev");
nextButton.onclick = () => nextMusic();

playPauseButton.onclick = () => playPause();


const playPause = () => {
  if (player.paused) {
    player.play();
    playPauseButton.innerHTML = textButtonPause;
  } else {
    player.pause();
    playPauseButton.innerHTML = textButtonPlay;
  }
};

player.ontimeupdate = () => updateTime();

const updateTime = () =>{
  const currentMinutes = Math.floor(player.currentTime / 60);
  const currentSeconds = Math.floor(player.currentTime % 60);
  currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);

  const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
  const durationMinutes = Math.floor(durationFormatted / 60);
  const durationSeconds = Math.floor(durationFormatted % 60);
  duration.textContent = durationMinutes + ":" + formatZero(durationSeconds);

  const progressWidth = durationFormatted
    ? (player.currentTime / durationFormatted) * 100
    : 0;

  progress.style.width = progressWidth + "%";
}

// zerar index
 const formatZero = (num) =>(num < 15 ? "0" + num : num)
 

const nextMusic = (type = "next") => {
  if ((type == "next" && index + 1 === songs.length) || type === "init") {
    index = 0;
  } else if (type == "prev" && index === 0) {
    index = songs.length;
  } else {
    index = type === "prev" && index ? index - 1 : index + 1;
  }

  player.src = songs[index].src;
  musicName.innerHTML = songs[index].name;
  if (type !== "init") playPause();

   updateTime();
};

nextMusic("init");