const getTranslation = require("../helpers/getTranslation");
const translateText = async (req, res) => {
  try {
    const { text, target_lang, source_lang } = req.body;
    if (!text) return res.status(400).json({ error: "No text provided" });
    if (!target_lang)
      return res.status(400).json({ error: "No target language provided" });
    const textTranslated = await getTranslation(text, source_lang, target_lang);
    res.json({
      ok: true,
      msg: "Text translated",
      textTranslated,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Translation failed",
      error: error.message,
    });
  }
};

module.exports = translateText;
