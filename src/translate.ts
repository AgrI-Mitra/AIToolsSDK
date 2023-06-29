import ComputeAPI from './recorder/Model/ModelSearch/HostedInference';

export async function translate(TRANSLATION_MODEL_ID: string, TEXT: string) {
  const obj = new ComputeAPI(
    TRANSLATION_MODEL_ID, // translation model id
    TEXT, // text to be translated
    'translation', // task
    '',
    '',
    '',
    ''
  );

  try {
    const translationResp = await fetch(obj.apiEndPoint(), {
      method: 'post',
      body: JSON.stringify(obj.getBody()),
      headers: obj.getHeaders().headers,
    });
    let rsp_data = await translationResp.json();
    if (translationResp.ok) {
      return rsp_data.output[0].target;
    } else {
      return console.error(rsp_data);
    }
  } catch (err) {
    return console.error(err);
  }
}
