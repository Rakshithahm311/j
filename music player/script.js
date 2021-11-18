const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progess-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['hey' , 'summer' , 'ukulele']

let songIndex = 2

loadSong(songs[songIndex])

function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`;
    cover.src=`images/${song}.jpg`
}



function playsong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play()

}

function pausesong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause()

}

playBtn.addEventListener('click' , ()=>{
    let isplaying =  musicContainer.classList.contains('play')
    if(isplaying){
        pausesong();
    }else{
        playsong()
    }
})

function nextsong(){
    songIndex++
    if(songIndex == songs.length){
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playsong()
}

function previoussong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length -1
    }
    loadSong(songs[songIndex])
    playsong()

}

function updateprogress(e){
    const {duration , currentTime} = e.srcElement;
    let progresspercent = (currentTime / duration)*100
    progress.style.width = `${progresspercent}%`;
}

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
}

prevBtn.addEventListener('click' , previoussong)
nextBtn.addEventListener('click' , nextsong)


// update progress

 audio.addEventListener('timeupdate' , updateprogress)
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended' , nextsong)