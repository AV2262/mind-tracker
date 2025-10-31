import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hey there 👋 I'm your Mind Assistant. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");

  // 🧠 Simple emotion-aware logic
  const getBotResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("happy") || msg.includes("good") || msg.includes("great"))
      return "That's awesome! 😊 Keep holding on to that positive energy!";
    if (msg.includes("sad") || msg.includes("down") || msg.includes("depressed"))
      return "I'm really sorry you're feeling this way 😔. Want me to suggest a short breathing exercise or journaling prompt?";
    if (msg.includes("angry") || msg.includes("mad"))
      return "It's okay to feel angry sometimes 😤. Try taking a deep breath — maybe write down what triggered it?";
    if (msg.includes("stressed") || msg.includes("anxious") || msg.includes("worried"))
      return "Stress can be tough 💭. How about we take 3 deep breaths together? Inhale... hold... exhale... 🌬️";
    if (msg.includes("tired") || msg.includes("exhausted"))
      return "You sound tired 😴. Make sure you rest well — your mind deserves a break too!";
    if (msg.includes("thank"))
      return "You're very welcome 💙 I'm always here to listen.";
    if (msg.includes("help"))
      return "Sure! You can tell me how you’re feeling, and I’ll try to guide you. 💫";
    return "Hmm, I see 🤔. Tell me more about what’s on your mind.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();

    // Update user message
    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setInput("");

    // Delay bot reply
    setTimeout(() => {
      const botReply = getBotResponse(userMessage);
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    }, 700);
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
            className="fixed bottom-20 right-6 w-80 md:w-96 bg-[#001f3fee] border border-cyan-400/40 rounded-2xl shadow-[0_0_25px_#00ffff66] overflow-hidden backdrop-blur-lg z-50"
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
