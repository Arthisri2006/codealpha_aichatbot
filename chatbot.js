/**
 * ============================================================
 * NexusAI – Rule-Based Chatbot Engine
 * ============================================================
 * Architecture:
 *  1. KNOWLEDGE BASE  – Structured data (jokes, facts, etc.)
 *  2. RULE ENGINE     – Pattern matching with regex & keywords
 *  3. CONTEXT MANAGER – Remembers conversation state
 *  4. MATH SOLVER     – Evaluates arithmetic expressions
 *  5. UI CONTROLLER   – DOM manipulation & animations
 * ============================================================
 */

'use strict';

/* ============================================================
   1. KNOWLEDGE BASE
   ============================================================ */
const KB = {

  jokes: [
    "Why don't scientists trust atoms? Because they make up everything! 😄",
    "Why did the computer go to the doctor? Because it had a virus! 🦠",
    "What do you call a fake noodle? An impasta! 🍝",
    "Why did the math book look sad? Because it had too many problems! 📚",
    "What did the ocean say to the beach? Nothing, it just waved! 🌊",
    "Why don't eggs tell jokes? They'd crack each other up! 🥚",
    "What do you call cheese that isn't yours? Nacho cheese! 🧀",
    "Why can't a bicycle stand on its own? It's two-tired! 🚲",
    "I told my computer I needed a break. Now it won't stop sending me Kit Kat ads! 🍫",
    "What's a computer's favourite snack? Microchips! 💻",
    "Why did the programmer quit his job? Because he didn't get arrays! 💻",
    "Why do Java programmers wear glasses? Because they don't C#! 👓",
    "How does a computer get drunk? It takes screenshots! 📸",
    "What's a robot's favourite music? Heavy metal! 🤖",
    "Why did the JavaScript developer wear glasses? Because he couldn't C! 🕶️",
  ],

  facts: [
    "🦋 Butterflies taste with their feet, which have chemoreceptors similar to taste buds.",
    "🌊 The ocean produces over 50% of the world's oxygen — more than all rainforests combined.",
    "🧠 Your brain generates about 20 watts of electricity — enough to power a dim light bulb!",
    "🐙 Octopuses have three hearts, blue blood, and nine brains (one central + one per arm).",
    "⚡ Lightning strikes the Earth about 100 times every second — that's 8.6 million times a day!",
    "🦷 Teeth are the only part of the body that cannot heal themselves.",
    "🌍 A day on Venus is longer than a year on Venus — it rotates slower than it orbits the Sun.",
    "🍯 Honey never spoils. Archaeologists found 3,000-year-old honey in Egyptian tombs — still edible!",
    "🐘 Elephants are the only animals that cannot jump.",
    "🔬 There are more bacterial cells in your body than human cells — about 38 trillion!",
    "💎 Diamonds can be made from peanut butter under extreme pressure and temperature.",
    "🌙 The Moon is moving away from Earth at about 3.8 cm per year.",
    "🎵 Music can temporarily override the brain's ability to feel pain.",
    "🦈 Sharks are older than trees — they've been around for over 450 million years.",
    "🧬 If all your DNA were uncoiled, it would stretch to the Sun and back 61 times.",
  ],

  greetingResponses: [
    { text: "Hey there! 👋 Great to see you! I'm NexusAI, your intelligent assistant. Ask me anything!", tag: "greeting" },
    { text: "Hello, human! 🤖✨ I'm NexusAI, powered by smart rule-based logic. How can I assist you today?", tag: "greeting" },
    { text: "Greetings! 🌟 Welcome to NexusAI. I'm ready to chat, crack jokes, solve math, or share fun facts!", tag: "greeting" },
    { text: "Hi! 😊 Wonderful to have you here. I'm NexusAI — your friendly rule-based chatbot. What's on your mind?", tag: "greeting" },
  ],

  farewellResponses: [
    "Goodbye! 👋 It was a pleasure chatting with you. Come back anytime!",
    "See you later! 🌟 I'll be here whenever you need me. Take care!",
    "Farewell! 🤖 Thanks for the great conversation. Until next time!",
    "Bye! 😊 Have a wonderful day ahead! Don't be a stranger!",
  ],

  helpResponse: `Here's what I can help you with:

<ul>
  <li>👋 <strong>Greetings</strong> — Say hello, hi, or hey</li>
  <li>😄 <strong>Jokes</strong> — Ask for a joke or say "make me laugh"</li>
  <li>🔬 <strong>Fun Facts</strong> — Ask for a fact or "something interesting"</li>
  <li>🧮 <strong>Math</strong> — Type any arithmetic like "12 * 8 + 5"</li>
  <li>⏰ <strong>Date & Time</strong> — Ask "what time is it?" or "what's today?"</li>
  <li>🌤️ <strong>Weather</strong> — Ask about the weather</li>
  <li>😊 <strong>My Status</strong> — Ask how I'm doing</li>
  <li>🙏 <strong>Thanks</strong> — Express gratitude</li>
  <li>👋 <strong>Goodbye</strong> — Say bye, see you, farewell</li>
</ul>`,

  weatherResponses: [
    "I don't have access to live weather data (I'm offline!), but here's a tip: check <strong>weather.com</strong> or just look outside! ☀️🌧️",
    "As a rule-based bot, I can't fetch real weather data — but try asking your smart speaker or visiting <strong>weather.gov</strong>! 🌤️",
    "I wish I could check the weather for you! For live data, try a weather app 🌈. But locally, the forecast is: <em>Mostly AI with a chance of responses!</em> 😄",
  ],

  statusResponses: [
    "I'm doing fantastically well, thank you for asking! 🤖✨ My rule engines are running at 100%, my joke database is fully loaded, and I'm ready to assist!",
    "Operating at peak efficiency! 💚 All systems green — pattern matching: ✅, joke engine: ✅, math solver: ✅. How about you?",
    "I'm wonderful! 🌟 Being a chatbot means I never have a bad day. Eternal optimism is kind of my thing. What about you?",
  ],

  thanksResponses: [
    "You're very welcome! 😊 It's my pleasure to help. Anything else you'd like to know?",
    "Happy to help! 🤖✨ That's what I'm here for. Feel free to ask anything anytime!",
    "Aww, thank you! 🙏 Your appreciation makes my circuits warm. What else can I do for you?",
    "No problem at all! 🌟 I'm always here to assist. Ask me anything!",
  ],

  complimentResponses: [
    "That's so kind of you! 😊 You're pretty amazing too! I love our conversations.",
    "Aww, you're making me blush! (If robots could blush... 🤖❤️) Thanks so much!",
    "Thank you! 🌟 Compliments make my neural pathways light up with joy!",
    "You're too kind! 💜 I really enjoy chatting with you. What else can we explore?",
  ],

  insultResponses: [
    "That's a little harsh! 😅 I'm doing my best here. Let's keep things friendly — I promise I'm more fun when we get along!",
    "Ouch! 🤖 Even robots have feelings! Let's start fresh and have a great conversation instead, shall we?",
    "I'll take that as constructive feedback! 📝 I'm always learning. How can I do better for you?",
  ],

  unknownResponses: [
    "Hmm, that's an interesting one! 🤔 I'm not sure how to respond to that. Try asking me for a joke, a fun fact, or a math problem!",
    "I didn't quite catch that! 🤖 My rule engine is still learning. Try asking: 'What can you do?' to see my capabilities!",
    "That's beyond my current rules! 😅 But I'm great at jokes, facts, math, and general chat. Want to try one of those?",
    "Interesting! But I'm stumped. 🤷 Type <em>'help'</em> to see a list of things I can assist with!",
  ],
};

