// lib/getTranslation.js
import deepl from "deepl-node";

const authKey = process.env.AUTHKEY;
const translator = new deepl.Translator(authKey);

export async function getTranslation(text, sourceLanguage, targetLanguage) {
  if (!text) throw new Error("No text provided");
  const result = await translator.translateText(
    text,
    sourceLanguage,
    targetLanguage
  );
  return result.text;
}
