// SPEECH TO NUMBER
import { stt } from "./stt";
import { translate } from "./translate";

function wordToNumber(word : string) {
  const numberWords: { [key: string]: number } = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
    billion: 1000000000,
    trillion: 1000000000000,
  };

  const words = word.toLowerCase().split(/[ ,]+/);
  let currentNumber = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // skip these words
    if(word === 'and' || word === 'or') continue;

    if (numberWords[word] || numberWords[word] === 0) {
      currentNumber += numberWords[word];
    } else if (word === 'and') {
      continue;
    } else if (word.includes('-')) {
      const hyphenWords = word.split('-');
      const first = hyphenWords[0];
      const second = hyphenWords[1];
      currentNumber += numberWords[first] + numberWords[second];
    }
  }
  return currentNumber;
}

export async function stn(
  STT_MODEL_ID: string, // stt model id
  BASE64: string, // base64 of speech
  SOURCE_LANG: string, // source language of speech
  TRANSLATION_MODEL_ID: string, // translation model id
  ){
  try{
    const txt = await stt(STT_MODEL_ID, BASE64, SOURCE_LANG);
    const translated_txt = await translate(TRANSLATION_MODEL_ID, txt);
    return wordToNumber(translated_txt);
  }catch(err){
    return console.error(err);
  }
}