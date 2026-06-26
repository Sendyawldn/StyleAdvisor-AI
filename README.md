<div align="center">
  <img src="https://img.icons8.com/color/96/000000/hanger.png" alt="Logo" width="80" height="80">
  <h1 align="center">✨ StyleAdvisor AI ✨</h1>
  <p align="center">
    <strong>Your Personal Fashion Assistant, Powered by Gemini AI.</strong>
    <br />
    A beautifully designed, smart web application to help you pick the perfect outfit for any occasion.
  </p>

  <p align="center">
    <a href="#features"><strong>✨ Features</strong></a> ·
    <a href="#tech-stack"><strong>💻 Tech Stack</strong></a> ·
    <a href="#installation"><strong>🚀 Installation</strong></a> ·
    <a href="#usage"><strong>🎨 Usage</strong></a>
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
    <img src="https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini API" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </p>
</div>

<hr />

## 🌟 Overview
**StyleAdvisor AI** is an interactive, AI-driven chatbot that acts as your personal stylist. Whether you're struggling to find an outfit for a date, looking for the best colors for your skin tone, or need tips for a smart-casual event, StyleAdvisor is here to help! 

It features a **premium dark-mode Glassmorphism UI**, offering an incredibly aesthetic and seamless user experience.

---

## ✨ Features
- 👗 **Smart Fashion Advice**: Get tailored outfit recommendations for any occasion.
- 🎨 **Mix & Match Master**: Suggestions based on color palettes, skin tone, and body types.
- 💎 **Premium Aesthetic UI**: Stunning dark mode with glassmorphism effects and smooth micro-animations.
- ⚡ **Lightning Fast Responses**: Powered by Google's cutting-edge Gemini API.
- 📱 **Fully Responsive**: Beautifully crafted layout that looks amazing on both desktop and mobile devices.

---

## 💻 Tech Stack
- **Frontend**: HTML5, CSS3 (Glassmorphism design), Vanilla JavaScript.
- **Backend**: Node.js, Express.js.
- **AI Integration**: Google Gen AI SDK (`@google/genai`).
- **Libraries/Assets**: `marked.js` (for parsing markdown), FontAwesome (Icons), Google Fonts (Outfit).

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sendyawldn/StyleAdvisor-AI.git
   cd StyleAdvisor-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   *(Ensure you have Node.js installed on your machine)*

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Google Gemini API Key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the server**
   ```bash
   node index.js
   ```
   *The server will start on `http://localhost:3000`.*

---

## 🎨 Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Type in your fashion dilemma! Example prompts:
   - *"Aku mau pergi ke acara pernikahan teman malam ini, bagusnya pakai baju warna apa ya?"*
   - *"Gimana cara mix & match celana kulot hitam biar kelihatan casual tapi rapi?"*
   - *"Tolong kasih rekomendasi outfit untuk wawancara kerja buat pria dong!"*
3. Watch as StyleAdvisor AI generates a stylish, formatted response specifically for you!

---

<div align="center">
  <i>"Fashion fades, style is eternal." - Yves Saint Laurent</i>
  <br/><br/>
  <b>Built with ❤️ and Style.</b>
</div>
