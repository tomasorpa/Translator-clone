const deepl = require("deepl-node");

const authKey = process.env.AUTHKEY;
const translator = new deepl.Translator(authKey);
const getTranslation = async (text, sourceLanguage, language) => {
  if (!text) throw new Error("No text provided");
  const result = await translator.translateText(text, sourceLanguage, language);
  return result.text;
};
module.exports = getTranslation;
