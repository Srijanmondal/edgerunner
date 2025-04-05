// preload
window.onload = function(){
    preloadImagesFromDirectory('src/img/music/');
}

// Files 
const Sunflower = new Audio("src/mp3/Sunflower.mp3") 
const Lustforlife = new Audio("src/mp3/Lust for life.mp3")
const Perfect = new Audio("src/mp3/Perfect.mp3")
const Somethingjustlikethis = new Audio("src/mp3/Something just like this.mp3")
const Saveyourtears = new Audio("src/mp3/Save your Tears.mp3")
const Chemtrails = new Audio("src/mp3/Chemtrails.mp3")
const Itsnotsobad = new Audio("src/mp3/itsnotsobad.mp3")
const Someoneelse= new Audio("src/mp3/someoneelse.mp3")
const Loveonme = new Audio("src/mp3/loveonme.mp3")
const Thenightwemet= new Audio("src/mp3/nightwemet.mp3")
const Softcore= new Audio("src/mp3/softcore.mp3")
const Unwritten= new Audio("src/mp3/unwritten.mp3")
const Themachine= new Audio("src/mp3/themachine.mp3")
const Baptized= new Audio("src/mp3/Baptized.mp3")

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
  {ele: Sunflower, audioName: "Sunflower", artist: "Post Malone", img: "src/img/music/Sunflower.jpg"},
  {ele: Baptized, audioName: "Baptized in fear", artist: "The Weeknd", img: "src/img/music/hurryuptomorrow.jpg"},
  {ele: Themachine, audioName: "Themachine", artist: "Reed Wonder & Aurora Olivas", img: "src/img/music/themachine.jpg"},
  {ele: Chemtrails, audioName: "Chemtrails", artist: "Lana Del Rey", img: "src/img/music/chemtrails.jpg"},
  {ele: Lustforlife, audioName: "Lust for life", artist: "Lana Del Rey & The Weeknd", img: "src/img/music/lust.jpg"},
  {ele: Thenightwemet, audioName: "The night we met", artist: "Lord Huron", img: "src/img/music/nightwemet.jpg"},
  {ele: Softcore, audioName: "Softcore", artist: "Neighbourhood", img: "src/img/music/softcore.jpg"},
  {ele: Someoneelse, audioName: "Someone else", artist: "The weeknd", img: "src/img/music/dawnfm.jpg"},
  {ele: Unwritten, audioName: "Unwritten", artist: "Natasha Bedingfield", img: "src/img/music/unwritten.jpg"},
  {ele: Loveonme, audioName: "Love on me", artist: "Jtbazz", img: "src/img/music/loveonme.jpg"},
  {ele: Perfect, audioName: "Perfect", artist: "Ed Sheeran", img: "src/img/music/Perfect.jpg"},
  {ele: Itsnotsobad, audioName: "It's not so bad", artist: "Ilkay Sencan and Yves V", img: "src/img/music/itsnotsobad.jpg"},
  {ele: Somethingjustlikethis, audioName: "Something like this", artist: "Cold play", img: "src/img/music/smtjstlktis.png"},
  {ele: Saveyourtears, audioName: "Save your tears", artist: "The Weeknd", img: "src/img/music/save your tears.jpg"},
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



