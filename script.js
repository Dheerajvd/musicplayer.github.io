const music = document.querySelector('audio');
const play = document.getElementById('play');
const anime = document.querySelector('img');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
let songActive = false;

const songs = [
    {
        name : '1',
        title : 'Kaash aisa Hota',
        artist: 'Darshan Raval'
    },
    {
        name: '2',
        title:'Ek Tarfaa',
        artist: 'Darshan Raval'
    },
    {
        name: '3',
        title:'Tera Zikr',
        artist: 'Darshan Raval'
    },
    {
        name: '4',
        title:'Tu Mileya',
        artist: 'Darshan Raval'
    },
    {
        name: '5',
        title:'El Ladki ko Dekha',
        artist: 'DJ Nyk'
    },
]

const playMusic = ()=>{
    console.log('song start');
    songActive = true;
    console.log(songActive);
    music.play();
    play.classList.replace('fa-play' , 'fa-pause');
    anime.classList.add('anime');
};

// for pause 
const pauseMusic = ()=>{
    console.log('song start');
    songActive = false;
    console.log(songActive);
    music.pause();
    play.classList.replace('fa-pause' , 'fa-play');
    anime.classList.remove('anime');
};

play.addEventListener('click' , ()=>{
    if(songActive){
        pauseMusic();
    }
    else{
        playMusic();
    }
});

const loadSongs = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = './songs/'+ songs.name+ ".mp3";
    anime.src ='./images/'+songs.name+ ".jpg";
}

// loadSongs(songs[4]);
songIndex = 0;

const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

const previousSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

next.addEventListener('click', nextSong);
previous.addEventListener('click', previousSong);
