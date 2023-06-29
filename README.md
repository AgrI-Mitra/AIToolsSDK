## Install

```bash
npm install aitools
```

OR

```bash
yarn add aitools
```

## Usage

```jsx
import AITools from 'aitools';

const App = () => {

  // This converts spoken source speech to text.
  // mode_id_stt = model id for stt
  // base64 = base64 text of audio
  // source_lang_code = short code of spoken language
  const text = await AITools.stt(model_id_stt, base64, source_lang_code);


  // This will translate the text to target language of model passed.
  // model_id_translation = model id of spoken langugage to english translator
  // text = text to be translated
  const translated_txt = await AITools.translate(model_id_translation, text);


  // This gives back number from speech.
  // model_id_stt = model id of spoken langugage
  // base64 = base64 text of audio
  // source_lang_code = short code of spoken language like 'en' for english
  // model_id_translation = model id of spoken langugage to english translator
  const number = await AITools.stn(model_id_stt, base64, source_lang_code, model_id_translation);
  // The stn (Speech to Number) function first converts the speech to its native language text then that text is translated to english and then english words are converted to numbers.
  // Example Flow: STT -> 'एक दो तीन' -> TRANSLATE -> 'one two three' -> STN -> '123'


  // This returns a base64 audio text that can be played in any audio component.
  // model_id_tts = model id for tts
  // text = text to be converted to speech
  // gender = for voice ('male' / 'female')
  const res = await AITools.tts(model_id_tts, text, gender);
  let audio = new Audio(res);
  audio.play();

};
```

## License

MIT
