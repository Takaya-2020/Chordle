'use strict';

const tone = ['C2','Cs2','D2','Ds2','E2','F2','Fs2','G2','Gs2','A2','As2','B2',
'C3','Cs3','D3','Ds3','E3','F3','Fs3','G3','Gs3','A3','As3','B3'];

/* prepared the number code */
const prepared_note = 24;
const startnote = 48;



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var note_num = [];

note_num[0] = getRandomInt(prepared_note)+startnote;

do {
  note_num[1] = getRandomInt(prepared_note)+startnote;
} while (note_num[1] == note_num[0]);

do {
  note_num[2] = getRandomInt(prepared_note)+startnote;
} while ((note_num[2] == note_num[0])||(note_num[2] == note_num[1]));

do {
  note_num[3] = getRandomInt(prepared_note)+startnote;
} while ((note_num[3] == note_num[2])||(note_num[3]== note_num[1])||(note_num[3] == note_num[0]));

note_num.sort(((a, b) => a - b));
var file1 = tone[note_num[0]-startnote]+'.mp3'
var file2 = tone[note_num[1]-startnote]+'.mp3'
var file3 = tone[note_num[2]-startnote]+'.mp3'
var file4 = tone[note_num[3]-startnote]+'.mp3'

console.log(note_num);
console.log(file1);
console.log(file2);
console.log(file3);
console.log(file4);

// 要素
const music1 = new Audio('musics/'+file1);
const music2 =new Audio('musics/'+file2);
const music3 =new Audio('musics/'+file3);
const music4 =new Audio('musics/'+file4);
const play = document.getElementById('play');


// 再生ボタン

play.addEventListener('click', function(){ //再生のみ
    music1.play();
    music2.play();
    music3.play();
    music4.play();
});
//キーボード本体
keyboardwidget()


//Chordle入れるとこ

const tone2 = ['C2','C#2','D2','D#2','E2','F2','F#2','G2','G#2','A2','A#2','B2',
'C3','C#3','D3','D#3','E3','F3','F#3','G3','G#3','A3','A#3','B3'];

const NUMBER_OF_GUESSES = 3;
const NUMBER_OF_TONE = 4

let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextTone = 0;
let rightGuessString= [1,3,7,9]

initBoard()
const test1 = tone2[1]
const test2 = tone2[2]
const test3 = tone2[3]
const test4 = tone2[4]
insertChord(test1,1)
insertChord(test2,2)
insertChord(test3,3)
insertChord(test4,4)
