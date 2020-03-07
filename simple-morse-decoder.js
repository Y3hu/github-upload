const decodeMorse = morseCode => 
  morseCode = morseCode.trim().split('   ').map(w => decodeWord(w)).join(' ') // separate code in words

const decodeWord = word => word.split(' ').map(l => decodeLetter(l)).join('') // separate words in lettes
const decodeLetter = letter => MORSE_CODE[letter] //decode letter