# 🤖 NexusAI — Rule-Based Chatbot

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

> A fully functional, beautifully designed AI chatbot powered by **rule-based pattern matching** and **NLP heuristics** — built with pure HTML, CSS, and JavaScript. No frameworks. No API keys. No backend.

---

## 📸 Preview

```
┌─────────────────────────────────────────────────────┐
│  NexusAI  ●  Ready to chat                   🗑️ 🌙  │
├──────────────┬──────────────────────────────────────┤
│              │                                      │
│  Quick       │   Hello! I'm NexusAI 👋              │
│  Topics      │   Your intelligent rule-based        │
│              │   assistant.                         │
│  👋 Greet    │                                      │
│  🌤️ Weather  │   [Say Hello] [Joke] [Help] [Fact]   │
│  🧮 Math     │                                      │
│  🕐 Time     │                                      │
│  😄 Jokes    │                                      │
│  🔬 Facts    │                                      │
│              │  ┌──────────────────────────────┐   │
│  ● Online    │  │ Ask me anything…          ➤  │   │
└──────────────┴──┴──────────────────────────────┴───┘
```

---

## ✨ Features

- 🧠 **Rule-Based Engine** — 12+ rule categories with regex pattern matching
- 💬 **Natural Language Understanding** — Handles varied phrasing for each intent
- 🧮 **Safe Math Solver** — Evaluates arithmetic without using `eval()`
- 😄 **Jokes & Fun Facts** — 15+ jokes and 15+ curated fun facts
- ⏰ **Live Date & Time** — Real-time clock using the browser's Date API
- 🔄 **Context Manager** — Tracks conversation flow and sends follow-up suggestions
- 🌙 **Dark / Light Theme** — Toggle between themes with smooth transitions
- 📱 **Fully Responsive** — Works on desktop, tablet, and mobile
- ⚡ **Zero Dependencies** — Pure HTML, CSS, JS — no npm, no build step
- 🎨 **Premium UI** — Glassmorphism, ambient orbs, smooth animations

---

## 🧠 How It Works

NexusAI uses a **5-component architecture**:

```
User Input
    │
    ▼
┌─────────────────────┐
│   Rule Engine       │  ← Matches input against 12+ regex rule sets
└────────┬────────────┘
         │
    ┌────▼────┐    ┌──────────────┐    ┌───────────────┐
    │  Math   │    │  Knowledge   │    │    Context    │
    │ Solver  │    │    Base      │    │   Manager     │
    └────┬────┘    └──────┬───────┘    └───────┬───────┘
         │                │                    │
         └────────────────▼────────────────────┘
                          │
                    ┌─────▼──────┐
                    │  UI Layer  │  ← Renders bubbles, animations, typing
                    └────────────┘
```

| Component | Responsibility |
|---|---|
| **Knowledge Base** | Jokes, facts, greetings, farewells, insult handling |
| **Rule Engine** | Regex-based intent detection across 12 categories |
| **Math Solver** | Recursive descent parser — safe arithmetic evaluation |
| **Context Manager** | Tracks message count, last category, follow-up triggers |
| **UI Controller** | DOM rendering, theme toggle, sidebar, responsive layout |

---

## 💬 Supported Intents

| Intent | Example Phrases |
|---|---|
| 👋 Greeting | `hi`, `hello`, `good morning`, `what's up` |
| 👋 Farewell | `bye`, `goodbye`, `see you`, `take care` |
| 😄 Jokes | `tell me a joke`, `make me laugh`, `something funny` |
| 🔬 Fun Facts | `fun fact`, `did you know`, `tell me something interesting` |
| 🧮 Math | `12 * 8 + 5`, `(100 / 4) ** 2`, `calculate 99 / 3` |
| ⏰ Date & Time | `what time is it?`, `what's today?`, `current date` |
| 🌤️ Weather | `weather`, `is it raining?`, `temperature` |
| 🤖 Bot Status | `how are you?`, `are you okay?`, `what's new` |
| ℹ️ Identity | `who are you?`, `are you a bot?`, `what are you` |
| ❓ Help | `help`, `what can you do?`, `capabilities` |
| 🙏 Thanks | `thanks`, `thank you`, `you're awesome` |
| 💜 Compliments | `you're smart`, `best chatbot`, `I love this` |

---

## 🗂️ Project Structure

```
Ai chatbot/
├── index.html      # App shell — layout, sidebar, chat area, input
├── style.css       # Premium design system — dark mode, animations
├── chatbot.js      # Chatbot engine — rules, math, context, UI
└── README.md       # You are here!
```

---

## 🚀 Getting Started

### Option 1 — Open Directly (Simplest)
```bash
# Just open index.html in your browser
start index.html       # Windows
open index.html        # macOS
```

### Option 2 — Live Server with Node.js
```bash
# Requires Node.js installed
npx serve . --listen 3000
# Then open http://localhost:3000
```

### Option 3 — Python HTTP Server
```bash
# Requires Python 3
python -m http.server 8000
# Then open http://localhost:8000
```

### Option 4 — VS Code Live Server
Install the **Live Server** extension → Right-click `index.html` → **Open with Live Server**

---

## 🔧 Customization Guide

### ➕ Add New Rules
Open `chatbot.js` and add an entry to the `RULES` array:

```javascript
{
  id: 'myNewRule',
  patterns: [
    /\b(your|trigger|words)\b/i,
  ],
  category: 'info',
  tag: 'tag-info',
  tagLabel: '🎯 My Rule',
  handler: () => "Your custom response here!",
},
```

### ➕ Add New Jokes or Facts
Find `KB.jokes` or `KB.facts` in `chatbot.js` and append to the array:

```javascript
jokes: [
  // existing jokes...
  "Your new joke here! 😄",
],
```

### 🎨 Change the Color Theme
Edit CSS variables in `style.css`:

```css
:root {
  --clr-primary: #7c3aed;   /* Purple — change to any color */
  --clr-cyan:    #06b6d4;   /* Cyan accent */
  --clr-green:   #10b981;   /* Online status dot */
}
```

---

## 📦 Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic app structure |
| **CSS3** | Variables, animations, glassmorphism, grid/flex |
| **Vanilla JavaScript** | Rule engine, DOM manipulation, async logic |
| **Google Fonts** | Inter (UI) + JetBrains Mono (code/timestamps) |

> No React. No Vue. No Tailwind. No npm. Just clean, vanilla web tech.

---

## 🛡️ Security

- ✅ **No `eval()`** — Math expressions parsed with a custom recursive descent parser
- ✅ **HTML escaping** — User input is escaped before rendering to prevent XSS
- ✅ **No external scripts** — Only Google Fonts CDN is loaded
- ✅ **No data collection** — Everything runs locally in the browser

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add: your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## 👨‍💻 Author

**Arthisri**
- 🐙 GitHub: [@Arthisri2007](https://github.com/Arthisri2007)

---

## 🌟 Acknowledgements

- Built as part of the **CODSOFT Internship** — Task 1: Rule-Based Chatbot
- Inspired by modern AI chat interfaces like ChatGPT and Claude

---

<div align="center">
  <strong>⭐ Star this repo if you found it useful!</strong><br/>
  Made with ❤️ and JavaScript
</div>
