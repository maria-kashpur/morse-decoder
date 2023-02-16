const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let morse = []
   for (let i = 0; i < expr.length; i += 10) {
      let letter = expr.slice(i, i+10);
      letter === '**********' ? letter = " " : letter = String(Number(letter))
      let letterMorse = ''
      for (let l = 0; l < letter.length; l += 2){
         (letter.slice(l, l + 2)) === "10" ? letterMorse += '.' : (letter.slice(l, l + 2)) === "11" ? letterMorse += '-' : letterMorse += " ";
      }
      morse.push(letterMorse)
   }
   return morse = morse
   .map(el => {
      return el === " " ? el : el =  MORSE_TABLE[el]
   })
   .join("")
}

module.exports = {
    decode
}