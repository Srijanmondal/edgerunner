// preload
window.onload = function(){
    preloadImagesFromDirectory('src/');
}

// Files 
const Sunflower = new Audio("src/mp3/Sunflower.mp3") 
const Lustforlife = new Audio("src/mp3/Lust for life.mp3")
const Perfect = new Audio("src/mp3/Perfect.mp3")
const Somethingjustlikethis = new Audio("src/mp3/Something just like this.mp3")
const Saveyourtears = new Audio("src/mp3/Save your Tears.mp3")

// Elements 
const prevbtn = document.querySelector(".previous")
const playpausebtn = document.querySelector(".play-pause")
const nextbtn = document.querySelector(".next")
const banner = document.querySelector(".banner")
const songtitle = document.querySelector(".song-title")
const artist = document.querySelector(".artist")
const playpauseicon = document.querySelector("#play-pause-icon")

//Songs 
const songs = [
  {ele: Sunflower, audioName: "Sunflower", artist: "Post Malone", img: "src/img/Sunflower.jpg"},
  {ele: Lustforlife, audioName: "Lust for life", artist: "Lana Del Rey & The Weeknd", img: "src/img/lust.jpg"},
  {ele: Perfect, audioName: "Perfect", artist: "Ed Sheeran", img: "src/img/Perfect.jpg"},
  {ele: Somethingjustlikethis, audioName: "Something like this", artist: "Cold play", img: "src/img/smtjstlktis.png"},
  {ele: Saveyourtears, audioName: "Save your tears", artist: "The Weeknd", img: "src/img/save your tears.jpg"},
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentsong = songs[current].ele;
songtitle.innerHTML = songs[current].audioName;
artist.innerHTML = songs[current].artist;
banner.src = songs[current].img;


playpausebtn.addEventListener('click', ()=> {
  playPauseSong();
})

prevbtn.addEventListener('click', ()=> {
  updateSong('prev');
  playPauseSong();
})

nextbtn.addEventListener('click', ()=> {
  updateSong('next');
  playPauseSong();
})

const updateSong = (action)=> {
  currentsong.pause();
  currentsong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentsong = songs[current].ele;
  songtitle.innerHTML = songs[current].audioName;
artist.innerHTML = songs[current].artist;
banner.src = songs[current].img;
}

const playPauseSong = ()=> {
  if(currentsong.paused){
    currentsong.play();
    playpauseicon.className = "ph-bold ph-pause";
  }
  else{
    currentsong.pause();
    playpauseicon.className = "ph-bold ph-play";
  }
}



