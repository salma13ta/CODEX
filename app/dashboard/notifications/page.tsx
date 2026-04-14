"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle, Clock, AlertCircle, MessageCircle, Download, 
  Rocket, Star, ArrowLeft, MoreVertical, BellOff, CheckCheck
} from 'lucide-react';

const initialNotifications = [
  {
    id: 1,
    type: 'success',
    icon: CheckCircle,
    title: 'Project Milestone Completed',
    message: 'Your E-Commerce app reached 65% completion',
    time: '10 minutes ago',
    unread: true,
    gradient: 'from-[#00ffff] to-[#00d4ff]',
  },
  {
    id: 2,
    type: 'message',
    icon: MessageCircle,
    title: 'New Message from Support',
    message: 'Our team responded to your inquiry about API integration',
    time: '1 hour ago',
    unread: true,
    gradient: 'from-[#00d4ff] to-[#0066ff]',
  },
  {
    id: 3,
    type: 'download',
    icon: Download,
    title: 'New App Available',
    message: 'Codex Portfolio App v2.1.0 is ready to download',
    time: '3 hours ago',
    unread: true,
    gradient: 'from-[#8b5cf6] to-[#00d4ff]',
  },
  {
    id: 4,
    type: 'info',
    icon: Rocket,
    title: 'Project Started',
    message: 'Your Corporate Website Redesign project has begun',
    time: '1 day ago',
    unread: false,
    gradient: 'from-[#00d4ff] to-[#0066ff]',
  },
];

export default function NotificationsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const toggleRead = (id: number) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, unread: false } : n
    ));
  };

  const displayedNotifications = filter === 'unread' 
    ? notifications.filter(n => n.unread) 
    : notifications;

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white pb-12">
      {/* Header */}
      <section className="px-6 pt-10 pb-6 sticky top-0 bg-[#0a0e27]/80 backdrop-blur-md z-30">
        <div className="flex items-center gap-4 mb-8">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => router.back()}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>

          <div className="flex-1">
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Notifications
            </h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
              {unreadCount} New Alerts
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={markAllRead}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold"
          >
            <CheckCheck className="w-4 h-4" />
            <span className="hidden sm:inline">Mark all read</span>
          </motion.button>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {[
            { id: 'all', label: 'All Activity', count: notifications.length },
            { id: 'unread', label: 'Unread', count: unreadCount },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`flex-1 py-3 rounded-2xl border transition-all text-xs font-black uppercase tracking-tighter
                ${filter === tab.id 
                  ? 'bg-cyan-500 border-cyan-400 text-[#0a0e27] shadow-lg shadow-cyan-500/20' 
                  : 'bg-white/5 border-white/10 text-gray-500'}`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </section>

      {/* Notifications List */}
      <section className="px-6 space-y-4">
        <AnimatePresence mode="popLayout">
          {displayedNotifications.map((n, index) => {
            const Icon = n.icon;
            return (
              <motion.div
                key={n.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleRead(n.id)}
                className={`relative p-5 rounded-3xl cursor-pointer group border transition-all
                  ${n.unread 
                    ? 'bg-cyan-500/5 border-cyan-500/30 shadow-xl shadow-cyan-900/10' 
                    : 'bg-[#1a1f3a]/30 border-white/5 opacity-70 hover:opacity-100'}`}
              >
                {/* Unread Glow */}
                {n.unread && (
                  <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                )}

                <div className="flex gap-5">
                  <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center bg-gradient-to-br ${n.gradient} shadow-lg shadow-blue-500/20`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`text-sm font-bold truncate pr-4 ${n.unread ? 'text-white' : 'text-gray-400'}`}>
                        {n.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                      {n.message}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      {n.time}
                    </div>
                  </div>

                  <button className="self-center p-2 rounded-xl hover:bg-white/5 text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Empty State */}
        {displayedNotifications.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10">
              <BellOff className="w-10 h-10 text-gray-700" />
            </div>
            <h3 className="text-xl font-black text-white mb-2">Clean Slate!</h3>
            <p className="text-sm text-gray-600 uppercase tracking-widest font-bold">No notifications found</p>
          </motion.div>
        )}
      </section>

      {/* Footer Button */}
      {displayedNotifications.length > 0 && (
        <section className="px-6 mt-8">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-3xl bg-white/5 border border-white/10 text-gray-400 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
          >
            Load History
          </motion.button>
        </section>
      )}
    </div>
  );
}