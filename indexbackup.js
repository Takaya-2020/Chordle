'use strict';

// 要素
const music = new Audio('musics/music.mp3');
const music2 =new Audio('musics/music2.mp3');
const play = document.getElementById('play');
const play2 = document.getElementById('play2');
const volumeUp = document.getElementById('volume-up');
const volumeDown = document.getElementById('volume-down');
const mute = document.getElementById('mute');

// 再生ボタン
play.addEventListener('click', function(){
  if(!music.paused){
    play.innerHTML ="再生";
    music.pause();
  }else{
    play.innerHTML = "停止";
    music.play();
  }
});
play2.addEventListener('click', function(){
  if(!music2.paused){
    music2.pause();
  }else{
    music2.play();
  }
});

// 音量ボタン
volumeUp.addEventListener('click', function(){
  const volume = music.volume;
  if(volume < 1){
    music.volume = (volume * 10 + 1) / 10;
  }
});
volumeDown.addEventListener('click', function(){
  const volume = music.volume;
  if(volume > 0){
    music.volume = (volume * 10 - 1) / 10;
  }
});

// ミュートボタン
mute.addEventListener('click', function(){
  if(music.muted){
    music.muted = false;
    mute.innerHTML = '<i class="fas fa-volume-mute">';
  }else{
    music.muted = true;
    mute.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
});
