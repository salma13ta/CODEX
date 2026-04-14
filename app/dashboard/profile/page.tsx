"use client";

import { motion } from 'framer-motion';
import {
  User, Mail, Phone, MapPin, Edit2, CheckCircle, Clock, Loader2
} from 'lucide-react';
import logoImage from '../../components/photo_2026-04-11_00-21-06.jpg';
import Image from 'next/image';
// البيانات
const userProjects = [
  {
    id: 1,
    name: 'E-Commerce Mobile App',
    status: 'in-progress',
    progress: 65,
    startDate: 'Mar 15, 2026',
    estimatedCompletion: 'Apr 10, 2026',
  },
  {
    id: 2,
    name: 'Corporate Website Redesign',
    status: 'completed',
    progress: 100,
    startDate: 'Feb 20, 2026',
    completedDate: 'Mar 12, 2026',
  },
  {
    id: 3,
    name: 'API Integration Service',
    status: 'pending',
    progress: 0,
    startDate: 'Mar 25, 2026',
    estimatedStart: 'Mar 30, 2026',
  },
];

// const menuItems = [
//   { icon: Settings, label: 'Settings', badge: null },
//   { icon: Bell, label: 'Notifications', badge: '3' },
//   { icon: Shield, label: 'Privacy & Security', badge: null },
//   { icon: HelpCircle, label: 'Help & Support', badge: null },
// ];

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'completed':
      return {
        icon: CheckCircle,
        label: 'Completed',
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-400/10',
      };
    case 'in-progress':
      return {
        icon: Loader2,
        label: 'In Progress',
        color: 'text-blue-400',
        bgColor: 'bg-blue-400/10',
      };
    case 'pending':
      return {
        icon: Clock,
        label: 'Pending',
        color: 'text-purple-400',
        bgColor: 'bg-purple-400/10',
      };
    default:
      return {
        icon: Clock,
        label: 'Unknown',
        color: 'text-gray-400',
        bgColor: 'bg-gray-400/10',
      };
  }
};

export default function ProfileScreen() {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white pb-12 selection:bg-cyan-500/30">
      {/* Header */}
      <section className="px-6 pt-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-black mb-8 bg-gradient-to-r from-[#00d4ff] to-[#00ffff] bg-clip-text text-transparent w-fit">
            My Profile
          </h1>

          {/* Profile Card */}
          <div className="relative p-6 rounded-3xl border border-cyan-500/20 bg-[#1a1f3a]/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-900/20">
            {/* الديكور الخلفي */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl -z-10 rounded-full" />

            <div className="relative flex items-center gap-5 mb-8">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full rounded-full bg-[#0a0e27] flex items-center justify-center overflow-hidden">
                    <Image
                      src={logoImage}
                      alt="Codex logo"
                      width={96}
                      height={96}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center border-4 border-[#0a0e27] shadow-lg"
                >
                  <Edit2 className="w-3.5 h-3.5 text-[#0a0e27]" />
                </motion.button>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white tracking-tight">Codex Touch </h2>
                <span className="inline-block px-3 py-1 mt-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Development Manager
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid gap-3">
              {[
                { icon: Mail, text: 'codex7314@gmail.com' },
                { icon: Phone, text: '01226694723' },
                { icon: MapPin, text: 'Cairo, Egypt' }
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                    <info.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Project Tracking */}
      <section className="px-6 mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Active Projects</h2>
          <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md">
            {userProjects.length} PROJECTS
          </span>
        </div>

        <div className="grid gap-4">
          {userProjects.map((project, index) => {
            const config = getStatusConfig(project.status);
            const StatusIcon = config.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-[#1a1f3a]/30 border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-white font-bold group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Started: {project.startDate}</p>
                  </div>
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase ${config.bgColor} ${config.color}`}>
                    <StatusIcon className={`w-3 h-3 ${project.status === 'in-progress' ? 'animate-spin' : ''}`} />
                    {config.label}
                  </div>
                </div>

                {project.status === 'in-progress' && (
                  <div className="space-y-2 mb-2">
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-gray-500 uppercase tracking-tighter">Completion</span>
                      <span className="text-cyan-400">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                )}

                <p className="text-[11px] text-gray-500 font-medium italic">
                  {project.status === 'in-progress' ? `Expected: ${project.estimatedCompletion}` :
                    project.status === 'completed' ? `Finished on: ${project.completedDate}` :
                      `Starts: ${project.estimatedStart}`}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Menu Options
      <section className="px-6 mb-8">
        <div className="bg-[#1a1f3a]/20 rounded-3xl border border-white/5 p-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.03)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 rounded-2xl flex items-center gap-4 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="flex-1 text-left font-semibold text-sm">{item.label}</span>
              {item.badge && (
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-cyan-500 text-[#0a0e27] text-[10px] font-black">
                  {item.badge}
                </span>
              )}
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </motion.button>
          ))}
        </div>
      </section> */}

      {/* Logout */}
      {/* <section className="px-6">
        <motion.button
          whileHover={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
          whileTap={{ scale: 0.98 }}
          className="w-full p-5 rounded-3xl border border-red-500/20 bg-red-500/5 flex items-center justify-center gap-3 transition-colors group"
        >
          <LogOut className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
          <span className="text-red-500 font-black text-sm uppercase tracking-widest">Sign Out</span>
        </motion.button>
      </section> */}

      <p className="text-center mt-8 text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
        Codex Framework © 2026
      </p>
    </div>
  );
}