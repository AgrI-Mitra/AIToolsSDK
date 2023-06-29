// SPEECH TO TEXT
import ComputeAPI from './recorder/Model/ModelSearch/HostedInference';

export async function stt(
  STT_MODEL_ID: string,
  BASE64: string,
  SOURCE_LANG: string
) {
  const obj = new ComputeAPI(
    STT_MODEL_ID, // STT model id
    BASE64, // base64 of speech
    'asr', // task
    true, // boolean record audio
    SOURCE_LANG, // source lang like 'en', 'hi', 'ta' etc.
    '',
    ''
  );
  try {
    const resp = await fetch(obj.apiEndPoint(), {
      method: 'post',
      body: JSON.stringify(obj.getBody()),
      headers: obj.getHeaders().headers,
    });
    let rsp_data = await resp.json();
    if (resp.ok && rsp_data !== null) {
      return rsp_data.data.source;
    } else {
      return console.error(rsp_data);
    }
  } catch (err) {
    return console.error(err);
  }
}
