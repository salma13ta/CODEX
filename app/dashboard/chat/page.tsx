"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle, MoreVertical, Paperclip } from 'lucide-react';

const initialMessages = [
  {
    id: 1,
    sender: 'codex',
    text: 'Hello! 👋 Welcome to Codex. How can we help you today?',
    time: '10:30 AM',
  },
  {
    id: 2,
    sender: 'user',
    text: "Hi! I'm interested in building a mobile app.",
    time: '10:32 AM',
  },
  {
    id: 3,
    sender: 'codex',
    text: "Great! We'd love to help you build your mobile app. Could you tell me more about your project requirements?",
    time: '10:33 AM',
  },
];

const quickReplies = [
  'Tell me about pricing',
  'I need a mobile app',
  'Schedule a call',
  'View portfolio',
];

const contactMethods = [
  {
    icon: Phone,
    label: 'Phone',
    value: '01226694723',
    action: 'tel:01226694723',
    gradient: 'from-[#00d4ff] to-[#0066ff]',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'codex7314@gmail.com',
    action: 'mailto:codex7314@gmail.com',
    gradient: 'from-[#00ffff] to-[#00d4ff]',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cairo, Egypt',
    action: 'https://www.google.com/maps/place/Mansoura,+Mansoura+Qism+2,+El+Mansoura,+Dakahlia+Governorate/@31.0414531,31.3416398,13z/data=!3m1!4b1!4m6!3m5!1s0x14f79db7a9053547:0xf8dab3bbed766c97!8m2!3d31.0409483!4d31.3784704!16zL20vMDI5cGxk?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
    gradient: 'from-[#8b5cf6] to-[#00d4ff]',
  },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // التمرير التلقائي لآخر رسالة
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string = inputText) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText('');
    setIsTyping(true);

    // محاكاة رد النظام
    setTimeout(() => {
      setIsTyping(false);
      const response = {
        id: Date.now() + 1,
        sender: 'codex',
        text: 'Thank you for your message! Our team will get back to you shortly. 🚀',
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, response]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0a0e27] text-white">
      {/* Header */}
      <section className="px-6 pt-10 pb-4 shrink-0">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-[#00d4ff] to-[#00ffff] bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mt-1">Direct Support</p>
            </div>
            <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="px-6 mb-6 shrink-0">
        <div className="grid grid-cols-3 gap-3">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 shadow-lg bg-gradient-to-br ${method.gradient}`}>
                <method.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter mb-0.5">{method.label}</p>
              <p className="text-[10px] font-bold text-white truncate w-full">{method.value}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Messages Window */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-6 space-y-6 scroll-smooth custom-scrollbar"
      >
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: message.sender === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] ${message.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                {message.sender === 'codex' && (
                  <div className="flex items-center gap-2 mb-1.5 ml-1">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <MessageCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Codex AI</span>
                  </div>
                )}

                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-xl
                  ${message.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-tr-none'
                    : 'bg-white/10 border border-white/5 text-gray-10 rounded-tl-none backdrop-blur-md'
                  }`}
                >
                  {message.text}
                </div>
                <span className="text-[9px] text-gray-600 mt-1.5 font-bold uppercase">{message.time}</span>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2 items-center text-gray-500 italic text-xs">
              <div className="flex gap-1 bg-white/5 px-3 py-2 rounded-full border border-white/5">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input & Quick Replies */}
      <section className="p-6 shrink-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27] to-transparent">
        {/* Quick Replies */}
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
          {quickReplies.map((reply, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSend(reply)}
              className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold whitespace-nowrap hover:bg-cyan-500/10"
            >
              {reply}
            </motion.button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="flex gap-3 items-center">
          <div className="flex-1 relative group">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Message Codex..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
              <Paperclip className="w-5 h-5" />
            </button>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSend()}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20"
          >
            <Send className="w-5 h-5 text-white fill-white" />
          </motion.button>
        </div>
      </section>

      {/* Floating WhatsApp FAB */}
      <motion.a
        href="https://wa.me/15551234567"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-28 right-6 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-green-500/20 z-50 border-4 border-[#0a0e27]"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </motion.a>

    </div>
  );
}