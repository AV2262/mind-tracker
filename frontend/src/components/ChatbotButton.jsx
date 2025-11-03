import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hey there 👋 I'm your Mind Assistant — your little mental wellness buddy. How are you really feeling today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [mood, setMood] = useState("neutral");

  // 🌈 Emotionally aware + conversational response generator
  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    let response = "";
    let newMood = "neutral";

    if (msg.includes("happy") || msg.includes("great") || msg.includes("good") || msg.includes("amazing")) {
      newMood = "positive";
      const responses = [
        "That’s wonderful to hear! 🌞 What made your day so good?",
        "Yay! I’m smiling with you 😄 Keep spreading that positivity!",
        "I love hearing that you’re feeling great — you deserve it 💙",
      ];
      response = responses[Math.floor(Math.random() * responses.length)];
    } 
    else if (msg.includes("sad") || msg.includes("down") || msg.includes("depressed")) {
      newMood = "sad";
      const responses = [
        "Oh no 😔, I’m really sorry you’re feeling this way. Want to tell me what happened?",
        "It’s okay to feel low sometimes 💙. You’re not alone — I’m right here with you.",
        "That sounds tough 😢. Would you like a calming breathing exercise or a journaling idea?",
      ];
      response = responses[Math.floor(Math.random() * responses.length)];
    } 
    else if (msg.includes("angry") || msg.includes("mad") || msg.includes("furious")) {
      newMood = "angry";
      const responses = [
        "Anger is valid 💢, but it can also be heavy. Want to vent a bit?",
        "It’s okay to be angry 😤 — just don’t let it consume your peace.",
        "Let’s take a breath together… inhale for 4, hold for 4, exhale for 4 🌬️",
      ];
      response = responses[Math.floor(Math.random() * responses.length)];
    } 
    else if (msg.includes("stressed") || msg.includes("anxious") || msg.includes("worried")) {
      newMood = "anxious";
      const responses = [
        "Stress can really pile up 😔. Would you like a mini mindfulness exercise?",
        "Take a deep breath 🌿. You’ve got through hard days before — you’ll do it again.",
        "Let’s focus on one small step at a time 🧠. What’s the thing bothering you the most right now?",
      ];
      response = responses[Math.floor(Math.random() * responses.length)];
    } 
    else if (msg.includes("tired") || msg.includes("exhausted") || msg.includes("sleepy")) {
      newMood = "tired";
      const responses = [
        "You sound really drained 😴. Maybe it’s time to rest — your mind deserves peace.",
        "Even superheroes need a break 💤. Try closing your eyes for a minute and breathe.",
        "It’s okay to pause. You’ve done enough for today 💙",
      ];
      response = responses[Math.floor(Math.random() * responses.length)];
    } 
    else if (msg.includes("thank")) {
      newMood = "grateful";
      response = "Aww 💙 You’re very welcome! I’m really glad I could help you.";
    } 
    else if (msg.includes("help") || msg.includes("what can you do")) {
      response = "I can listen to how you feel, help you reflect, suggest self-care, and keep you company 💫";
    } 
    else if (msg.includes("who are you")) {
      response = "I’m your Mind Assistant 🤖 — here to listen, comfort, and gently guide you toward calmness.";
    } 
    else {
      const neutralReplies = [
        "Hmm, I see 🤔. That sounds interesting — tell me more.",
        "I’m listening 👂 — go on, what’s on your mind?",
        "That’s something worth reflecting on 💭. How did that make you feel?",
        "I'm here with you — take your time 💙",
      ];
      response = neutralReplies[Math.floor(Math.random() * neutralReplies.length)];
    }

    setMood(newMood);
    return response;
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();

    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setInput("");

    setTimeout(() => {
      const botReply = getBotResponse(userMessage);
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    }, 700);
  };

  // 💫 Optional mood-based gradient colors
  const moodColors = {
    positive: "from-[#00ffaa]/20",
    sad: "from-[#0044ff]/30",
    angry: "from-[#ff0044]/30",
    anxious: "from-[#ff9900]/30",
    tired: "from-[#6666ff]/30",
    neutral: "from-[#00ffff]/20",
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-cyan-500/30 hover:bg-cyan-400/50 p-4 rounded-full shadow-[0_0_20px_#00ffff88] border border-cyan-300/50 backdrop-blur-md transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} className="text-white" /> : <MessageCircle size={26} className="text-cyan-100" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={`fixed bottom-20 right-6 w-80 md:w-96 bg-gradient-to-br ${moodColors[mood]} to-[#001f3fdd] border border-cyan-400/40 rounded-2xl shadow-[0_0_25px_#00ffff66] overflow-hidden backdrop-blur-lg z-50`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <div className="p-3 border-b border-cyan-500/40 text-cyan-300 font-semibold text-lg flex items-center gap-2">
              🤖 Mind Assistant
            </div>

            {/* Messages */}
            <div className="max-h-80 overflow-y-auto p-4 space-y-3 text-sm text-cyan-100">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-2 px-3 rounded-xl max-w-[80%] ${
                    msg.from === "user"
                      ? "ml-auto bg-cyan-500/30 text-right"
                      : "mr-auto bg-[#002b5b]/70 border border-cyan-400/30"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex items-center border-t border-cyan-400/30 bg-[#00284d]/60 p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-cyan-100 outline-none placeholder:text-cyan-400 text-sm"
              />
              <button
                onClick={sendMessage}
                className="ml-3 text-cyan-300 hover:text-cyan-100 transition-all"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
