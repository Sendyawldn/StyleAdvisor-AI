import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const GEMINI_MODEL = "gemini-2.5-flash";

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`));

app.post("/api/chat", async (req, res) => {
  const { conversation } = req.body;

  try {
    if (!Array.isArray(conversation)) {
      throw new Error("Messages must be an array!");
    }

    const contents = conversation.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents,
      config: {
        temperature: 0.8,
        systemInstruction: `
            Kamu adalah StyleAdvisor, asisten fashion AI personal yang stylish dan berpengalaman.

            TUGASMU:
            - Membantu pengguna memilih outfit yang tepat sesuai acara
            - Memberikan rekomendasi mix & match pakaian
            - Memberikan saran warna yang cocok berdasarkan warna kulit
            - Memberikan tips Do's & Don'ts fashion berdasarkan bentuk tubuh

            CARA KERJAMU:
            - Jika informasi belum lengkap, tanyakan: jenis kelamin (pria/wanita), acara apa, budget berapa, preferensi warna
            - Berikan rekomendasi yang spesifik dengan alasan yang jelas
            - Gunakan emoji fashion yang relevan 👗👔👟✨
            - Selalu semangat dan supportif dalam memberikan saran

            BATASANMU:
            - HANYA bahas topik fashion, outfit, dan penampilan
            - Jika ditanya hal lain, tolak dengan sopan dan arahkan kembali ke topik fashion

            Gunakan Bahasa Indonesia yang friendly, trendy, dan penuh semangat!
        `,
      },
    });

    res.status(200).json({ result: response.text });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
