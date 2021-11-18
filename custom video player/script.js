const video = document.getElementById("video")
const play = document.getElementById("play")
const stop = document.getElementById("stop")
const progress = document.getElementById("progress")
const timestamp = document.getElementById("timestamp")

//play and pause video

function toggleVideoStatus1(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
    
}

// play icon update

function upateplayicon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// update progress bar

function updateprogressbar(){
    
    progress.value = (video.currentTime / video.duration)*100;

    let mins = Math.floor(video.currentTime / 60)
    if(mins < 10){
        mins = '0'+String(mins)
    }

    let secs = Math.floor(video.currentTime % 60)
    if(mins < 10){
        secs = '0'+String(secs)
    }

    timestamp.innerHTML = `${mins}:${secs}`

}

// stop video

function stopvideo(){
    video.currentTime =0;
    video.pause()
}

// timestamp change

function setVideoProgress(){

    video.currentTime = (+progress.value*video.duration)/100
}


//event listeners
video.addEventListener('click' , toggleVideoStatus1)
video.addEventListener('pause' , upateplayicon)
video.addEventListener('play' , upateplayicon)
video.addEventListener('timeupdate' , updateprogressbar)

play.addEventListener('click' , toggleVideoStatus1)

stop.addEventListener('click' , stopvideo)

progress.addEventListener('change', setVideoProgress)