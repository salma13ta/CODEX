// "use client"; // ضروري لأننا نستخدم Framer Motion و Lucide Icons

// import { motion } from 'framer-motion';
// import { Download, FileText, Package, CheckCircle2, Clock } from 'lucide-react';

// // البيانات (يمكن نقلها لاحقاً إلى API)
// const downloads = [
//   {
//     id: 1,
//     name: 'Codex Portfolio App',
//     description: 'Our showcase mobile application',
//     version: 'v2.1.0',
//     size: '45.2 MB',
//     downloads: '12.5K',
//     platform: 'Android',
//     status: 'available',
//     icon: '📱',
//     gradient: 'from-[#00d4ff] to-[#0066ff]',
//   },
//   {
//     id: 2,
//     name: 'Codex Dashboard Demo',
//     description: 'Interactive admin panel demo',
//     version: 'v1.8.5',
//     size: '32.8 MB',
//     downloads: '8.3K',
//     platform: 'Android',
//     status: 'available',
//     icon: '📊',
//     gradient: 'from-[#00ffff] to-[#00d4ff]',
//   },
//   {
//     id: 3,
//     name: 'E-Commerce Sample',
//     description: 'Full-featured shopping app',
//     version: 'v3.0.1',
//     size: '58.6 MB',
//     downloads: '15.7K',
//     platform: 'Android',
//     status: 'available',
//     icon: '🛒',
//     gradient: 'from-[#8b5cf6] to-[#00d4ff]',
//   },
//   {
//     id: 4,
//     name: 'Social Network Beta',
//     description: 'Next-gen social platform',
//     version: 'v0.9.2',
//     size: '67.4 MB',
//     downloads: '5.2K',
//     platform: 'Android',
//     status: 'beta',
//     icon: '💬',
//     gradient: 'from-[#00d4ff] to-[#8b5cf6]',
//   },
// ];

// const documentation = [
//   { name: 'API Documentation', type: 'PDF', size: '2.4 MB', icon: FileText },
//   { name: 'UI Kit Resources', type: 'ZIP', size: '125 MB', icon: Package },
//   { name: 'Technical Specs', type: 'PDF', size: '5.1 MB', icon: FileText },
// ];

// export default function DownloadsScreen() {
//   return (
//     <div className="min-h-screen bg-[#0a0e27] text-white pb-12 selection:bg-cyan-500/30">
//       {/* Header */}
//       <section className="px-6 pt-10 pb-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
//             <span className="bg-gradient-to-r from-[#00d4ff] to-[#00ffff] bg-clip-text text-transparent">
//               Downloads
//             </span>
//           </h1>
//           <p className="text-gray-400 text-lg">
//             Demo apps and technical resources
//           </p>
//         </motion.div>
//       </section>

//       {/* Stats Banner */}
//       <section className="px-6 mb-8">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 backdrop-blur-xl"
//         >
//           <div className="grid grid-cols-2 gap-8 text-center sm:text-left">
//             <div>
//               <div className="text-3xl font-black text-white mb-1">41.7K+</div>
//               <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Total Downloads</div>
//             </div>
//             <div className="border-l border-white/10 pl-8">
//               <div className="text-3xl font-black text-white mb-1">12</div>
//               <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Available Apps</div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* APK Downloads Grid */}
//       <section className="px-6 mb-12">
//         <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//           <Package className="w-5 h-5 text-cyan-400" />
//           Mobile Apps (APK)
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {downloads.map((app, index) => (
//             <motion.div
//               key={app.id}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="group relative p-6 rounded-2xl bg-[#1a1f3a]/40 border border-white/5 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300"
//             >
//               <div className="flex items-start gap-5">
//                 {/* App Icon */}
//                 <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-r ${app.gradient} shadow-lg shadow-blue-500/20 shrink-0`}>
//                   {app.icon}
//                 </div>

//                 {/* Info */}
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center justify-between gap-2 mb-1">
//                     <h3 className="text-xl font-bold text-white truncate group-hover:text-cyan-400 transition-colors">
//                       {app.name}
//                     </h3>
//                     {app.status === 'beta' && (
//                       <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-purple-500/20 text-purple-400 border border-purple-500/30 uppercase tracking-tighter">
//                         Beta
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-sm text-gray-400 mb-4 line-clamp-1">{app.description}</p>

//                   {/* Meta */}
//                   <div className="flex items-center gap-3 text-[11px] font-medium text-gray-500 mb-5 bg-white/5 w-fit px-3 py-1 rounded-full">
//                     <span>{app.version}</span>
//                     <span className="w-1 h-1 rounded-full bg-gray-700"></span>
//                     <span>{app.size}</span>
//                     <span className="w-1 h-1 rounded-full bg-gray-700"></span>
//                     <span className="text-cyan-500">{app.downloads} installs</span>
//                   </div>

//                   {/* Download Button */}
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className={`w-full py-3.5 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r ${app.gradient} shadow-xl shadow-blue-900/20 font-bold text-sm tracking-wide`}
//                   >
//                     <Download className="w-4 h-4 text-white" />
//                     Download APK
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Documentation List */}
//       <section className="px-6 mb-12">
//         <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//           <FileText className="w-5 h-5 text-cyan-400" />
//           Documentation
//         </h2>
//         <div className="space-y-3">
//           {documentation.map((doc, index) => {
//             const Icon = doc.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ x: 5 }}
//                 className="p-4 rounded-2xl flex items-center gap-4 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/20 cursor-pointer transition-all"
//               >
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20">
//                   <Icon className="w-6 h-6 text-cyan-400" />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h4 className="text-white font-bold text-sm">{doc.name}</h4>
//                   <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
//                     <span>{doc.type}</span>
//                     <span className="text-cyan-500/30">•</span>
//                     <span>{doc.size}</span>
//                   </div>
//                 </div>
//                 <div className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 transition-colors">
//                   <Download className="w-5 h-5 text-cyan-400" />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Download History Section */}
//       <section className="px-6">
//         <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//           <Clock className="w-5 h-5 text-cyan-400" />
//           Recent Activity
//         </h2>
//         <div className="bg-[#1a1f3a]/20 rounded-3xl border border-white/5 overflow-hidden backdrop-blur-sm">
//           {[
//             { name: 'Codex Portfolio App', date: '2 hours ago', status: 'completed' },
//             { name: 'API Documentation', date: 'Yesterday', status: 'completed' },
//             { name: 'E-Commerce Sample', date: '3 days ago', status: 'completed' },
//           ].map((item, index, arr) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className={`p-5 flex items-center gap-4 ${index !== arr.length - 1 ? 'border-b border-white/5' : ''}`}
//             >
//               <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-500/10 shrink-0">
//                 <CheckCircle2 className="w-5 h-5 text-cyan-400" />
//               </div>
//               <div className="flex-1 min-w-0">
//                 <h4 className="text-white text-sm font-bold truncate">{item.name}</h4>
//                 <p className="text-[11px] text-gray-500 font-medium">{item.date}</p>
//               </div>
//               <span className="text-[10px] font-black uppercase tracking-tighter text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
//                 {item.status}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }