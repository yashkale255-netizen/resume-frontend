"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Paperclip } from "lucide-react";

export default function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, type: "bot", text: "Hi there! 👋 I'm your profile assistant. How can I help you build your profile today?" }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), type: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // Simulate bot thinking/replying
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, type: "bot", text: "That sounds great! I'm processing that for your profile now." }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Profile Support</h3>
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest">Always Active</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.type === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={msg.id}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    msg.type === "user" 
                      ? "bg-blue-600 text-white rounded-tr-none" 
                      : "bg-white border border-slate-200 text-slate-800 shadow-sm rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-slate-100 border-none rounded-xl py-3 px-4 pr-24 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <div className="absolute right-2 flex items-center gap-1">
                  <button type="button" className="p-2 text-slate-400 hover:text-slate-600">
                    <Paperclip size={18} />
                  </button>
                  <button 
                    type="submit"
                    className="p-2 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
              <p className="text-center text-[10px] text-slate-400 mt-3 font-medium">
                Powered by AI Support
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end gap-4">
        {/* Tooltip Message (Only show when closed) */}
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="bg-white border border-slate-200 shadow-xl px-4 py-3 rounded-2xl rounded-br-none mb-2 max-w-[200px]"
          >
            <p className="text-[11px] font-medium leading-tight text-slate-800">
              Hey user! Need help building your profile? <span className="text-blue-600 font-bold">I'm online.</span>
            </p>
          </motion.div>
        )}

        {/* The Profile Trigger */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <span className={`absolute inset-0 rounded-full bg-blue-500/20 ${!isOpen && "animate-ping"}`} />
          
          <div className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden">
            <div className="text-white">
              {isOpen ? <X size={22} /> : <MessageSquare size={22} fill="currentColor" />}
            </div>
            {!isOpen && (
              <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
            )}
          </div>

          {!isOpen && (
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Chat with Support
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
}