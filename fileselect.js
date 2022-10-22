
const tone = ['C2','Cs2','D2','Ds2','E2','F2','Fs2','G2','Gs2','A2','As2','B2',
'C3','Cs3','D3','Ds3','E3','F3','Fs3','G3','Gs3','A3','As3','B3'];

/* prepared the number code */
const prepared_note = 24;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var note_num = [];

note_num[0] = getRandomInt(prepared_note);

do {
  note_num[1] = getRandomInt(prepared_note);
} while (note_num[1] == note_num[0]);

do {
  note_num[2] = getRandomInt(prepared_note);
} while ((note_num[2] == note_num[0])||(note_num[2] == note_num[1]));

do {
  note_num[3] = getRandomInt(prepared_note);
} while ((note_num[3] == note_num[2])||(note_num[3]== note_num[1])||(note_num[3] == note_num[0]));

note_num.sort(((a, b) => a - b));
var file1 = tone[note_num[0]]+'.mp3'
var file2 = tone[note_num[1]]+'.mp3'
var file3 = tone[note_num[2]]+'.mp3'
var file4 = tone[note_num[3]]+'.mp3'

console.log(note_num);
console.log(file1);
console.log(file2);
console.log(file3);
console.log(file4);
