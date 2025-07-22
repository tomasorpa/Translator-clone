// api/translator.js
import { getTranslation } from "../lib/getTranslation.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { text, target_lang, source_lang } = req.body;

    if (!text) return res.status(400).json({ error: "No text provided" });
    if (!target_lang)
      return res.status(400).json({ error: "No target language provided" });

    const textTranslated = await getTranslation(text, source_lang, target_lang);

    res.status(200).json({
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
}