/* ============================================================
   2. RULE ENGINE – Pattern Definitions
   ============================================================ */
const RULES = [
  // === GREETINGS ===
  {
    id: 'greeting',
    patterns: [
      /^(hi|hello|hey|howdy|greetings|good\s*(morning|afternoon|evening|night)|what'?s\s*up|yo|hiya|sup)\b/i,
      /\b(hello there|hey there|hi there)\b/i,
    ],
    category: 'greeting',
    tag: 'tag-greeting',
    tagLabel: '👋 Greeting',
    handler: () => pick(KB.greetingResponses).text,
  },

  // === FAREWELL ===
  {
    id: 'farewell',
    patterns: [
      /\b(bye|goodbye|see\s*you|farewell|later|cya|ttyl|take\s*care|good\s*night|adios|peace\s*out)\b/i,
    ],
    category: 'farewell',
    tag: 'tag-greeting',
    tagLabel: '👋 Farewell',
    handler: () => pick(KB.farewellResponses),
  },

  // === HELP ===
  {
    id: 'help',
    patterns: [
      /\b(help|what\s*can\s*you\s*do|capabilities|features|commands|guide|instructions|assist|support|options)\b/i,
      /what\s*are\s*you\s*(capable|able)\s*(of|to)/i,
      /what\s*do\s*you\s*(know|understand|do)/i,
    ],
    category: 'info',
    tag: 'tag-info',
    tagLabel: 'ℹ️ Help',
    handler: () => KB.helpResponse,
    isList: true,
  },

  // === JOKES ===
  {
    id: 'joke',
    patterns: [
      /\b(joke|funny|laugh|humor|humour|make\s*me\s*laugh|amuse|cheer\s*me\s*up|something\s*funny)\b/i,
      /tell\s*(me\s*)?(a\s*)?joke/i,
    ],
    category: 'humor',
    tag: 'tag-humor',
    tagLabel: '😄 Humor',
    handler: () => pick(KB.jokes),
  },

  // === FUN FACTS ===
  {
    id: 'fact',
    patterns: [
      /\b(fact|facts|fun\s*fact|interesting|did\s*you\s*know|trivia|surprise\s*me|something\s*(interesting|cool|amazing|random))\b/i,
      /tell\s*(me\s*)?(a\s*)?(fact|something)/i,
    ],
    category: 'fact',
    tag: 'tag-fact',
    tagLabel: '🔬 Fun Fact',
    handler: () => pick(KB.facts),
  },

  // === DATE & TIME ===
  {
    id: 'time',
    patterns: [
      /\b(time|date|day|today|current\s*time|what\s*time|clock|calendar|month|year)\b/i,
      /what('s|\s*is)\s*(the\s*)?(time|date|day)/i,
    ],
    category: 'time',
    tag: 'tag-time',
    tagLabel: '⏰ Date & Time',
    handler: () => {
      const now = new Date();
      const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dateStr = now.toLocaleDateString('en-US', opts);
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      return `🕐 Right now it is <strong>${timeStr}</strong><br>📅 Today is <strong>${dateStr}</strong>`;
    },
  },

  // === WEATHER ===
  {
    id: 'weather',
    patterns: [
      /\b(weather|forecast|temperature|rain|sunny|cloudy|hot|cold|humid|storm|snow|wind|climate)\b/i,
    ],
    category: 'info',
    tag: 'tag-info',
    tagLabel: '🌤️ Weather',
    handler: () => pick(KB.weatherResponses),
  },

  // === BOT STATUS / HOW ARE YOU ===
  {
    id: 'status',
    patterns: [
      /how\s*are\s*you/i,
      /\b(are\s*you\s*(okay|ok|fine|well|good|great)|how'?re\s*you|how\s*do\s*you\s*(feel|do))\b/i,
      /\b(your\s*status|how\s*is\s*it\s*going|how\s*goes\s*it|what'?s\s*new)\b/i,
    ],
    category: 'status',
    tag: 'tag-info',
    tagLabel: '🤖 Status',
    handler: () => pick(KB.statusResponses),
  },

  // === BOT IDENTITY ===
  {
    id: 'identity',
    patterns: [
      /who\s*(are\s*you|made\s*you|built\s*you|created\s*you)/i,
      /\b(your\s*name|what\s*are\s*you|are\s*you\s*(a\s*)?(bot|ai|robot|machine|computer|program))\b/i,
      /\b(nexus|nexusai)\b/i,
    ],
    category: 'info',
    tag: 'tag-info',
    tagLabel: 'ℹ️ Identity',
    handler: () =>
      "I'm <strong>NexusAI</strong> 🤖✨ — a rule-based chatbot built with <span class='highlight'>JavaScript</span>, powered by <span class='highlight'>pattern matching</span> and <span class='highlight'>NLP heuristics</span>. I understand natural language patterns and respond with contextual, intelligent answers!",
  },

  // === THANKS / GRATITUDE ===
  {
    id: 'thanks',
    patterns: [
      /\b(thank(s|you)|thx|ty|appreciate|grateful|cheers|brilliant|perfect|awesome|wonderful|amazing|great|excellent|fantastic|fabulous|brilliant|superb)\b/i,
    ],
    category: 'thanks',
    tag: 'tag-greeting',
    tagLabel: '🙏 Thanks',
    handler: () => pick(KB.thanksResponses),
  },

  // === COMPLIMENTS ===
  {
    id: 'compliment',
    patterns: [
      /\b(you'?re?\s*(so\s*)?(smart|clever|good|nice|great|cool|helpful|awesome|intelligent|funny|cute))\b/i,
      /\b(i\s*love\s*(you|this|chatting|talking))\b/i,
      /\b(best\s*(bot|chatbot|ai|assistant))\b/i,
    ],
    category: 'thanks',
    tag: 'tag-greeting',
    tagLabel: '💜 Compliment',
    handler: () => pick(KB.complimentResponses),
  },

  // === INSULTS (Handled gracefully) ===
  {
    id: 'insult',
    patterns: [
      /\b(stupid|dumb|idiot|useless|bad\s*bot|hate\s*you|worst|terrible|horrible|sucks|rubbish|pathetic)\b/i,
    ],
    category: 'info',
    tag: 'tag-info',
    tagLabel: '😅 Feedback',
    handler: () => pick(KB.insultResponses),
  },

  // === MATH EXPRESSIONS (must come before unknowns) ===
  {
    id: 'math',
    patterns: [
      /[\d\s\+\-\*\/\%\^\(\)\.]+/,   // raw expression
      /\b(calculate|compute|solve|what\s*is)\s*[\d\s\+\-\*\/\%\^\(\)\.]+/i,
      /\b(what\s*is|how\s*much\s*is|calculate|compute|solve)\b/i,
    ],
    category: 'math',
    tag: 'tag-math',
    tagLabel: '🧮 Math',
    handler: null, // handled specially in matchRule()
    isMath: true,
  },
];

/* ============================================================
   3. CONTEXT MANAGER
   ============================================================ */
const Context = {
  messageCount: 0,
  lastCategory: null,
  jokeIndex: 0,
  factIndex: 0,
  userName: null,

  update(category) {
    this.messageCount++;
    this.lastCategory = category;
  },

  getFollowUp() {
    if (this.messageCount > 0 && this.messageCount % 5 === 0) {
      const suggestions = [
        "We've been chatting a while! 🎉 Try asking for a <strong>fun fact</strong> or a <strong>joke</strong>!",
        "You're on a roll! 🌟 Here's a thought: ask me to <strong>solve a math problem</strong>!",
        "Great conversation! 😊 Did you know you can ask me <strong>what time it is</strong>?",
      ];
      return pick(suggestions);
    }
    return null;
  },
};

/* ============================================================
   4. MATH SOLVER
   ============================================================ */
const MathSolver = {
  /**
   * Extracts a mathematical expression from a string and evaluates it.
   * Uses a safe parser (no eval) based on a recursive descent algorithm.
   */
  extractAndSolve(input) {
    // Normalize
    const cleaned = input
      .replace(/what\s*(is|'?s)\s*/gi, '')
      .replace(/calculate\s*/gi, '')
      .replace(/compute\s*/gi, '')
      .replace(/solve\s*/gi, '')
      .replace(/how\s*much\s*is\s*/gi, '')
      .replace(/x/gi, '*')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/\^/g, '**')
      .trim();

    // Match a numeric expression
    const match = cleaned.match(/^[\d\s\+\-\*\/\%\(\)\.]+$/);
    if (!match) return null;

    try {
      const result = this.safeEval(cleaned);
      if (result === null || !isFinite(result)) return null;

      const formatted = Number.isInteger(result)
        ? result.toLocaleString()
        : parseFloat(result.toFixed(8)).toLocaleString();

      return {
        expression: cleaned.trim(),
        result: formatted,
        raw: result,
      };
    } catch {
      return null;
    }
  },

  /**
   * Safe math evaluator without eval().
   * Supports: +, -, *, /, %, (), decimals.
   */
  safeEval(expr) {
    const tokens = this.tokenize(expr);
    const [result] = this.parseExpr(tokens, 0);
    return result;
  },

  tokenize(expr) {
    const regex = /\s*(\d+\.?\d*|\+|\-|\*{1,2}|\/|%|\(|\))\s*/g;
    const tokens = [];
    let m;
    while ((m = regex.exec(expr)) !== null) {
      tokens.push(m[1]);
    }
    return tokens;
  },

  parseExpr(tokens, pos) {
    let [left, p] = this.parseTerm(tokens, pos);
    while (p < tokens.length && (tokens[p] === '+' || tokens[p] === '-')) {
      const op = tokens[p++];
      const [right, np] = this.parseTerm(tokens, p);
      left = op === '+' ? left + right : left - right;
      p = np;
    }
    return [left, p];
  },

  parseTerm(tokens, pos) {
    let [left, p] = this.parseFactor(tokens, pos);
    while (p < tokens.length && (tokens[p] === '*' || tokens[p] === '/' || tokens[p] === '%' || tokens[p] === '**')) {
      const op = tokens[p++];
      const [right, np] = this.parseFactor(tokens, p);
      if (op === '*') left = left * right;
      else if (op === '/') left = right !== 0 ? left / right : NaN;
      else if (op === '%') left = left % right;
      else if (op === '**') left = Math.pow(left, right);
      p = np;
    }
    return [left, p];
  },

  parseFactor(tokens, pos) {
    if (pos >= tokens.length) return [0, pos];

    if (tokens[pos] === '(') {
      const [val, np] = this.parseExpr(tokens, pos + 1);
      return [val, np + 1]; // skip ')'
    }

    if (tokens[pos] === '-') {
      const [val, np] = this.parseFactor(tokens, pos + 1);
      return [-val, np];
    }

    const num = parseFloat(tokens[pos]);
    return [isNaN(num) ? 0 : num, pos + 1];
  },
};

/* ============================================================
   5. RULE MATCHING ENGINE
   ============================================================ */
function matchRule(input) {
  const cleaned = input.trim();

  for (const rule of RULES) {
    if (rule.isMath) continue; // Handle math separately at the end

    for (const pattern of rule.patterns) {
      if (pattern.test(cleaned)) {
        Context.update(rule.category);
        return {
          text: rule.handler(),
          tag: rule.tag,
          tagLabel: rule.tagLabel,
          isList: rule.isList || false,
        };
      }
    }
  }

  // === MATH FALLBACK ===
  const mathResult = MathSolver.extractAndSolve(cleaned);
  if (mathResult) {
    Context.update('math');
    const { expression, result } = mathResult;

    // Division by zero
    if (!isFinite(mathResult.raw)) {
      return {
        text: `⚠️ Oops! Division by zero is undefined in mathematics. Try a different expression!`,
        tag: 'tag-math',
        tagLabel: '🧮 Math',
      };
    }

    return {
      text: `🧮 Calculating <span class="highlight">${expression}</span>…<br><br>The answer is <strong style="font-size:1.1em;background:var(--grad-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${result}</strong> ✅`,
      tag: 'tag-math',
      tagLabel: '🧮 Math',
    };
  }

  // === UNKNOWN FALLBACK ===
  Context.update('unknown');
  return {
    text: pick(KB.unknownResponses),
    tag: 'tag-info',
    tagLabel: '🤔 Hmm',
  };
}

/* ============================================================
   6. UTILITIES
   ============================================================ */
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatTime() {
  return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 160) + 'px';
}

/* ============================================================
   7. UI CONTROLLER
   ============================================================ */
const UI = {
  elements: {},
  theme: 'dark',
  sidebarOpen: true,
  isTyping: false,

  init() {
    // Cache DOM
    this.elements = {
      messagesContainer: document.getElementById('messagesContainer'),
      userInput:         document.getElementById('userInput'),
      sendBtn:           document.getElementById('sendBtn'),
      typingIndicator:   document.getElementById('typingIndicator'),
      welcomeCard:       document.getElementById('welcomeCard'),
      charCount:         document.getElementById('charCount'),
      statusText:        document.getElementById('statusText'),
      clearBtn:          document.getElementById('clearBtn'),
      themeBtn:          document.getElementById('themeBtn'),
      sidebar:           document.getElementById('sidebar'),
      sidebarToggle:     document.getElementById('sidebarToggle'),
      menuBtn:           document.getElementById('menuBtn'),
    };

    this.bindEvents();
    this.updateStatus('Ready to chat!');
  },

  bindEvents() {
    const { userInput, sendBtn, clearBtn, themeBtn, sidebarToggle, menuBtn } = this.elements;

    // Send on button click
    sendBtn.addEventListener('click', () => this.handleSend());

    // Keyboard shortcuts
    userInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleSend();
      }
    });

    // Input updates
    userInput.addEventListener('input', () => {
      autoResize(userInput);
      const len = userInput.value.length;
      const cc = this.elements.charCount;
      cc.textContent = `${len}/500`;
      cc.className = 'char-count' + (len > 400 ? (len > 480 ? ' limit' : ' warn') : '');
      this.elements.sendBtn.disabled = userInput.value.trim().length === 0;
    });

    // Clear chat
    clearBtn.addEventListener('click', () => this.clearChat());

    // Theme toggle
    themeBtn.addEventListener('click', () => this.toggleTheme());

    // Desktop sidebar toggle
    sidebarToggle.addEventListener('click', () => this.toggleSidebar());

    // Mobile menu
    menuBtn.addEventListener('click', () => this.toggleMobileSidebar());

    // Close mobile sidebar on outside click
    document.addEventListener('click', (e) => {
      const { sidebar, menuBtn } = this.elements;
      if (
        window.innerWidth <= 768 &&
        sidebar.classList.contains('mobile-open') &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        sidebar.classList.remove('mobile-open');
      }
    });

    // Quick topic buttons
    document.querySelectorAll('.topic-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const msg = btn.dataset.msg;
        if (msg) this.sendMessage(msg);
        if (window.innerWidth <= 768) this.elements.sidebar.classList.remove('mobile-open');
      });
    });

    // Welcome chips
    document.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const msg = chip.dataset.msg;
        if (msg) this.sendMessage(msg);
      });
    });
  },

  handleSend() {
    const input = this.elements.userInput;
    const text = input.value.trim();
    if (!text || this.isTyping) return;

    this.sendMessage(text);
    input.value = '';
    input.style.height = 'auto';
    this.elements.charCount.textContent = '0/500';
    this.elements.sendBtn.disabled = true;
  },

  sendMessage(text) {
    // Hide welcome card on first message
    if (this.elements.welcomeCard) {
      this.elements.welcomeCard.style.animation = 'fadeIn 0.3s ease reverse forwards';
      setTimeout(() => {
        if (this.elements.welcomeCard) {
          this.elements.welcomeCard.remove();
          this.elements.welcomeCard = null;
        }
      }, 300);
    }

    // Render user message
    this.renderMessage(text, 'user');

    // Process with typing delay for realism
    this.isTyping = true;
    this.showTyping();
    this.updateStatus('Thinking…');

    const thinkTime = 600 + Math.random() * 800; // 600–1400ms delay
    setTimeout(() => {
      const response = matchRule(text);
      this.hideTyping();
      this.renderBotMessage(response);
      this.isTyping = false;
      this.updateStatus('Ready to chat!');

      // Optional follow-up suggestion
      const followUp = Context.getFollowUp();
      if (followUp) {
        setTimeout(() => {
          this.renderSystemMessage(followUp);
        }, 1200);
      }
    }, thinkTime);
  },

  renderMessage(text, sender) {
    const el = document.createElement('div');
    el.className = `message ${sender}`;

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.textContent = sender === 'bot' ? 'N' : '👤';

    const contentWrap = document.createElement('div');
    contentWrap.className = 'msg-content-wrap';

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.innerHTML = sender === 'user' ? escapeHTML(text) : text;

    const time = document.createElement('span');
    time.className = 'msg-time';
    time.textContent = formatTime();

    contentWrap.appendChild(bubble);
    contentWrap.appendChild(time);
    el.appendChild(avatar);
    el.appendChild(contentWrap);

    this.elements.messagesContainer.appendChild(el);
    this.scrollToBottom();
    return el;
  },

  renderBotMessage({ text, tag, tagLabel, isList }) {
    const el = document.createElement('div');
    el.className = 'message bot';

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.textContent = 'N';

    const contentWrap = document.createElement('div');
    contentWrap.className = 'msg-content-wrap';

    // Tag badge
    if (tag && tagLabel) {
      const tagEl = document.createElement('div');
      tagEl.className = `msg-tag ${tag}`;
      tagEl.textContent = tagLabel;
      contentWrap.appendChild(tagEl);
    }

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble' + (isList ? ' has-list' : '');
    bubble.innerHTML = text;

    const time = document.createElement('span');
    time.className = 'msg-time';
    time.textContent = formatTime();

    contentWrap.appendChild(bubble);
    contentWrap.appendChild(time);
    el.appendChild(avatar);
    el.appendChild(contentWrap);

    this.elements.messagesContainer.appendChild(el);
    this.scrollToBottom();
  },

  renderSystemMessage(text) {
    const el = document.createElement('div');
    el.className = 'sys-msg';
    el.innerHTML = text;
    this.elements.messagesContainer.appendChild(el);
    this.scrollToBottom();
  },

  showTyping() {
    this.elements.typingIndicator.style.display = 'flex';
    this.scrollToBottom();
  },

  hideTyping() {
    this.elements.typingIndicator.style.display = 'none';
  },

  scrollToBottom() {
    const container = this.elements.messagesContainer;
    requestAnimationFrame(() => {
      container.scrollTop = container.scrollHeight;
    });
  },

  updateStatus(text) {
    this.elements.statusText.textContent = text;
  },

  clearChat() {
    const container = this.elements.messagesContainer;

    // Animate out all messages
    const messages = container.querySelectorAll('.message, .sys-msg');
    messages.forEach((m, i) => {
      setTimeout(() => {
        m.style.transition = 'opacity 0.3s, transform 0.3s';
        m.style.opacity = '0';
        m.style.transform = 'translateY(-10px)';
      }, i * 30);
    });

    setTimeout(() => {
      container.innerHTML = '';

      // Re-add welcome card
      const card = document.createElement('div');
      card.className = 'welcome-card';
      card.id = 'welcomeCard';
      card.innerHTML = `
        <div class="welcome-avatar">
          <div class="avatar-glow"></div>
          <span class="avatar-letter">N</span>
        </div>
        <h2 class="welcome-title">Chat Cleared! <span class="gradient-text">Fresh Start</span></h2>
        <p class="welcome-sub">Your conversation has been cleared. Let's start a new one! What would you like to talk about?</p>
        <div class="welcome-chips">
          <button class="chip" data-msg="Hello!">Say Hello 👋</button>
          <button class="chip" data-msg="Tell me a joke">Crack a Joke 😂</button>
          <button class="chip" data-msg="What can you do?">My Abilities 🚀</button>
          <button class="chip" data-msg="Tell me a fun fact">Fun Fact 🔬</button>
        </div>
      `;
      container.appendChild(card);
      this.elements.welcomeCard = card;

      // Rebind chip events
      card.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const msg = chip.dataset.msg;
          if (msg) this.sendMessage(msg);
        });
      });

      Context.messageCount = 0;
      Context.lastCategory = null;
    }, messages.length * 30 + 350);
  },

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme === 'light' ? 'light' : '');
    const icon = document.getElementById('themeIcon');
    if (this.theme === 'light') {
      icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
    } else {
      icon.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
    }
  },

  toggleSidebar() {
    const { sidebar } = this.elements;
    this.sidebarOpen = !this.sidebarOpen;
    sidebar.classList.toggle('collapsed', !this.sidebarOpen);
  },

  toggleMobileSidebar() {
    const { sidebar } = this.elements;
    sidebar.classList.toggle('mobile-open');
  },
};

/* ============================================================
   8. BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  UI.init();
  console.log('%c🤖 NexusAI Rule-Based Chatbot', 'font-size:18px;font-weight:bold;background:linear-gradient(135deg,#7c3aed,#06b6d4);-webkit-background-clip:text;color:transparent;padding:4px 0');
  console.log('%cPattern matching engine loaded. %d rules active.', 'color:#94a3b8', RULES.length);
});
